const CheckPlate = ( plate ) => {
  if (plate.length === 6) {
    const userKeyRegExp = /^[a-zA-Z]{3}[0-9]{3}?$/;
    const valid = userKeyRegExp.test(plate);

    return valid;
  } else if (plate.length === 7) {
    const userKeyRegExp = /^[a-zA-Z]{3}[0-9]{4}?$/;
    const valid = userKeyRegExp.test(plate);

    return valid;
  } else {
    return false;
  }
};

export default CheckPlate;