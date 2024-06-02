import Image from "next/image";
import InputText from "../components/InputText";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center ">RUUUDDYYYYYYYYY!</h1>
        <div className="flex">
          <Image
            src="/home2.jpg"
            alt="Home"
            width={800}
            height={800}
            className="mx-auto"
          />
          <Image
            src="/home.png"
            alt="Home"
            width={800}
            height={800}
            className="mx-auto"
          />
        </div>
        <InputText label="Email" type="email" />
      </div>
    </>
  );
}
