import Image from "next/image";
import Input from "@/components/InputText";

export default function Register() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <section className="h-full flex">
        <div className="flex container relative min-w-[100vw] h-full">
          <div className="flex-1 relative">
            <Image
              src="/hero_1.png"
              layout="fill"
              objectFit="cover"
              alt="hero_1"
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
              <h2 className="font-sarala font-bold text-2xl mb-4">
                Create an account
              </h2>
              <div className="flex flex-col gap-4">
                <Input label="Name" type="text" />
                <Input label="Phone number" type="text" special />
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <button className="bg-primary py-2 px-16 text-white">
                  Sign up
                </button>
              </div>
              <p className="text-[16.67px] font-sarala mt-4">
                Already have an account?{" "}
                <a href="/login" className="font-bold">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
