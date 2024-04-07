/* eslint-disable react/prop-types */
const Button = ({ children, disabled, className, ...rest }) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`h-12 px-6 min-w-[150px] border bg-primary hover:bg-primary-light active:bg-primary-dark text-white font-medium rounded-md disabled:bg-stone-200 disabled:text-stone-600 border-none outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
