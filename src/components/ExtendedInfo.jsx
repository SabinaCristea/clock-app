import useTimeAndLocation from "../hooks/useIPLocation";
import ExtendedInfoItem from "./ExtendedInfoItem";
import PropTypes from "prop-types";

function ExtendedInfo({ className }) {
  const { timeAndLocation, isLoading, isError } = useTimeAndLocation();
  const timezone = timeAndLocation?.time?.timezone;
  const yearDay = timeAndLocation?.time?.yearDay;
  const weekDay = timeAndLocation?.time?.weekDay;
  const weekNumber = timeAndLocation?.time?.weekNumber;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div
      className={`grid gap-y-[1.6rem] py-[4.8rem] px-[2.6rem] ${className} transition-all duration-[0.4s]`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(2rem)",
        // add conditional white bg and text
      }}
    >
      <ExtendedInfoItem info={timezone} infoType="Current timezone" />
      <ExtendedInfoItem info={yearDay} infoType="Day of the year" />
      <ExtendedInfoItem info={weekDay} infoType="Day of the week" />
      <ExtendedInfoItem info={weekNumber} infoType="Week number" />
    </div>
  );
}

ExtendedInfo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ExtendedInfo;
