import { Icon } from "@/icons";

type Error = { message?: string };

export const Error = ({ message }: Error) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Icon type="exclamation" className="w-6 fill-red-700 mr-2" />
        <label className="text-2xl font-bold text-red-700">Error</label>
      </div>
      <label className="font-bold my-4">
        Jim has been notified of this error. Please try again in a few minutes.
      </label>

      <label className="font-bold">Details:</label>
      <label>{errorMessage(message)}</label>
    </div>
  );
};

const errorMessage = (message = "Something went wrong.") => message;
