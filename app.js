const s = "07:05:45PM";
console.log(timeConversion(s));

function timeConversion(s) {
    const meridian = s.slice(-2);
    const hour = s.substring(0, 2);
    const min = s.substr(3, 2);
    const sec = s.substr(6, 2);
    let hourIn24 = 0;
    hourIn24 = (meridian.toUpperCase() === "PM") ? parseInt(hour) + 12 : parseInt(hour);
    return hourIn24.toString() + ":" + min + ":" + sec;
}