<template>
    <div class="p-5 rounded-xl relative" :class="bgColor">
        <h1 class="text-center z-50"><el-text class="text-3xl">Join the community</el-text></h1>
        <el-form ref="formRef" :model="formData" :rules="rules" label-position="top" hide-required-area>
            <div class="flex space-x-3 mt-8">
                <el-form-item label="First name" prop="firstName" class="flex-1">
                    <el-input v-model="formData.firstName" name="given-name" autocomplete="on"
                        placeholder="Enter your first name" clearable size="large" show-word-limit />
                </el-form-item>
                <el-form-item label="Last name" prop="lastName" class="flex-1" style="--el-tag-bg-color: red">
                    <el-input v-model="formData.lastName" name="family-name" autocomplete="on" clearable show-word-limit
                        size="large" placeholder="Enter your last name" />
                </el-form-item>
            </div>
            <el-form-item label="Gender" prop="gender" class="grid place-items-center">
                <el-radio-group v-model="formData.gender" class="flex w-full" style="border-radius: 100px;">
                    <el-radio-button label="male" class="rounded-full">Male</el-radio-button>
                    <el-radio-button label="female" class="">Female</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="E-mail" prop="email">
                <el-input v-model="formData.email" name="email" autocomplete="on" clearable show-word-limit size="large"
                    placeholder="i.e user@example.com">
                    <template #suffix>
                        <MaterialSymbolsAlternateEmail />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="formData.password" name="new-password" autocomplete="on" show-password clearable
                    show-word-limit size="large" placeholder="Enter your password">
                    <template #suffix>
                        <CarbonPassword />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="confirmPassword">
                <el-input v-model="formData.confirmPassword" name="confirm-password" autocomplete="on" show-password
                    clearable show-word-limit size="large" placeholder="Confirm your password">
                    <template #suffix>
                        <CarbonPassword />
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="mb-4 w-full flex gap-1 items-center text-red-500" v-if="error">
            <MaterialSymbolsErrorOutline />
            <el-text class="text-red-500"> {{ error }}</el-text>
        </div>
        <div class="auth-methods-divider">
            <el-button type="primary" class="w-full" size="large" @click="handleRegister(formRef)">Register</el-button>
            <el-divider><el-text size="small">OR</el-text></el-divider>
            <div class=" text-center">
                <el-button circle size="large">
                    <LogosGoogleIcon class="text-xl" />
                </el-button>
                <el-button circle size="large">
                    <IcBaselineApple class="text-2xl" />
                </el-button>
            </div>
            <el-divider class="" />
            <div class="flex items-center">
                <el-text class="mr-2">Already a member?</el-text>
                <router-link v-slot="{ navigate }" to="/login" custom>
                    <el-link :underline="false" :disabled="loading" @click="navigate" class="text-amber-400">Sign
                        in</el-link>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Phone } from "../../utils/phone";
import { Form } from "../../utils/form";
import { Rules } from "async-validator";
import { reactive, ref, computed } from "vue";
import { useBgColor } from "../../composables";
import IcBaselineApple from '~icons/ic/baseline-apple';
import MaterialSymbolsAlternateEmail from '~icons/material-symbols/alternate-email'
import CarbonPassword from '~icons/carbon/password'
import LogosGoogleIcon from '~icons/logos/google-icon';
import { useAuthStore } from "@store/authStore";
import { useRouter } from "vue-router";
import { Registration } from "./interfaces/Registration";
import MaterialSymbolsErrorOutline from '~icons/material-symbols/error-outline'
const authStore = useAuthStore();
const router = useRouter();

const bgColor = useBgColor()

const loading = ref(false);
const formRef = ref<Form.Instance>();
const error = ref<string | null>(null);
const formData = reactive<Registration>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: ""
});

const rules: Rules = {
    firstName: [
        { required: true, whitespace: true, message: "Required" },
        { max: 38, message: "Maximum of 38 characters" },
    ],
    lastName: [
        { required: true, whitespace: true, message: "Required" },
        { max: 38, message: "Maximum of 38 characters" },
    ],
    email: [
        { required: true, whitespace: true, message: "Required." },
        { max: 100, message: "Maximum of 100 characters" },
        { type: "email", message: "Please enter a valid email address" },
    ],
    password: [
        { required: true, whitespace: true, message: "Required." },
        {
            pattern: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
            message:
                "Password should contain at least 1 uppercase, 1 lowercase, 1 alphnumeric character",
        },
    ],
    confirmPassword: [
        { required: true, whitespace: true, message: "Required." },
        {
            message: "Password does not match",
            validator: (_: unknown, value: string) => {
                if (value === formData.password) {
                    return true
                }
                return false
            },
        },
    ],
    gender: [
        { message: "Please specify a gender", required: true },
    ]
};

const handleRegister = async (formEL: Form.Instance | undefined) => {
    try {
        try {
            if (!formEL) return;
            await formEL?.validate();
        } catch (error) { return; }

        loading.value = true;
        error.value = null;
        const response = await authStore.register(formData);
        if (response.status === 201) {
            router.push({ name: 'Login page' });
            return;
        } else if (response.status === 400) {
            error.value = response.data.message;
            return;
        }
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }

};

</script>
<style lang="scss">
.dark .auth-methods-divider {
    .el-divider__text {
        background-color: rgb(15 23 42) !important;
    }
}

.auth-methods-divider {
    .el-divider__text {
        background-color: rgb(226 232 240);
    }
}
</style>