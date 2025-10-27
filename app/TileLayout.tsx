import Image from "next/image";

const TileLayout = ({ children }) => {
  return (
    <div className="w-full f-full  rounded-[19px] ">
      {/* Upper Tab*/}

      <div className="bg-[#363C43] px-[12px] py-[20px] rounded-[19px] shadow-2xl flex tile-shadow">
        <div>
          <Image
            width={24}
            height={24}
            src={"/vector.svg"}
            alt="d"
            className="h-fit"
          />
          <div className="flex flex-wrap w-[24px] gap-[1.5px] mt-[105px]">
            {Array.from({ length: 6 }).map((item, i) => (
              <div
                key={i}
                className="h-[9.31px] w-[9.31px] bg-[#4A4E54] "
              ></div>
            ))}
          </div>
        </div>

        {children}
      </div>

      <div className="mt-[21px] mb-[16px] w-full h-1   rounded-[3px] line-shadow "></div>
    </div>
  );
};

export default TileLayout;
