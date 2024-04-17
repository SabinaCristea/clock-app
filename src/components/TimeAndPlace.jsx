import useTime from "../hooks/useTime";
import useTimeAndLocation from "../hooks/useIPLocation";
import useGreetingIconImage from "../hooks/useGreetingIconImage";

function TimeAndPlace() {
  const time = useTime();
  const { timeAndLocation, isLoading, isError } = useTimeAndLocation();
  const { greeting, icon } = useGreetingIconImage();

  const timeAbbr = timeAndLocation?.time?.abbr;
  // const city = timeAndLocation?.location?.city;
  // const country = timeAndLocation?.location?.country;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching quote data</p>;
  }

  return (
    <div className="flex flex-col gap-[1.6rem] h-[18.5rem] mt-[12rem] mb-[4.8rem]">
      <div className="greeting flex gap-[1.6rem]">
        <img src={`../assets/desktop/icon-${icon}.svg`} alt={`Icon ${icon}`} />
        <p className="text-[1.5rem] leading-[2.5rem] uppercase tracking-[0.3rem]">
          {greeting}
        </p>
      </div>
      <div className="flex items-end">
        <time className="text-[10rem] font-bold tracking-[-0.25rem] leading-[10rem]">
          {time}
        </time>

        <div className="text-[1.5rem] font-light leading-[2.8rem] uppercase pb-[0.5rem] pl-[0.5rem]">
          {timeAbbr}
        </div>
      </div>
      <div className="uppercase text-[1.5rem] tracking-[0.3rem] leading-[2.8rem] font-bold">
        {/* In {city}, {country} */}
        In city, country
      </div>
    </div>
  );
}

export default TimeAndPlace;
