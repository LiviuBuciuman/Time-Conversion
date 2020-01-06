const s = "12:05:39AM";
console.log(timeConversion(s));

function timeConversion(s) {
    const meridian = s.slice(-2);
    const hour = s.substring(0, 2);
    const min = s.substr(3, 2);
    const sec = s.substr(6, 2);
    let hourIn24 = "00";
    if (meridian.toUpperCase() === "PM") {
        if (hour === "12") {
            hourIn24 = "12";
        } else {
            hourIn24 = parseInt(hour) + 12;
        }
    } else {
        if (hour === "12") {
            hourIn24 = "00";
        } else {
            hourIn24 = hour;
        }
    }
    return hourIn24.toString() + ":" + min + ":" + sec;
}
