
export default function Field({ label, ...props }) {
    return (
        <>
            <label id="label">{label}</label>
            <input type="number" {...props} />
        </>
    );
}