import { Icon } from "@/icons";
import { type IconTypes } from "@/icons";

export const Loading = ({
  icon = "loading",
  label,
}: {
  icon?: IconTypes;
  label?: string;
}) => (
  <div className="flex items-center">
    <Icon
      type={icon}
      className="animate-spin mr-3 h-5 w-5 align-center dark:fill-slate-100"
    />
    <label className="text-lg after:animate-dots">{label || "Loading"}</label>
  </div>
);
