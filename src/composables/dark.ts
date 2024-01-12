import { useDark, useToggle } from "@vueuse/core";
import {computed } from "vue";

export const isDark = useDark();
export const toggleDark = useToggle(isDark);

export const useBgColor = () => {
    return computed(() => {
        return isDark.value ? "bg-slate-900" : "bg-blue-100";
    });
}
