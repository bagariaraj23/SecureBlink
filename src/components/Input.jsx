const Input = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  border,
  placeholder,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className={`peer p-0 md:p-4 pt-6 font-light italic bg-transparent border-b-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${border ? "border-b-2" : ""}
        ${border ? "border-[#01CB63]" : "border-white"}
        `}
      />
      <label
        className={`italic absolute text-md duration-150ms transform -translate-y-3 top-5 origin-[0]
      ${formatPrice ? "left-9" : "left-0"}
      peer-placeholder-shown:scale-100
      peer-focus:scale-75
      peer-focus:-translate-y-4 text-zinc-500
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
