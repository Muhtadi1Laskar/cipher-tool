/* eslint-disable react/prop-types */
export default function FormGroups({ label, id, type, value, name, onChange, placeholder, options = [], required }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            {type === "select" ? (
                <select id={id} className="form-select" name={name} value={value} onChange={onChange}>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt.value} disabled={opt.disabled || false}>
                            {opt.text}
                        </option>
                    ))}
                </select>
            ) : (
                <textarea
                    id={id}
                    className="form-control"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    );
}