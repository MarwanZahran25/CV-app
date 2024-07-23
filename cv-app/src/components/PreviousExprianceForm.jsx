import TextArea from "./TextArea";
export default function PreviousExprianceForm({ onChange, state }) {
  return (
    <div className="px-16 font-bold flex flex-col gap-4 max-w-[700px] ">
      <h1 className="text-2xl">Enter Any Previous Experience You Have</h1>
      <TextArea onChange={onChange} state={state} />
    </div>
  );
}
