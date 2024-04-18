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
      className={`grid gap-y-[1.6rem] py-[4.8rem] px-[2.6rem] ${className} transition-all duration-[0.4s] md:grid-cols-2 md:gap-y-[4.9rem] md:gap-x-[8.1rem] md:py-[11rem] md:pl-[6.4rem] 
  
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
    </div>
  );
}

ExtendedInfo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ExtendedInfo;
