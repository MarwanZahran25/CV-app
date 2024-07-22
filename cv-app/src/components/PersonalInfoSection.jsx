import MailIcon from "./MailIcon";
import PhoneIcon from "./PhoneIcon";
export default function PersonalInfoSection({
  Fullname = "Jon Doe",
  job = "Unembloyed",
  mail = "abc@example.com",
  phoneNumber = "00000000",
}) {
  return (
    <div className="font-bold flex flex-col py-12 lg:px-14 px-4 flex-wrap gap-9 ">
      <h1 className="flex justify-center text-4xl text-center">{Fullname}</h1>
      <h2 className="flex justify-center text-xl">{job}</h2>
      <div className="flex gap-4 justify-center">
        <div className="flex gap-2">
          <MailIcon />
          <h3>{mail}</h3>
        </div>
        <div className="flex gap-2">
          <PhoneIcon />
          <div>{phoneNumber}</div>
        </div>
      </div>
    </div>
  );
}
