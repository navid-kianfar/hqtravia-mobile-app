export default class GregorianDateConverter {
  IsValid(date): boolean {
    throw new Error('Method not implemented.');
  }
  ToDateTime(date): Date {
    return new Date(Date.UTC(date.Year, date.Month - 1, date.Day));
  }
  FromDateTime(date) {
    date = new Date(date);
    return {
      Year: date.getFullYear(),
      Month: date.getMonth() + 1,
      Day: date.getDate(),
      Hours: date.getHours(),
      Minutes: date.getMinutes(),
      Seconds: date.getSeconds(),
      Milliseconds: date.getMilliseconds(),
    };
  }
}
