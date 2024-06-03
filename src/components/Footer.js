import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section>
        <div className="relative w-full min-h-[400px] bg-secondary">
          <Image
            src="/pererek-shop.png"
            width={209}
            height={60}
            alt="logo"
            className="absolute top-[15%] left-[5%]"
          />
        </div>
      </section>
    </>
  );
}
