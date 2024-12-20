import { useState } from "react";
import { cipherOptions } from "../Utils/selectOptions";
import { postCall } from "../API/postCall";
import FormGroups from "./FormComponent";
import DisplayComponent from "./DisplayComponent";
import SpinnerComponent from "./SpinnerComponent";
import cipherRegistry from "../Tools/commonTools.js";

function CipherComponent() {
    const [formData, setFormData] = useState({
        cipherType: "",
        message: "",
        key: "",
        actionType: "",
    });
    const [cipherResponse, setCipherResponse] = useState("");
    const [showKeyField, setShowKeyField] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const checkOnHouseCipher = (cipherName) => {
        const cipherList = ['morse', 'vernam', 'dna', 'polybius'];
        return cipherList.includes(cipherName);
    }

    const handleOnHouseCipher = (cipherName, type, message, key = '') => {
        const cipher = cipherRegistry[cipherName];
        if (!cipher) {
            throw new Error(`Unsupported cipher: ${cipherName}`);
        }

        const action = cipher[type];
        if (!action) {
            throw new Error(`Unsupported action: ${action}`);
        }

        return action(message, key);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === "cipherType") {
            const noKeyRequired = [
                'atbashCipher',
                'baconCipher',
                'rot13Cipher',
                'binaryEncoder',
                'morse',
                'dna',
                'polybius'
            ];
            setShowKeyField(!noKeyRequired.includes(value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCipherResponse("");


        const { cipherType, message, key, actionType } = formData;

        try {
            if (checkOnHouseCipher(cipherType)) {
                let cipher = handleOnHouseCipher(cipherType, actionType, message, key);
                setCipherResponse(cipher);
            } else {
                const response = await postCall(cipherType, { message, key, type: actionType });
                setCipherResponse(response.data.message);
            }
        } catch (error) {
            console.log("Failed to encrypt/decrypt data: ", error);
            setCipherResponse("Failed to encrypt / decrypt data");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-primary">Ciphers</h2>
            <form onSubmit={handleSubmit}>
                <FormGroups
                    label="Message:"
                    id="crypto-message"
                    type="textarea"
                    placeholder="Enter the message"
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    required
                />
                <FormGroups
                    label="Ciphers:"
                    id="crypto-algo"
                    type="select"
                    value={formData.cipherType}
                    name="cipherType"
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Select a Cipher", disabled: true },
                        ...cipherOptions,
                    ]}
                />
                {showKeyField && (
                    <FormGroups
                        label="Key:"
                        id="crypto-key"
                        type="text"
                        placeholder="Enter the encryption key"
                        value={formData.key}
                        name="key"
                        onChange={handleInputChange}
                        required
                    />
                )}
                <FormGroups
                    label="Action:"
                    id="crypto-action"
                    type="select"
                    value={formData.actionType}
                    name="actionType"
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Select an Action", disabled: true },
                        { value: "encrypt", text: "Encrypt" },
                        { value: "decrypt", text: "Decrypt" },
                    ]}
                />
                <button type="submit" className="btn btn-primary w-100">
                    Execute
                </button>
            </form>
            {isLoading && <SpinnerComponent />}
            {cipherResponse && <DisplayComponent fileType={formData.cipherType} message={cipherResponse} />}
        </div>
    );
}

export default CipherComponent;
