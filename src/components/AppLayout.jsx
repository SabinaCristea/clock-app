import { useEffect, useRef, useState } from "react";
import useGreetingIconImage from "../hooks/useGreetingIconImage";
import Button from "./Button";
import ExtendedInfo from "./ExtendedInfo";
import Quote from "./Quote";
import TimeAndPlace from "./TimeAndPlace";

function AppLayout() {
  const extendedInfoRef = useRef(null);
  const [showExpandedInfo, setShowExpandedInfo] = useState(false);
  const { image } = useGreetingIconImage();

  function handleExpandedInfo() {
    setShowExpandedInfo((state) => !state);
  }

  useEffect(() => {
    if (showExpandedInfo) {
      extendedInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showExpandedInfo]);

  return (
    <div className="">
      <img
        src={`../assets/mobile/bg-image-${image}time.jpg`}
        alt="Daytime phone"
        className="object-cover	fixed z-[-10] w-[100%] h-[100vh]"
      />
      <div className="fixed w-[100%] h-[100vh] bg-black opacity-[0.4] z-[-1]"></div>
      <div className="px-[2.6rem] pt-[3.2rem]">
        <Quote />
        <TimeAndPlace />
        <Button
          onClick={handleExpandedInfo}
          arrowDirection={showExpandedInfo ? "up" : "down"}
        />
      </div>
      <div ref={extendedInfoRef}>{showExpandedInfo && <ExtendedInfo />}</div>
    </div>
  );
}

export default AppLayout;
