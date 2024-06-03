import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <section>
        <div className="flex font-sarala items-center min-w-[100vw] h-[80px] text-primary bg-white">
          <Image
            className="ml-16 h-[44px] w-[44px]"
            src="/pererek.png"
            width={44}
            height={44}
            alt="logo"
          />
          <div className="flex gap-11 items-center ml-[720px] mr-[600px] text-primary">
            <a href="#" className="text-[16.67px] underline font-bold">
              Home
            </a>
            <a href="#" className="text-[16.67px]">
              My Cart
            </a>
            <a href="#" className="text-[16.67px]">
              Orders
            </a>
          </div>
          <div className="flex gap-2 items-center mr-16">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={40} // Ubah ukuran sesuai kebutuhan
              height={40} // Ubah ukuran sesuai kebutuhan
              alt="profile"
              className="rounded-full"
            />
            <p className="text-[13.9px] leading-5">Hi, Hiera</p>

            <MdArrowForwardIos className="rotate-90" />
          </div>
        </div>
      </section>
    </>
  );
}
