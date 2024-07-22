export default function Input({ fieldName, onChange, type, id, state }) {
  return (
    <div className="flex flex-col gap-2 p-5 items-center">
      <label htmlFor={id}>{fieldName}</label>
      <input
        type={type}
        id={id}
        className="border-2 border-black rounded px-2 w-72 py-1"
        onChange={onChange}
        value={state}
      />
    </div>
  );
}
