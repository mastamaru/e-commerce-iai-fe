// pages/register.js
import Image from "next/image";
import Input from "@/components/InputText";

export default function Register() {
  return (
    <>
      <section>
        <div className="flex container relative min-w-[100vw] justify-between">
        <Image
            src="/hero_1.png"
            width={924}
            height={1024}
            alt="hero_1"
            sizes="(max-width: 1000px) 100vw, 1000px"
        />

          <Image
            src="/pererek-shop.png"
            width={209}
            height={60}
            alt="shop logo"
            className="absolute right-0 top-[5%]"
          />
          <div className="relative">
            <div className="flex flex-col mt-64 mr-64 gap-4">
              <h2 className="font-sarala font-bold text-2xl">
                Create an account
              </h2>
              <Input label="Name" type="text" />
              <Input label="Phone number" type="text" special />
              <Input label="Email" type="email" />
              <Input label="Password" type="password" />
              <button className="bg-primary py-[11px] px-[160px] text-white">
                Sign up
              </button>
            </div>
            <p className="text-[16.67px] font-sarala absolute bottom-[38%]">
              Already have an account?{" "}
              <a href="/login" className="font-bold">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
