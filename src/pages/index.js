import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">RUUUDDYYYYYYYYY!</h1>
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
    </>
  );
}
