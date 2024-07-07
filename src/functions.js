import {
  differenceInYears,
} from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const calculateAge = (birthDate, currentDate) => {
  if (!birthDate || !currentDate) return null;

  let year = differenceInYears(currentDate, birthDate);

  // Adjust months and days
  let month = currentDate.getMonth() - birthDate.getMonth();
  if (month < 0) {
    year--;
    month += 12;
  }

  let day = currentDate.getDate() - birthDate.getDate();
  if (day < 0) {
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    day += lastMonth;
    month--;
  }

  return { year, month, day };
};

export const notify = () => toast.error("Birth Date is not correct.");
 export const check = (age) => {
    return age !== null && age.year >= 0 && age.month >= 0 && age.day >= 0;
  };
