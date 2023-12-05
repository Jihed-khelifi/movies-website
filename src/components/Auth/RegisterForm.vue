<template>
    <div class="p-5 rounded-xl relative" :class="bgColor">
        <h1 class="text-center z-50"><el-text class="text-3xl">Join the community</el-text></h1>
        <el-form ref="formRef" :model="formData" :rules="rules" label-position="top" hide-required-area>
            <div class="flex space-x-3 mt-8">
                <el-form-item label="First name" prop="firstname" class="flex-1">
                    <el-input v-model="formData.firstname" name="given-name" autocomplete="on"
                        placeholder="Enter your first name" clearable size="large" show-word-limit />
                </el-form-item>
                <el-form-item label="Last name" prop="lastname" class="flex-1" style="--el-tag-bg-color: red">
                    <el-input v-model="formData.lastname" name="family-name" autocomplete="on" clearable show-word-limit
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
        </el-form>
        <div class="auth-methods-divider">
            <el-button type="primary" class="w-full" size="large" @click="handleLogin(formRef)">Register</el-button>
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

const authStore = useAuthStore();
const router = useRouter();

const bgColor = useBgColor()

const loading = ref(false);
const formRef = ref<Form.Instance>();
const formData = reactive({
    tos: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
});

const rules: Rules = {
    firstname: [
        { required: true, whitespace: true, message: "Required" },
        { max: 38, message: "Maximum of 38 characters" },
    ],
    lastname: [
        { required: true, whitespace: true, message: "Required" },
        { max: 38, message: "Maximum of 38 characters" },
    ],
    phone: [
        { required: true, whitespace: true, message: "Required" },
        { max: 20, message: "Maximum of 20 characters" },
        {
            message: "Phone number is required",
            validator: (_: unknown, value: string) => Phone.IsValid(value),
        },
    ],
    email: [
        { required: true, whitespace: true, message: "Required." },
        { max: 100, message: "Maximum of 100 characters" },
        { type: "email", message: "Please enter a valid email address" },
    ],
    password: [
        { required: true, whitespace: true, message: "Required." },
        {
            pattern: /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
            message:
                "Password should contain at least 1 uppercase, 1 lowercase, 1 alphnumeric character",
        },
    ],
};

const handleLogin = async (formEL: Form.Instance | undefined) => {
    loading.value = true;
    try {
        if (!formEL) return;

        // await formEL.validate();
        await authStore.setIsLoggedIn(true);
        router.push({
            name: "Profile",
            params: { vanity: "bidin13568" }
        });
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