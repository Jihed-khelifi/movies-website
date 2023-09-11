<template>
   <el-form ref="formRef" :model="formData" :rules="rules" class="form w-1/4 mt-44 cursor-context-menu" label-position="top" hide-required-a>

        <div class="flex space-x-3 mt-8">
            <el-form-item label="Firstname" prop="firstname" class="flex-1">
                <el-input v-model="formData.firstname" name="given-name" autocomplete="on" maxlength="38" clearable show-word-limit />
            </el-form-item>
            <el-form-item label="Lastname" prop="lastname" class="flex-1">
                <el-input v-model="formData.lastname" name="family-name" autocomplete="on" maxlength="38" clearable show-word-limit />
            </el-form-item>
        </div>

        <el-form-item label="Gender" prop="gender"> 
            <el-radio-group v-model="formData.gender" class="flex w-full">
                <el-radio-button label="male" class="">Homme</el-radio-button>
                <el-radio-button label="female" class="">Femme</el-radio-button>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="E-mail" prop="email">
            <el-input v-model="formData.email" name="email" autocomplete="on" maxlength="100" clearable show-word-limit />
        </el-form-item>
        <!-- <el-form-item label="Téléphone portable" prop="phone">
            <el-input v-model="formData.phone" name="tel" autocomplete="on" maxlength="20" clearable show-word-limit />
        </el-form-item> -->
        <el-form-item label="Password" prop="password">
            <el-input v-model="formData.password" name="new-password" autocomplete="on" show-password clearable show-word-limit />
        </el-form-item>
        <el-form-item class="pt-2.5">
            <!-- <el-checkbox v-model="formData.tos">
                J'accepte les <a href="https://www.estale.fr/cgu" target="_blank" class="hover:text-red-900">conditions d'utilisation</a>
            </el-checkbox> -->
            <el-button type="primary" class="w-full" size="large">Register</el-button>
        </el-form-item>
        <el-divider class="mt-9 mb-7"/>
        <div class="flex items-center">
            <span class="mr-2 text-white">Already Signed ?</span>
            <router-link v-slot="{ navigate }" to="/signin" custom>
                <el-link :underline="false" :disabled="loading" @click="navigate">Sign-In</el-link>
            </router-link>
        </div>
    </el-form>
</template>

<script setup lang="ts">
import { Notification } from '@utils/notification';
import { Phone } from '@utils/phone';
import { Form } from '@utils/form';
import { Rules } from 'async-validator';
import { reactive, ref } from 'vue';

const loading = ref(false);
const mailSent = ref(false);
const formRef = ref<Form.Instance>();
const formData = reactive({ tos: false, firstname: '', lastname: '', email: '', phone: '', gender: 'male', password: '' });
const rules: Rules = {
    firstname: [
        { required: true, whitespace: true, message: 'Requis' },
        { max: 38, message: '38 caractères maximum' },
    ],
    lastname: [
        { required: true, whitespace: true, message: 'Requis' },
        { max: 38, message: '38 caractères maximum' },
    ],
    phone: [
        { required: true, whitespace: true, message: 'Requis.' },
        { max: 20, message: '20 caractères maximum' },
        { message: 'Numéro de téléphone invalide', validator: (_: unknown, value: string) => Phone.IsValid(value) },
    ],
    email: [
        { required: true, whitespace: true, message: 'Requis.' },
        { max: 100, message: '100 caractères maximum' },
        { type: 'email', message: 'Veuillez saisir une adresse e-mail valide.' },
    ],
    password: [
        { required: true, whitespace: true, message: 'Requis.' },
        {
            pattern: /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
            message: "Veuillez saisir un mot de passe contenant au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et d'une longueur d'au moins 10 caractères.",
        },
    ],
};

</script>

<style scoped></style>