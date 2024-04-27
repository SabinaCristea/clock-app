import useGreetingIconImage from "../hooks/useGreetingIconImage";
import useTimeAndLocation from "../hooks/useIPLocation";
import ExtendedInfoItem from "./ExtendedInfoItem";
import PropTypes from "prop-types";

function ExtendedInfo({ className }) {
  const { timeAndLocation, isLoading, isError } = useTimeAndLocation();
  const { image } = useGreetingIconImage();
  const timezone = timeAndLocation?.time?.timezone;
  const yearDay = timeAndLocation?.time?.yearDay;
  const weekDay = timeAndLocation?.time?.weekDay;
  const weekNumber = timeAndLocation?.time?.weekNumber;

  const isDay = image === "day";

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div
      className={`grid gap-y-[1.6rem] py-[4.8rem] px-[2.6rem] ${className} transition-all duration-[0.4s] md:grid-cols-2 md:gap-y-[4.9rem] md:gap-x-[9rem] md:pt-[11rem] md:pb-[9rem] md:pl-[6.4rem] lg:gap-y-[4.2rem] lg:gap-x-[20.3rem] lg:py-[7.4rem] lg:pl-[16.5rem] relative 
  
      `}
      style={{
        backgroundColor: isDay
          ? "rgba(265, 265, 265, 0.75)"
          : "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(2rem)",
        color: isDay ? "#000" : "#fff",
      }}
    >
      <ExtendedInfoItem
        info={timezone}
        infoType="Current timezone"
        className="md:order-1"
      />
      <ExtendedInfoItem
        info={yearDay}
        infoType="Day of the year"
        className="md:order-3"
      />
      <ExtendedInfoItem
        info={weekDay}
        infoType="Day of the week"
        className="md:order-2"
      />
      <ExtendedInfoItem
        info={weekNumber}
        infoType="Week number"
        className="md:order-4"
      />
      <div className="hidden sp:block sp:absolute sp:w-[1px] sp:h-[25.2rem] sp:bg-white opacity-[0.25] top-[7.4rem] left-[50%]"></div>
    </div>
  );
}

ExtendedInfo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ExtendedInfo;
