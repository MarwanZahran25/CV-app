export default function TextArea({ onChange, state }) {
  return (
    <textarea
      onChange={onChange}
      value={state}
      className="min-h-52 p-5"
    ></textarea>
  );
}
