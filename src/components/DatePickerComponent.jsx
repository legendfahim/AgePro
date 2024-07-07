import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "phosphor-react";

export const DatePickerComponent = ({ label, date, setDate }) => {
  const [showInput, setShowInput] = useState(false);

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
    setShowInput(false);
  };

  return (
    <div className=" flex flex-col my-2 items-center">
      <div className="w-[50%]">
        <label className="text-body-4 font-normal  md:justify-center md:flex   text-metal-600 dark:text-black">
          {label}
        </label>
      </div>

      <button
        className="w-[286px] justify-start gap-2 rounded-md  border border-metal-50 p-4 text-left text-body-4 font-normal text-metal-600 hover:bg-white active:focus:scale-100 dark:border-metal-900 dark:bg-metal-900 dark:text-white dark:hover:bg-metal-800 flex items-center"
        onClick={() => setShowInput((prev) => !prev)}
      >
        <Calendar size={20} className="text-metal-400 dark:text-white" />
        {date ? format(date, "PPP") : <span>{label}</span>}
      </button>
      {showInput && (
        <input
          type="date"
          value={date ? format(date, "yyyy-MM-dd") : ""}
          onChange={handleDateChange}
          className=" mt-2 w-[286px] p-2 border rounded-lg invert bg-white shadow-lg dark:bg-metal-900 dark:border-metal-900 dark:text-white"
        />
      )}
    </div>
  );
};
