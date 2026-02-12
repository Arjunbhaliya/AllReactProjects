
export default function Field({ lable, ...props }) {
    return (
        <>
            <label id="lable">{lable}</label>
            <input type="number" {...props} />
        </>
    );
}