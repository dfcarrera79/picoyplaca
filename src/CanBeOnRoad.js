import CheckPlate from "./CheckPlate";

const CanBeOnRoad = (_plate, _date) => {
  const plateCorrect = CheckPlate(_plate);

  if (plateCorrect) {
    const lastDigit = parseInt(_plate.slice(-1));
    const currentDate = new Date(_date);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getUTCDate();
    const weekDay = currentDate.getDay();

    const date1 = new Date(`${month} ${day}, ${year} 07:00:00`);
    const date2 = new Date(`${month} ${day}, ${year} 09:30:00`);
    const date3 = new Date(`${month} ${day}, ${year} 16:00:00`);
    const date4 = new Date(`${month} ${day}, ${year} 19:30:00`);

    const message = "Your car can't be on road";

    if (
      (currentDate >= date1 && currentDate <= date2) ||
      (currentDate >= date3 && currentDate <= date4)
    ) {
      if (weekDay === 1 && (lastDigit === 1 || lastDigit === 2)) {
        return message;
      } else if (weekDay === 2 && (lastDigit === 3 || lastDigit === 4)) {
        return message;
      } else if (weekDay === 3 && (lastDigit === 5 || lastDigit === 6)) {
        return message;
      } else if (weekDay === 4 && (lastDigit === 7 || lastDigit === 8)) {
        return message;
      } else if (weekDay === 5 && (lastDigit === 9 || lastDigit === 0)) {
        return message;
      } else {
        return "Your car can be on road";
      }
    } else {
      return "Your car can be on road";
    }
  } else {
    return "Incorrect input format";
  }
};

export default CanBeOnRoad;
