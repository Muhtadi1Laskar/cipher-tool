function VerifyHashComponent() {
    return (
        <div className="p-3">
            <h2 className="text-primary">Verify Hash</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="verify-message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        id="verify-message"
                        className="form-control"
                        placeholder="Enter the message to verify"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="verify-hash" className="form-label">
                        Hash:
                    </label>
                    <input
                        id="verify-hash"
                        className="form-control"
                        type="text"
                        placeholder="Enter the hash"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Verify
                </button>
            </form>
        </div>
    );
}

export default VerifyHashComponent;