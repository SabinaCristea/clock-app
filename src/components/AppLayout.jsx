import { useEffect, useRef, useState } from "react";
import useGreetingIconImage from "../hooks/useGreetingIconImage";
import Button from "./Button";
import ExtendedInfo from "./ExtendedInfo";
import Quote from "./Quote";
import TimeAndPlace from "./TimeAndPlace";

function AppLayout() {
  const mainContentRef = useRef(null);
  const extendedInfoRef = useRef(null);
  const [showExpandedInfo, setShowExpandedInfo] = useState(false);
  const { image } = useGreetingIconImage();

  function handleExpandedInfo() {
    setShowExpandedInfo((state) => !state);
  }

  useEffect(() => {
    if (showExpandedInfo) {
      extendedInfoRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div
        className="px-[2.6rem] pt-[3.2rem] flex flex-col h-[96vh] justify-between overflow-y-auto"
        ref={mainContentRef}
      >
        <Quote />
        <div className="">
          <TimeAndPlace />
          <Button
            onClick={handleExpandedInfo}
            arrowDirection={showExpandedInfo ? "up" : "down"}
            btnText={showExpandedInfo ? "Less" : "More"}
          />
        </div>
      </div>
      <div ref={extendedInfoRef}>
        <ExtendedInfo className={!showExpandedInfo ? "opacity-0" : ""} />
      </div>
    </div>
  );
}

export default AppLayout;
