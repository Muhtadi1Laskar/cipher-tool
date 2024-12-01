function EncodingComponent() {
    return (
        <div className="p-3">
            <h2 className="text-primary">Encodings</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="encoding-message" className="form-label">
                        Text:
                    </label>
                    <textarea
                        id="encoding-message"
                        className="form-control"
                        placeholder="Enter text to encode/decode"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="encoder-list" className="form-label">
                        Encoding Type:
                    </label>
                    <select id="encoder-list" className="form-select">
                        <option value="base64">Base64</option>
                        <option value="base32">Base32</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="type-list" className="form-label">
                        Action:
                    </label>
                    <select id="type-list" className="form-select">
                        <option value="encode">Encode</option>
                        <option value="decode">Decode</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Process
                </button>
            </form>
        </div>
    );
}

export default EncodingComponent;