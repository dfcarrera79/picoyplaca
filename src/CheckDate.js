const CheckDate = (date) => {
  if (date.length === 10) {
    const userKeyRegExp = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}?$/;
    const valid = userKeyRegExp.test(date);

    return valid;
    
  } else {
    return false;
  }
}
 
export default CheckDate;