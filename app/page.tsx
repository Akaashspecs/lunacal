import FirstTile from "./FirstTile";
import SecondTile from "./SecondTile";

export default function Home() {
  return (
    <div className=" bg-linear-to-b from-[#282D32]  to-[#191B1F] h-screen w-screen md:p-4 lg:p-4 overflow-hidden">
      <div className="  h-full w-full rounded-[27px] flex md:gap-[10px] lg:gap-[56px]">
        <div className=" w-[45%] bg-[#616161]/82 rounded-[27px] shrink-0" />

        <div className="flex flex-col overflow-y-scroll hide-scrollbar">
          <FirstTile />
          <SecondTile />
        </div>
      </div>
    </div>
  );
}
