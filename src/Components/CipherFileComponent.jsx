import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import SpinnerComponent from "./SpinnerComponent";
import { postCall } from "../API/postCall";
import FormGroups from "./FormComponent";

export default function CipherFileComponent() {
    const [type, setType] = useState("");
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        key: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e) => {
        setType(e.target.value);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const fileNameDisplay = document.getElementById("file-name-display");
            if (fileNameDisplay) {
                fileNameDisplay.textContent = selectedFile.name;
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !type || !formData.key) {
            alert("Please fill in all fields and select a file.");
            return;
        }

        setIsLoading(true);
        setResponse("");

        const payload = new FormData();
        payload.append("myFile", file);
        payload.append("key", formData.key);
        payload.append("type", type);

        try {
            const response = await postCall("cipherFile", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setResponse(response.data.message);
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
            setResponse("An error occurred while processing the file.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-primary">Cipher File</h2>
            <form onSubmit={handleSubmit}>
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
                <FormGroups
                    label="Actions"
                    id="crypto-actions"
                    type="select"
                    value={type}
                    name="type"
                    onChange={handleSelectChange}
                    options={[
                        { value: "", text: "Select an Action", disabled: true },
                        { value: "encrypt", text: "Encrypt" },
                        { value: "decrypt", text: "Decrypt" },
                    ]}
                    required
                />
                <div className="file-upload">
                    <label htmlFor="file" className="file-label">
                        <i className="upload-icon"></i>
                        <span>Choose File</span>
                    </label>
                    <input id="file" type="file" onChange={handleFileChange} />
                    <span id="file-name-display">No file chosen</span>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Upload
                </button>
            </form>
            {isLoading && <SpinnerComponent />}
            {response && <DisplayComponent fileType="AES" message={response} />}
        </div>
    );
}
