import PropTypes from "prop-types";

function ExtendedInfoItem({ info, infoType, className }) {
  return (
    <div
      className={`flex justify-between items-center md:flex-col md:items-start ${className}`}
    >
      <p className="text-[1rem] leading-[2.8rem] tracking-[2px] uppercase md:text-[1.3rem] md:tracking-[2.6px]">
        {infoType}
      </p>
      <div className="text-[2rem] md:text-[4rem] font-bold">{info}</div>
    </div>
  );
}

ExtendedInfoItem.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  infoType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ExtendedInfoItem;
