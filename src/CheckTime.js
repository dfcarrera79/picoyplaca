const CheckTime = (time) => {
  if (time.length === 6) {
    const userKeyRegExp = /^[0-9]{2}[0-9]{2}?$/;
    const valid = userKeyRegExp.test(time);

    return valid;
    
  } else {
    return false;
  }
}
 
export default CheckTime;