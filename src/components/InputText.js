export default function Input({ label = "Email", type, placeholder, special }) {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <h3 className="font-sarala text-[16.67px]">{label}</h3>
        <div className={`flex ${special ? 'items-center' : ''}`}>
          {special && (
            <div className="w-[46px] h-[46px] bg-primary flex items-center justify-cente text-white">
              +62
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={`border border-primary h-[46px] pl-1 ${special ? 'w-[322px]' : 'w-[368px]'}`}
          />
        </div>
      </div>
    </>
  );
}