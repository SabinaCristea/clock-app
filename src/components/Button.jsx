import PropTypes from "prop-types";
import React from "react";

const Button = React.memo(function Button({
  onClick,
  arrowDirection,
  btnText,
}) {
  return (
    <button
      className="mb-[4rem] w-[11.85rem] md:mb-[6.4rem] md:w-[14.6rem] lg:mb-0"
      onClick={onClick}
    >
      <div className="flex justify-between items-center bg-[var(--color-white)] font-bold leading-[1.4rem] tracking-[3.75px] rounded-[2.8rem] pl-[1.7rem] pr-[.4rem] py-[.4rem] md:leading-[2.8rem] md:tracking-[5px] md:pl-[2.1rem] md:pr-[.8rem] md:py-[.8rem] lg:pr-[.9rem]">
        <p className="text-[1.2rem] uppercase text-[var(--color-black)] opacity-[0.5] md:text-[1.6rem]">
          {btnText}
        </p>
        <div className="w-[3.2rem] h-[3.2rem] bg-[var(--color-grey-dark)] hover:bg-[var(--color-grey-light)] rounded-[50%] flex justify-center items-center md:w-[4rem] md:h-[4rem]">
          <img
            src={`../assets/desktop/icon-arrow-${arrowDirection}.svg`}
            alt="Arrow down"
          />
        </div>
      </div>
    </button>
  );
});

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  arrowDirection: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Button;
