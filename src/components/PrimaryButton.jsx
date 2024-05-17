export default function PrimaryButton({
  className = "",
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`flex justify-between items-center mt-4 px-6 py-2 text-xl font-bold rounded-full text-white ring ring-white ${
        disabled ? "bg-white/90" : "hover:bg-white hover:text-primary"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
