import PropTypes from "prop-types";
import React from "react";

const ExtendedInfoItem = React.memo(function ExtendedInfoItem({
  info,
  infoType,
  className,
}) {
  return (
    <div
      className={`flex justify-between items-center md:flex-col md:items-start ${className} lg:gap-[0.9rem]`}
    >
      <p className="text-[1rem] leading-[2.8rem] tracking-[2px] uppercase md:text-[1.3rem] md:tracking-[2.6px] lg:text-[1.5rem]  lg:tracking-[3px]">
        {infoType}
      </p>
      <div className="text-[2rem] md:text-[4rem] font-bold lg:text-[5.6rem] lg:leading-[5.5rem]">
        {info}
      </div>
    </div>
  );
});

ExtendedInfoItem.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  infoType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ExtendedInfoItem;
