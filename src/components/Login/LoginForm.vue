<template>
    <el-form ref="formRef" :model="formData" :rules="rules" class="mt-44 p-5 rounded-md"
        label-position="top" hide-required-area>
        <h1 class="text-slate-50 text-2xl text-center">Create an account</h1>
        <div class="flex space-x-3 mt-8">
            <el-form-item label="Firstname" prop="firstname" class="flex-1">
                <el-input v-model="formData.firstname" name="given-name" autocomplete="on" maxlength="38" clearable
                    size="large" show-word-limit />
            </el-form-item>
            <el-form-item label="Lastname" prop="lastname" class="flex-1" style="--el-tag-bg-color: red">
                <el-input v-model="formData.lastname" name="family-name" autocomplete="on" maxlength="38" clearable
                    show-word-limit size="large" />
            </el-form-item>
        </div>

        <el-form-item label="Gender" prop="gender" class="grid place-items-center">
            <el-radio-group v-model="formData.gender" class="flex w-full">
                <el-radio-button label="male" class="">Male</el-radio-button>
                <el-radio-button label="female" class="">Female</el-radio-button>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="E-mail" prop="email">
            <el-input v-model="formData.email" name="email" autocomplete="on" maxlength="100" clearable show-word-limit size="large" />
        </el-form-item>
        <!-- <el-form-item label="Téléphone portable" prop="phone">
            <el-input v-model="formData.phone" name="tel" autocomplete="on" maxlength="20" clearable show-word-limit />
        </el-form-item> -->
        <el-form-item label="Password" prop="password">
            <el-input v-model="formData.password" name="new-password" autocomplete="on" show-password clearable
                show-word-limit  size="large"/>
        </el-form-item>
        <el-form-item class="pt-2.5">
            <!-- <el-checkbox v-model="formData.tos">
                J'accepte les <a href="https://www.estale.fr/cgu" target="_blank" class="hover:text-red-900">conditions d'utilisation</a>
            </el-checkbox> -->
            <el-button type="primary" class="w-full" size="large">Register</el-button>
        </el-form-item>
        <el-divider class="mt-9 mb-7" />
        <div class="flex items-center">
            <span class="mr-2 text-white">Already a member ?</span>
            <router-link v-slot="{ navigate }" to="/signin" custom>
                <el-link :underline="false" :disabled="loading" @click="navigate" class="text-blue-400">Sign in</el-link>
            </router-link>
        </div>
    </el-form>
</template>
<script setup lang="ts">
import { Phone } from "../../utils/phone";
import { Form } from "../../utils/form";
import { Rules } from "async-validator";
import { reactive, ref } from "vue";

const loading = ref(false);
const mailSent = ref(false);
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
        { required: true, whitespace: true, message: "Required." },
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
</script>
<style lang="">
    
</style>