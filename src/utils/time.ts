import djs from 'dayjs';

/* Plugins */
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';

/* Locales */
import 'dayjs/locale/fr';

djs.extend(relativeTime);
djs.extend(advancedFormat);
djs.extend(isSameOrBefore);
djs.extend(duration);
djs.extend(isToday);
djs.locale('fr');

export class Time {
    public static Duration = djs.duration;

    // Parse date object/string to dayjs object
    public static Parse(date?) {
        return djs(date);
    }

    // Create new dayjs object
    public static New() {
        return djs();
    }

    // Parse date range to dayjs object array
    public static ParseRange(period: string[]|undefined) {
        if (!period) {
            return [null, null];
        } if (period.length !== 2) {
            return [null, null];
        }

        const startSTR = period[0];
        const endSTR = period[1];
        const start = this.Parse(startSTR).isValid() ? this.Parse(startSTR) : null;
        const end = this.Parse(endSTR).isValid() ? this.Parse(endSTR) : null;
        return [start, end];
    }

    // Check if date is valid
    public static IsValid(date?) {
        if (!date) {
            return false;
        }
        return this.Parse(date).isValid();
    }

    // Check if date is between two dates
    public static IsInPeriod(date: Date|string, period: (string|Date)[]) {
        if (period.length !== 2) {
            return false;
        }

        const value = this.Parse(date).unix();
        const start = this.Parse(period[0]).unix();
        const end = this.Parse(period[1]).unix();

        return value >= start && value <= end;
    }

    // Check if date is not between two dates
    public static IsNotInPeriod(date: Date|string, period: (string|Date)[]) {
        return !this.IsInPeriod(date, period);
    }

    public static Format(date, format: string) {
        return this.Parse(date).format(format);
    }

    // Format date to 'DD/MM/YYYY'
    public static FormatDate(date?) {
        return this.Parse(date).format('DD/MM/YYYY');
    }

    // Format date to 'D, MMM YYYY h:mm A'
    public static FormatLong(date?) {
        return this.Parse(date).format('D MMM YYYY [à] HH:mm');
    }

    // Format date to ISO 8601 'YYYY-MM-DDTHH:mm:ssZ'
    public static FormatISO8601(date?, infinity = false) {
        if (!this.IsValid(date)) {
            return infinity ? 'infinity' : undefined;
        }
        return this.Parse(date).format('YYYY-MM-DDTHH:mm:ssZ');
    }

    // Format date only to ISO 8601 'YYYY-MM-DD'
    public static FormatISO8601Date(date, infinity = false) {
        if (!this.IsValid(date)) {
            return infinity ? 'infinity' : undefined;
        }
        return this.Parse(date).format('YYYY-MM-DD');
    }
}
