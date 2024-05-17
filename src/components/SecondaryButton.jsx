export default function SecondaryButton({
  className = "",
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`flex justify-between items-center px-5 py-1 font-semibold rounded-full transition duration-200 ease-in-out ${
        disabled
          ? "bg-primary/90"
          : "ring-primary hover:bg-primary ring-[1.5px] ring-inset"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
