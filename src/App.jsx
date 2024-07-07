import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DatePickerComponent } from "./components/DatePickerComponent";
//Functions
import { calculateAge, check, notify } from "./functions";

export const App = () => {
  //States of data
  const [birthDate, setBirthDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hasInteracted, setHasInteracted] = useState(false);

  //Calculate Age
  const age = calculateAge(birthDate, currentDate);
  //UseEffect to prevent notify function
  useEffect(() => {
    if (hasInteracted && !check(age)) {
      notify();
    }
  }, [age, hasInteracted]);

  return (
    <div className="age-calculator flex flex-col">
      <h1 className="text-3xl p-2 arsenal-sc-bold">AgePro</h1>
      <DatePickerComponent
        label="Select Your Birth Date"
        date={birthDate}
        setDate={(date) => {
          setBirthDate(date);
          setHasInteracted(true);
        }}
      />
      <DatePickerComponent
        label="Select Current Date"
        date={currentDate}
        setDate={(date) => {
          setCurrentDate(date);
          setHasInteracted(true);
        }}
      />
      {/* Display the Age */}
      {check(age) && (
        <div className="age-result">
          <p className="text-center text-black">
            Your age is: {age.year} years {age.month} months {age.day} days
          </p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
