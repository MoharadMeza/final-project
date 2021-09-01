import moment from "jalali-moment";
export function converToGe(shamsiDate) {
    return moment.from(shamsiDate, 'fa', 'YYYY-MM-DD').format('YYYY-MM-DD');
}
export function converToSh(gregorianDate) {
    return moment(gregorianDate, 'YYYY-MM-DD').locale('fa').format('YYYY/MM/DD');
}
