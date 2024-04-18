import PropTypes from "prop-types";

function Button({ onClick, arrowDirection, btnText }) {
  return (
    <button className="mb-[4rem] w-[11.85rem]" onClick={onClick}>
      <div className="flex justify-between items-center bg-[var(--color-white)] font-bold leading-[1.4rem] tracking-[3.75px] rounded-[2.8rem] pl-[1.7rem] pr-[.4rem] py-[.4rem]">
        <p className="text-[1.2rem] uppercase text-[var(--color-black)] opacity-[0.5]">
          {btnText}
        </p>
        <div className="w-[3.2rem] h-[3.2rem] bg-[var(--color-grey-dark)] hover:bg-[var(--color-grey-light)] rounded-[50%] flex justify-center items-center">
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
  btnText: PropTypes.string.isRequired,
};

export default Button;
