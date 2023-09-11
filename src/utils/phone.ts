import {
    parsePhoneNumber as parsePN,
    isValidPhoneNumber as isVPN,
} from 'libphonenumber-js';

export class Phone {
    public static Format(phone: string) {
        try {
            return parsePN(phone, 'FR')?.formatInternational().replaceAll(' ', '.');
        } catch {
            try {
                return parsePN(phone)?.formatInternational().replaceAll(' ', '.');
            } catch {
                return phone;
            }
        }
    }

    public static FormatE164(phone: string) {
        return this.Format(phone).replaceAll('.', '');
    }

    public static IsValid(phone?: string, required = true) {
        if (!required && (!phone || phone.trim().length === 0)) {
            return true;
        }
        return isVPN(phone || '') || isVPN(phone || '', 'FR');
    }
}
