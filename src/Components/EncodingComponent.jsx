import { useState } from "react";
import { postCall } from "../API/postCall";
import FormGroups from "./FormComponent";
import { encoderOptions } from "../Utils/selectOptions";
import DisplayComponent from "./DisplayComponent";
import SpinnerComponent from "./SpinnerComponent";
import cipherRegistry from "../Tools/commonTools";


function EncodingComponent() {
    const [formData, setFormData] = useState({
        message: "",
        encoderType: "",
        type: ""
    });
    const [responseType, setResponseType] = useState("");
    const [showEncoderTypeField, setEncoderTypeField] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const checkOnHouseEncoding = (encodingName) => {
        const encodings = ["binary", "decimal", "octal", "hexadecimal"];
        return encodings.includes(encodingName);
    }

    function isNumeric(str) {
        if (typeof str != "string") {
            return false
        }

        return !isNaN(str) &&
            !isNaN(parseFloat(str));
    }

    const handleOnHouseEncoding = (message, encoderType) => {
        if (!isNumeric(message)) {
            alert("Pleaser enter a number");
            return "";
        }
        const encoder = cipherRegistry[encoderType];
        if (!encoder) {
            throw new Error(`Unsupported encoder: ${encoder}`);
        }

        console.log(encoder, typeof message);

        return encoder(message);
    }

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "encoderType") {
            const notKeyRequired = [
                'binary',
                'octal',
                'hexadecimal',
                'decimal'
            ];
            setEncoderTypeField(!notKeyRequired.includes(value));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        setIsLoading(true);
        setResponseType("");

        try {
            const { message, encoderType, type } = formData;
            if (checkOnHouseEncoding(encoderType)) {
                const response = handleOnHouseEncoding(message, encoderType);
                setResponseType(response);
            } else {
                const response = await postCall("base64Encoder", { message, encoderType, type });
                setResponseType(response.data.message);
            }
        } catch (error) {
            console.log("An error fetching hash: ", error);
            setResponseType("An error occured while processing the file");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="p-3">
            <h2 className="text-primary">Encodings</h2>
            <form onSubmit={handleSubmit}>
                <FormGroups
                    label="Message:"
                    id="encoding-message"
                    type="textarea"
                    placeholder="Enter the message"
                    value={FormData.message}
                    name="message"
                    onChange={handleInputChange}
                    required
                />
                <FormGroups
                    label="Encoding Type:"
                    id="encoder-list"
                    type="select"
                    placeholder="Select an Encoder"
                    value={formData.encoderType}
                    name="encoderType"
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Select an Encoder", disabled: true },
                        ...encoderOptions
                    ]}
                    required
                />
                {showEncoderTypeField && (
                    <FormGroups
                        label="Type:"
                        id="type-list"
                        type="select"
                        placeholder="Select the type"
                        value={formData.type}
                        name="type"
                        onChange={handleInputChange}
                        options={[
                            { value: "", text: "Select an Encoder", disabled: true },
                            { value: "encode", text: "Encode" },
                            { value: "decode", text: "Decode" },
                        ]}
                        required
                    />
                )}
                <button type="submit" className="btn btn-primary w-100">
                    Process
                </button>
            </form>
            {isLoading && <SpinnerComponent />}
            {responseType && <DisplayComponent fileType={formData.encoderType} message={responseType} />}
        </div>
    );
}

export default EncodingComponent;