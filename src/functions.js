import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const calculateAge = (birthDate, currentDate) => {
  if (!birthDate || !currentDate) return null;

  // Extract the year, month, and date from the birthDate and currentDate
  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay = birthDate.getDate();

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  // Calculate year difference
  let year = currentYear - birthYear;

  // Calculate month difference
  let month = currentMonth - birthMonth;
  if (month < 0) {
    year--;
    month += 12;
  }

  // Calculate day difference
  let day = currentDay - birthDay;
  if (day < 0) {
    // Get the number of days in the previous month
    const lastMonth = new Date(currentYear, currentMonth, 0).getDate();
    day += lastMonth;
    month--;
    if (month < 0) {
      year--;
      month += 12;
    }
  }

  return { year, month, day };
};

export const notify = () => toast.error("Birth Date is not correct.");
export const check = (age) => {
  return age !== null && age.year >= 0 && age.month >= 0 && age.day >= 0;
};
