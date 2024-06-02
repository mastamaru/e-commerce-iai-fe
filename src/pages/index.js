import Image from "next/image";
import InputText from "../components/InputText";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-md leading-3 text-center font-sarala ">
          RUUUDDYYYYYYYYY!
        </h1>
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
        <Navbar />
      </div>
    </>
  );
}
