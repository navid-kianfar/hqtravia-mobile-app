export default class PersianDateConverter {
  converter = null;

  _initialize() {
    this.converter = {};
    this.converter.j_days_in_month = [
      31,
      31,
      31,
      31,
      31,
      31,
      30,
      30,
      30,
      30,
      30,
      29,
    ];
    this.converter.g_days_in_month = [
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    this.converter.toGeorgian = (j_y, j_m, j_d) => {
      j_y = parseInt(j_y, 10);
      j_m = parseInt(j_m, 10);
      j_d = parseInt(j_d, 10);
      let jy = j_y - 979;
      let jm = j_m - 1;
      let jd = j_d - 1;
      let j_day_no =
        365 * jy + Math.floor(jy / 33) * 8 + Math.floor(((jy % 33) + 3) / 4);
      for (let i = 0; i < jm; i += 1) {
        j_day_no += this.converter.j_days_in_month[i];
      }
      j_day_no += jd;
      let g_day_no = j_day_no + 79;
      let gy = 1600 + 400 * Math.floor(g_day_no / 146097);
      /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
      g_day_no = g_day_no % 146097;
      let leap = true;
      if (g_day_no >= 36525) {
        /* 36525 = 365*100 + 100/4 */
        g_day_no -= 1;
        gy += 100 * Math.floor(g_day_no / 36524);
        /* 36524 = 365*100 + 100/4 - 100/100 */
        g_day_no = g_day_no % 36524;
        if (g_day_no >= 365) {
          g_day_no += 1;
        } else {
          leap = false;
        }
      }
      gy += 4 * Math.floor(g_day_no / 1461);
      /* 1461 = 365*4 + 4/4 */
      g_day_no %= 1461;
      if (g_day_no >= 366) {
        leap = false;
        g_day_no -= 1;
        gy += Math.floor(g_day_no / 365);
        g_day_no = g_day_no % 365;
      }
      let i;
      for (
        i = 0;
        g_day_no >= this.converter.g_days_in_month[i] + (i === 1 && leap);
        i += 1
      ) {
        g_day_no -= this.converter.g_days_in_month[i] + (i === 1 && leap);
      }
      let gm = i + 1;
      let gd = g_day_no + 1;
      return [gy, gm, gd];
    };
    this.converter.checkDate = (j_y, j_m, j_d) => {
      return !(
        j_y < 0 ||
        j_y > 32767 ||
        j_m < 1 ||
        j_m > 12 ||
        j_d < 1 ||
        j_d >
          this.converter.j_days_in_month[j_m - 1] +
            (j_m === 12 && 0 !== ((j_y - 979) % 33) % 4)
      );
    };
    this.converter.fromGeorgian = (g_y, g_m, g_d) => {
      g_y = parseInt(g_y, 10);
      g_m = parseInt(g_m, 10);
      g_d = parseInt(g_d, 10);
      let gy = g_y - 1600;
      let gm = g_m - 1;
      let gd = g_d - 1;
      let g_day_no =
        365 * gy +
        Math.floor((gy + 3) / 4) -
        Math.floor((gy + 99) / 100) +
        Math.floor((gy + 399) / 400);
      for (let i = 0; i < gm; i += 1) {
        g_day_no += this.converter.g_days_in_month[i];
      }
      if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) {
        /* leap and after Feb */
        g_day_no += 1;
      }
      g_day_no += gd;
      let j_day_no = g_day_no - 79;
      let j_np = Math.floor(j_day_no / 12053);
      j_day_no %= 12053;
      let jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
      j_day_no %= 1461;
      if (j_day_no >= 366) {
        jy += Math.floor((j_day_no - 1) / 365);
        j_day_no = (j_day_no - 1) % 365;
      }
      let i;
      for (
        i = 0;
        i < 11 && j_day_no >= this.converter.j_days_in_month[i];
        i += 1
      ) {
        j_day_no -= this.converter.j_days_in_month[i];
      }
      let jm = i + 1;
      let jd = j_day_no + 1;
      return [jy, jm, jd];
    };
  }

  IsValid(date): boolean {
    if (!this.converter) {
      this._initialize();
    }
    throw new Error('Method not implemented.');
  }

  ToDateTime(date): Date {
    if (!this.converter) {
      this._initialize();
    }
    const result = this.converter.toGeorgian(date.Year, date.Month, date.Day);
    const utc = Date.UTC(result[0], result[1] - 1, result[2]);
    return new Date(utc);
  }

  FromDateTime(date) {
    date = new Date(date);
    if (!this.converter) {
      this._initialize();
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const res = this.converter.fromGeorgian(year, month, day);
    return {
      Year: res[0],
      Month: res[1],
      Day: res[2],
      Hours: date.getHours(),
      Minutes: date.getMinutes(),
      Seconds: date.getSeconds(),
      Milliseconds: date.getMilliseconds(),
    };
  }
}
