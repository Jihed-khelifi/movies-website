import { useDark, useToggle } from "@vueuse/core";
import {computed } from "vue";

export const isDark = useDark();
export const toggleDark = useToggle(isDark);

export const useBgColor = () => {
    return computed(() => {
        return isDark.value ? "bg-slate-800" : "bg-blue-200";
    });
}
