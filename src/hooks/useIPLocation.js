import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getLocation from "../apis/apiGeolocation";
import getTime from "../apis/apiWorldTime";

function useTimeAndLocation() {
  const [ipData, setIpData] = useState(null);

  const {
    data: locationData,
    isLoading: isLocationLoading,
    isError: isLocationError,
  } = useQuery("location", () => getLocation({ ip: ipData?.client_ip }), {
    enabled: !!ipData,
  });

  const {
    data: timeData,
    isLoading: isTimeLoading,
    isError: isTimeError,
  } = useQuery("time", getTime);

  useEffect(() => {
    if (timeData) {
      setIpData(timeData);
    }
  }, [timeData]);

  const isLoading = isLocationLoading || isTimeLoading;
  const isError = isLocationError || isTimeError;

  let timeAndLocation = null;

  if (timeData && locationData) {
    timeAndLocation = {
      time: {
        abbr: timeData.abbreviation,
        weekDay: timeData.day_of_week,
        yearDay: timeData.day_of_year,
        timezone: timeData.timezone,
        weekNumber: timeData.week_number,
      },
      location: {
        city: locationData.regionName,
        country: locationData.country,
      },
    };
  }

  return { timeAndLocation, isLoading, isError };
}

export default useTimeAndLocation;
