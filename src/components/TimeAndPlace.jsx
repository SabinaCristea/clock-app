import useTime from "../hooks/useTime";
import useTimeAndLocation from "../hooks/useIPLocation";
import useGreetingIconImage from "../hooks/useGreetingIconImage";

function TimeAndPlace() {
  const time = useTime();
  const { timeAndLocation, isLoading, isError } = useTimeAndLocation();
  const { greeting, icon } = useGreetingIconImage();

  const timeAbbr = timeAndLocation?.time?.abbr;
  const city = timeAndLocation?.location?.city;
  const country = timeAndLocation?.location?.country;

  console.log(time);

  const [hours, minutes] = time.split(":");

  let hourNumber = parseInt(hours, 10);

  if (hourNumber === 24) {
    hourNumber = 0;
  }

  const formattedHour = hourNumber.toString().padStart(2, "0");

  const formattedTime = `${formattedHour}:${minutes}`;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="flex flex-col gap-[1.6rem] h-[18.5rem] mb-[4.8rem] md:gap-0 md:h-[23.1rem] md:mb-[8rem] lg:mb-0 lg:gap-[1.6rem] lg:h-[28.8rem]">
      <div className="greeting flex gap-[1.6rem] items-center">
        <img src={`../assets/desktop/icon-${icon}.svg`} alt={`Icon ${icon}`} />

        <p className="text-[1.5rem] leading-[2.5rem] uppercase tracking-[0.3rem] md:text-[1.8rem] md:leading-[2.8rem]  md:tracking-[0.36rem] lg:text-[2rem] lg:tracking-[0.4rem]">
          {greeting}
          <span className="hidden md:inline">, it`s currently</span>
        </p>
      </div>

      <div className="flex items-end">
        <time className="text-[10rem] font-bold tracking-[-0.25rem] leading-[10rem] md:text-[17.5rem] md:tracking-[-0.437rem] md:leading-[17.5rem] lg:text-[20rem] lg:leading-[20rem] lg:tracking-[-0.5rem]">
          {formattedTime}
        </time>

        <div className="text-[1.5rem] font-light leading-[2.8rem] uppercase pb-[0.5rem] pl-[0.5rem] md:text-[3.2rem] md:pb-[2.4rem] md:pl-[1.1rem] lg:text-[4rem] lg:pb-[2.7rem]">
          {timeAbbr}
        </div>
      </div>
      <div className="uppercase text-[1.5rem] tracking-[0.3rem] leading-[2.8rem] font-bold md:text-[1.8rem] md:tracking-[0.36rem] lg:text-[2.4rem] lg:tracking-[0.48rem]">
        In {city}, {country}
      </div>
    </div>
  );
}

export default TimeAndPlace;
