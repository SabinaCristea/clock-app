import Quote from "./Quote";
import TimeAndPlace from "./TimeAndPlace";

function AppLayout() {
  return (
    <div className="relative ">
      <img
        src="../assets/mobile/bg-image-daytime.jpg"
        alt="Daytime phone"
        className="object-cover	absolute z-[-10] w-[100%] h-auto "
      />
      <div className="absolute w-[100vw] h-[100vh] bg-black opacity-[0.4] z-[-1]"></div>
      <div className="px-[2.6rem] pt-[3.2rem]">
        <Quote />
        <TimeAndPlace />
      </div>
    </div>
  );
}

export default AppLayout;
