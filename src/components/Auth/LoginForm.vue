<template>
    <div class="p-5 rounded-xl relative shadow-md" :class="bgColor">
        <h1 class="text-center z-50"><el-text class="text-4xl">Welcome Back</el-text></h1>
        <el-form ref="formRef" :model="formData" :rules="rules" label-position="top" hide-required-area>
            <el-form-item label="Username" prop="username">
                <el-input v-model="formData.username" name="username" placeholder="i.e MovieWatcher-123" autocomplete="on"
                    clearable show-word-limit size="large">
                    <template #suffix>
                        <MaterialSymbolsAlternateEmail />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="formData.password" name="new-password" placeholder="Enter your password"
                    autocomplete="on" show-password clearable show-word-limit size="large">
                    <template #suffix>
                        <CarbonPassword />
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div class="auth-methods-divider">
            <el-button type="primary" class="w-full" size="large" @click="handleLogin(formRef)">Log in</el-button>
            <el-divider><el-text size="small">OR</el-text></el-divider>
            <div class="text-center">
                <el-button circle size="large">
                    <LogosGoogleIcon class="text-xl" />
                </el-button>
                <el-button circle size="large">
                    <IcBaselineApple class="text-2xl" />
                </el-button>
            </div>
            <el-divider class="mt" />
            <div class="flex items-center gap-1">
                <el-text>Don't have an account? </el-text><router-link v-slot="{ navigate }" to="/register" custom>
                    <el-link :underline="false" :disabled="loading" @click="navigate" class="text-amber-400">Sign
                        up</el-link>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Rules } from "async-validator";
import { reactive, ref } from "vue";
import CarbonPassword from '~icons/carbon/password';
import IcBaselineApple from '~icons/ic/baseline-apple';
import LogosGoogleIcon from '~icons/logos/google-icon';
import MaterialSymbolsAlternateEmail from '~icons/material-symbols/alternate-email';
import { useBgColor } from "../../composables";
import { Form } from "../../utils/form";
import { useAuthStore } from "@store/authStore";
import { useRouter } from "vue-router";
import { FormInstance } from "element-plus";
import { tr } from "element-plus/es/locale";

const authStore = useAuthStore();
const router = useRouter();

const formRef = ref<Form.Instance>();
const loading = ref(false);

const bgColor = useBgColor()

const formData = reactive({
    username: "",
    password: "",
});

const rules: Rules = {
    username: [
        { required: true, message: "Please enter your username" },
    ],
    password: [
        { required: true, message: "Please enter your password" },
        { min: 8, message: "Password must be at least 8 characters long" },
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