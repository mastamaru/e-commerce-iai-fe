import Image from "next/image";
import Input from "@/components/InputText";

export default function Login() {
  return (
    <>
      <section>
        <div className="flex container relative min-w-[100vw] justify-between">
          <Image
            src="/hero.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "1000px", height: "100vh" }}
            alt="hero"
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
                Hi, welcome back!
              </h2>
              <Input label="Email" type="email" />
              <Input label="Password" type="password" />
              <button className="bg-primary py-[11px] px-[160px] text-white">
                Login
              </button>
            </div>
            <p className="text-[16.67px] font-sarala absolute bottom-[38%]">
              Doesn't have account?{" "}
              <a href="#" className="font-bold">
                Sign up here{" "}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
