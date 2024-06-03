import Image from "next/image";
import Input from "@/components/InputText";
import Link from "next/link";

export default function Login() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <section className="h-full flex">
        <div className="flex container relative min-w-[100vw] h-full">
          <div className="flex-1 relative">
            <Image
              src="/hero.png"
              layout="fill"
              objectFit="cover"
              alt="hero"
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 relative flex justify-center items-center">
            <Image
              src="/pererek-shop.png"
              width={209}
              height={60}
              alt="shop logo"
              className="absolute right-0 top-[5%]"
            />
            <div className="relative p-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-sarala font-bold text-2xl mb-4">
                  Hi, welcome back!
                </h2>
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <button className="bg-primary py-[11px] px-[160px] text-white">
                  Login
                </button>
              </div>
              <p className="text-[16.67px] font-sarala mt-4">
                Don&apos;t have account?{" "}
                <Link legacyBehavior href="/register">
                  <a className="font-bold">Sign up here</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
