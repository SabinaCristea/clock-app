import PropTypes from "prop-types";

function Button({ onClick, arrowDirection }) {
  return (
    <button className="pb-[4rem]" onClick={onClick}>
      <div className="flex gap-[1.5rem] items-center bg-[var(--color-white)] font-bold leading-[1.4rem] tracking-[3.75px] rounded-[2.8rem] pl-[1.7rem] pr-[.4rem] py-[.4rem]">
        <p className="text-[1.2rem] uppercase text-[var(--color-black)] opacity-[0.5]">
          More
        </p>
        <div className="w-[3.2rem] h-[3.2rem] bg-[var(--color-grey-dark)] rounded-[50%] flex justify-center items-center">
          <img
            src={`../assets/desktop/icon-arrow-${arrowDirection}.svg`}
            alt="Arrow down"
            className=""
          />
        </div>
      </div>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  arrowDirection: PropTypes.string.isRequired,
};

export default Button;
