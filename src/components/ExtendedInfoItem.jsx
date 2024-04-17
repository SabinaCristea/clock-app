import PropTypes from "prop-types";

function ExtendedInfoItem({ info, infoType }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-[1rem] leading-[2.8rem] tracking-[2px] uppercase">
        {infoType}
      </p>
      <div className="text-[2rem] font-bold">{info}</div>
    </div>
  );
}

ExtendedInfoItem.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  infoType: PropTypes.string.isRequired,
};

export default ExtendedInfoItem;
