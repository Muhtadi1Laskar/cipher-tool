import { useState } from "react";
import { hashOptions } from "../Utils/selectOptions";
import FormGroups from "./FormComponent";
import { postCall } from "../API/postCall";
import DisplayComponent from "./DisplayComponent";
import SpinnerComponent from "./SpinnerComponent";

export default function HashFileUploadComponent() {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const selectInputChange = (e) => {
        setSelectedAlgorithm(e.target.value);
    }

    const handleInputChange = (e) => {
        const fileName = e.target.files[0]?.name || "No file chosen";
        const fileNameDisplay = document.getElementById("file-name-display");

        setFile(e.target.files[0])

        fileNameDisplay.textContent = fileName;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!file || !selectedAlgorithm) {
            alert("Please select an algorithm and select a file");
            return
        }

        setIsLoading(true);
        setResponse("");

        const formData = new FormData();
        formData.append('myFile', file);
        formData.append('hash', selectedAlgorithm);

        try {
            const response = await postCall("hashFile", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponse(response.data.message);
        } catch(error) {
            console.log("An error fetching hash: ", error);
            setResponse("An error occured while processing the file");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container my-5">
            <h2 className="text-primary">Hash File</h2>
            <form onSubmit={handleSubmit}>
                <FormGroups
                    label="Hash Algorithm"
                    id="hash-message"
                    type="select"
                    placeholder="Select an Algorithm"
                    value={selectedAlgorithm}
                    name="hash"
                    onChange={selectInputChange}
                    options={[
                        { value: "", text: "Select an Algorithm", disabled: true },
                        ...hashOptions
                    ]}
                    required
                />
                <div className="file-upload">
                <label htmlFor="file" className="file-label">
                    <i className="upload-icon"></i>
                    <span>Choose File</span>
                </label>
                <input id="file" type="file" onChange={handleInputChange} />
                <span id="file-name-display"></span>
                </div>
                <button type="upload" className="btn btn-primary w-100">Upload</button>
            </form>
            {isLoading && <SpinnerComponent />}
            {response && <DisplayComponent fileType={selectedAlgorithm} message={response} />}
        </div>
    );
}