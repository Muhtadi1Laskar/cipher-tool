import { useState } from "react";
import { postCall } from "../API/postCall";
import FormGroups from "./FormComponent";
import { hashOptions } from "../Utils/selectOptions";
import DisplayComponent from "./DisplayComponent";

function VerifyHashComponent() {
    const [formData, setFormData] = useState({
        message: "",
        hash: "",
        hashAlgorithm: ""
    });
    const [verifyResponse, setVerifyResponse] = useState("");

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { message, hash, hashAlgorithm } = formData;
        const response = await postCall("verifyHash", {
            oldHash: hash,
            message: message,
            hash: hashAlgorithm
        });
        setVerifyResponse(getVerifyMessage(response.data.issame));
    }

    return (
        <div className="container my-5">
            <h2 className="text-primary">Verify Hash</h2>
            <form onSubmit={handleSubmit}>
                <FormGroups
                    label="Message:"
                    id="verify-message"
                    type="textarea"
                    placeholder="Enter the message"
                    value={FormData.message}
                    name="message"
                    onChange={handleInputChange}
                    required
                />
                <FormGroups
                    label="Hash:"
                    id="verify-hash"
                    type="textarea"
                    placeholder="Enter the hash"
                    value={FormData.message}
                    name="hash"
                    onChange={handleInputChange}
                    required
                />
                <FormGroups
                    label="Hash Algorithm:"
                    id="hash-algo"
                    type="select"
                    placeholder="Select an Algorithm"
                    value={formData.hashAlgorithm}
                    name="hashAlgorithm"
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Select a Cipher", disabled: true },
                        ...hashOptions
                    ]}
                />
                <button type="submit" className="btn btn-primary w-100">
                    Verify
                </button>
            </form>
            { verifyResponse && <DisplayComponent message={verifyResponse} /> }
        </div>
    );
}

const getVerifyMessage = (elem) => {
    return elem ? "The message is not altered" : "The message and the hash doesn't match";
}

export default VerifyHashComponent;