export const Button = ({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={[
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400",
      className,
    ].join(" ")}
    {...rest}
  >
    {children}
  </button>
);
