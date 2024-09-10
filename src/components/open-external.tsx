export const OpenExternal = ({ text }: { text: string }) => {
  return (
    <label className="group flex ">
      {text}
      <Icon />
    </label>
  );
};

const Icon = () => {
  return (
    <svg
      className="ml-1 h-6 w-6"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(1, 0, 0, 1, 0, 0)"
    >
      <title>open-external</title>

      <g
        className="group-hover:fill-pink-500"
        transform="translate(85.333333, 64.000000)"
      >
        <path d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z"></path>
      </g>
    </svg>
  );
};
