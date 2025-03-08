type ButtonKind = "button" | "link";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: ButtonKind;
};

export const Button = ({
  className,
  children,
  kind = "button",
  ...rest
}: Props) => {
  return (
    <button className={[getClass(kind), className].join(" ")} {...rest}>
      {children}
    </button>
  );
};

const getClass = (kind: ButtonKind) => {
  switch (kind) {
    case "link":
      return "underline hover:decoration-pink-500 hover:text-pink-500 hover:fill-pink-500 dark:fill-slate-100 dark:hover:fill-pink-500";
    default:
      // case "button":
      return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400";
  }
};
