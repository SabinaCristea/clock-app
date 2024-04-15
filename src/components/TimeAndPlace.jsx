import { useQuery } from "react-query";
import getTime from "../apis/apiWorldTime";

function TimeAndPlace() {
  const { data: time, isLoading, isError } = useQuery("worldTime", getTime);

  const { abbreviation, datetime } = time || {};

  const dateObject = new Date(datetime);
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching quote data</p>;
  }

  return (
    <div className="flex flex-col gap-[1.6rem] h-[18.5rem] mt-[14rem]">
      <div className="greeting flex gap-[1.6rem]">
        <img src="../assets/desktop/icon-sun.svg" alt="" />
        <p className="text-[1.5rem] leading-[2.5rem] uppercase tracking-[0.3rem]">
          Good morning
        </p>
      </div>
      <div className="flex items-end">
        <div className="hour text-[10rem] font-bold tracking-[-0.25rem] leading-[10rem]">
          {hour}:
        </div>
        <div className="minutes text-[10rem] font-bold tracking-[-0.25rem] leading-[10rem]">
          {minutes}
        </div>
        <div className="text-[1.5rem] font-light leading-[2.8rem] uppercase pb-[0.5rem] pl-[0.5rem]">
          {abbreviation}
        </div>
      </div>
      <div className="uppercase text-[1.5rem] tracking-[0.3rem] leading-[2.8rem] font-bold">
        In City, Country
      </div>
    </div>
  );
}

export default TimeAndPlace;
