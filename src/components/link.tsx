import { createLink } from "@tanstack/react-router";

const Anchor = ({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      className={[
        "underline hover:decoration-pink-500 hover:text-pink-500 hover:fill-pink-500",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
};

export const Link = createLink(Anchor);
