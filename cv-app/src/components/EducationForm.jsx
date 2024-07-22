import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
export default function EducationForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [universty, setUniversty] = useState("");
  const [degree, setDegree] = useState("");
  const [starting, setStarting] = useState("");
  const [finishing, setFinishing] = useState("");

  const phrase = `Studied ${degree} in ${universty} from ${starting} to ${finishing}`;
  if (!isSubmited) {
    return (
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-bold text-2xl">Enter Your Education</h1>
        <form className="flex flex-wrap justify-center">
          <Input
            fieldName="Your Univirsty"
            id="unvirsty"
            type="text"
            state={universty}
            onChange={(e) => {
              setUniversty(e.target.value);
            }}
          />
          <Input
            fieldName="Your Degree"
            id="degree"
            type="text"
            state={degree}
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />

          <Input
            fieldName="Starting Year"
            id="startYear"
            type="number"
            state={starting}
            onChange={(e) => {
              setStarting(e.target.value);
            }}
          />
          <Input
            fieldName="Finshing Year"
            id="finishYear"
            type="number"
            state={finishing}
            onChange={(e) => {
              setFinishing(e.target.value);
            }}
          />
        </form>
        <Button
          text="Submit"
          onClick={() => {
            setIsSubmited(true);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="p-10 text-center font-semibold text-2xl flex-col flex items-center gap-5 mb-10">
        <h1>{phrase}</h1>
        <Button
          text="Edit"
          onClick={() => {
            setIsSubmited(false);
          }}
        />
      </div>
    );
  }
}
