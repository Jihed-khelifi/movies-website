import { Ref, unref, nextTick, reactive, UnwrapRef } from 'vue';

import type { FormInstance, FormItemInstance, InputInstance as FormInputInstance } from 'element-plus';
import type { ValidateFieldsError } from 'async-validator';

import { Time } from './time';
import { Phone } from './phone';

export namespace Form {
    export type Instance = FormInstance;
    export type ItemInstance = FormItemInstance;
    export type InputInstance = FormInputInstance;

    export interface Visibility {
        Open(): void;
        Close(): void;
    }
}

export class Form {
    public static async Validate(...forms: (Ref<FormInstance|undefined>|FormInstance|undefined)[]) {
        try {
            const promises = forms.reduce((accu, form) => accu.concat(unref(form)?.validate()), [] as any[]);
            await Promise.all(promises);
        } catch (e) {
            const error = e as ValidateFieldsError;
            const keys = Object.keys(error).reduce((accu, key) => accu.concat(key), [] as string[]);
            if (keys.length > 0) {
                const key = keys[0];
                forms.forEach((form) => { unref(form)?.scrollToField(key); });
            }
            throw error;
        }
    }

    public static async ClearValidate(...forms: (Ref<FormInstance|undefined>|FormInstance|undefined)[]) {
        await nextTick();
        await nextTick();

        forms.forEach((form) => { unref(form)?.clearValidate(); });
    }

    public static ResetFields(...forms: (Ref<FormInstance|undefined>|FormInstance|undefined)[]) {
        forms.forEach((form) => { unref(form)?.resetFields(); });
    }

    public static ErrorIndex(e) {
        try {
            const error = e as ValidateFieldsError;
            const keys = Object.keys(error).reduce((accu, key) => accu.concat(key), [] as string[]);
            const key = keys[0];
            const k = key.split('.');
            const strIdx = k[0];
            return parseInt(strIdx, 10);
        } catch {
            return -1;
        }
    }

    /*= =========================================================================== */
    /*= ====*                           Visibility                           *===== */
    /*= =========================================================================== */

    public static Visibility = <Type>() => {
        const container = reactive({
            Visible: false,
            Data: undefined as Type|undefined,
            Open: (data?: UnwrapRef<Type>|undefined) => {
                container.Visible = true;
                container.Data = data;
            },
            Close: () => {
                container.Visible = false;
                container.Data = undefined;
            },
        });
        return container;
    };

    /*= =========================================================================== */
    /*= ====*                          Conform Input                         *===== */
    /*= =========================================================================== */

    public static Conform = {
        String: (str: string|undefined|null, defaultValue: string|undefined|null = undefined) => {
            if (!str) return defaultValue;
            str = str.trim();
            if (str.length) return str;
            return defaultValue;
        },
        Date: (str: string|undefined|null, defaultValue: string|undefined|null = undefined) => {
            if (!str) return defaultValue;
            if (!Time.IsValid(str)) return defaultValue;
            return Time.Parse(str).format('YYYY-MM-DD');
        },
        DateTime: (str: string|undefined|null, defaultValue: string|undefined|null = undefined) => {
            if (!str) return defaultValue;
            if (!Time.IsValid(str)) return defaultValue;
            return Time.Parse(str).format('YYYY-MM-DDTHH:mm:ssZ');
        },
        E164: (str: string|undefined|null, defaultValue: string|undefined|null = undefined) => {
            if (!str) return defaultValue;
            str = str.trim();
            if (str.length) return Phone.FormatE164(str);
            return defaultValue;
        },
    };

    /*= =========================================================================== */
    /*= ====*                              Rules                             *===== */
    /*= =========================================================================== */

    public static Rule = {
        Required: (message = 'Requis') => ({ required: true, whitespace: true, message }),
        Max: (max: number, message = `${max} caractères maximum`) => ({ max, message }),
        Min: (min: number, message = `${min} caractères minimum`) => ({ min, message }),
        Len: (len: number, message = `${len} caractères requis`) => ({ len, message }),

        Number: {
            Required: (message = 'Requis') => ({ type: 'number', required: true, message }),
            Max: (max: number, message = `${max} maximum`) => ({ type: 'number', max, message }),
            Min: (min: number, message = `${min} minimum`) => ({ type: 'number', min, message }),
        },
    };
}
