export default function Input({ label = "Email", type, value }) {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <h3 className="font-sarala text-[16.67px]">{label}</h3>
        <input
          type={type}
          className="border border-primary w-[368px] h-[46px] pl-1"
        />
      </div>
    </>
  );
}
