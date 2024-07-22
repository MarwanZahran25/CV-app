export default function PreviousSection({ text }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text text-3xl">My previous expriance</h1>
      <p className="  text-justify w-1/2">{text}</p>
    </div>
  );
}
