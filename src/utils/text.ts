import { deburr, trim, lowerCase } from 'lodash-es';

export class Text {
    public static Flatten(str: string|number|null|undefined) {
        return deburr(lowerCase(trim(`${str || ''}`)));
    }

    public static Include(str: string|number|null|undefined, subStr: string|number|null|undefined) {
        return this.Flatten(str).includes(this.Flatten(subStr));
    }

    public static Equal(str: string|number|null|undefined, subStr: string|number|null|undefined) {
        return this.Flatten(str) === subStr;
    }
}
