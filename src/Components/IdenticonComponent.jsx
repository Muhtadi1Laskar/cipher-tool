import { useState } from "react";
import { postCall } from "../API/postCall";
import { hashOptions } from "../Utils/selectOptions";
import FormGroups from './FormComponent';
import SpinnerComponent from "./SpinnerComponent";

export default function IdenticonComponent() {
    const [formData, setFormData] = useState({
        message: "",
        hash: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setResponse("");

        try {
            const { message, hash } = formData;
            const requestBody = {
                message,
                hash
            };
            const response = await postCall('identicon', requestBody);
            console.log(response);
            setResponse(`data:image/png;base64,${response.data.Identicon}`);
        } catch(error) {
            console.log("Error generating identicon: ", error);
            setResponse("Error generating identicon");
        } finally {
            setIsLoading(false);
        }
    }


    return (
         <div className="container-fluid my-5">
            <h2 className="text-primary">Generate Identicon</h2>
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
                    Generate Identicon
                </button>
            </form>
            {isLoading && <SpinnerComponent />}
            {response && 
                (<div className="image-div">
                    <img 
                    id="identicon" 
                    alt="Identicon will appear here" 
                    src={response}
                    />
                </div>)}
        </div>
    )
}