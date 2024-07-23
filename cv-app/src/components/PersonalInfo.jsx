import { useState } from "react";
import PersonalInfoSection from "./PersonalInfoSection";
import Button from "./Button";
import Input from "./Input";
export default function PersonalInfo() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const FullName = `${firstName} ${lastName}`;

  if (!isSubmited) {
    return (
      <div className="flex flex-col items-center bg-gray-100 px-5 py-5">
        <div className="flex flex-wrap justify-between px-5 ">
          <Input
            fieldName="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            id="firstName"
            state={firstName}
          />
          <Input
            fieldName="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            id="LastName"
            state={lastName}
          />
          <Input
            fieldName="Position"
            onChange={(e) => {
              setJob(e.target.value);
            }}
            type="text"
            id="job"
            state={job}
          />
          <Input
            fieldName="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="number"
            id="phoneNumber"
            state={phoneNumber}
          />
          <Input
            fieldName="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            state={email}
          />
        </div>
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
      <div className="flex flex-col items-center bg-gray-100 pb-4">
        <PersonalInfoSection
          Fullname={FullName}
          job={job}
          mail={email}
          phoneNumber={phoneNumber}
        />
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
