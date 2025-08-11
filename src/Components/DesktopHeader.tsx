export default function DesktopHeader() {
  return (
    <div className="flex items-center w-full h-[44px] py-[14px] pl-[60px] bg-[#003A46]">
      <div className="buttons w-[1200px] flex items-center justify-between text-[#AAAAAA] text-[14px] font-normal">
        <p className="cursor-pointer">მენეჯერისთვის</p>
        <p className="cursor-pointer">ადმინისტრატორისთვის</p>
        <p className="cursor-pointer">დისტრიბუტორისთვის</p>
        <p className="cursor-pointer">გაყიდვების გუნდისთვის</p>
      </div>
    </div>
  );
}
