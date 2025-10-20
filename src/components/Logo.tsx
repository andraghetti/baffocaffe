import Image from "next/image";

const Logo = () => {
  return (
    <div className="mb-8 portrait:mb-8 landscape:mb-2 landscape:sm:mb-3 landscape:md:mb-4 flex justify-center">
      <Image
        src="/logo-baffo.svg"
        alt="Baffo Logo"
        width={500}
        height={500}
        className="w-[480px] h-[480px] md:w-[600px] md:h-[600px] landscape:w-[384px] landscape:h-[384px] landscape:sm:w-[432px] landscape:sm:h-[432px] landscape:md:w-[480px] landscape:md:h-[480px] -m-30"
        priority
      />
    </div>
  );
};

export default Logo;
