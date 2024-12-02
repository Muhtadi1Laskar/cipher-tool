import { useState } from "react";
import { hashOptions } from "../Utils/selectOptions.js";
import { postCall } from "../API/postCall.js";
import FormGroups from "./FormComponent.jsx";
import DisplayComponent from "./DisplayComponent.jsx";
import SpinnerComponent from "./SpinnerComponent.jsx";


export default function HashComponent() {
    const [hashResponse, setHashResponse] = useState("");
    const [formData, setFormData] = useState({
        message: "",
        hash: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setHashResponse("");
        
        try {
            const { message, hash } = formData;
            const requestBody = {
                message: message,
                hash: hash
            };
            const response = await postCall('hashData', requestBody);
            setHashResponse(response.data.hash);
        } catch(error) {
            console.log("Error hashing data: ", error);
            setHashResponse("Failed to hash the data");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container-fluid my-5">
            <h2 className="text-primary">Hashing</h2>
            <form onSubmit={handleSubmit}>
                <FormGroups
                    label="Message:"
                    id="hash-message"
                    type="textarea"
                    placeholder="Enter the message"
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    required
                />
                <FormGroups
                    label="Hash Algorithm:"
                    id="hash-algo"
                    type="select"
                    placeholder="Select an Algorithm"
                    value={formData.hash}
                    name="hash"
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Select a Cipher", disabled: true },
                        ...hashOptions
                    ]}
                />
                <button type="submit" className="btn btn-primary w-100">
                    Generate Hash
                </button>
            </form>
            {isLoading && <SpinnerComponent />}
            {!hashResponse ? "" : <DisplayComponent fileType={formData.hash} message={hashResponse} />}
        </div>
    );
}