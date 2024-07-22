import { useState } from "react";
import TextArea from "./TextArea";
import Button from "./Button";
import PreviousExprianceForm from "./PreviousExprianceForm";
import PreviousSection from "./PreviousSection";
export default function PreviousExpriance() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [text, setText] = useState("");
  if (!isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <PreviousExprianceForm
          state={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setIsSubmitted(true);
          }}
          text="Submit"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-10">
        <PreviousSection text={text} />
        <Button
          text="Edit"
          onClick={() => {
            setIsSubmitted(false);
          }}
        />
      </div>
    );
  }
}
