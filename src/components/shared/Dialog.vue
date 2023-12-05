<template>
    <teleport to="body">
        <el-dialog v-model="isVisible" :destroy-on-close="true" :width="width" class="rounded-lg" append-to-body>
            <slot />
        </el-dialog>
    </teleport>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits<{ (event: 'update:visible', visible: boolean) }>();

const props = withDefaults(defineProps<{
    visible: boolean,
    width: string
}>(), {
    visible: false,
    width: '600px'
});

const isVisible = computed({
    get: () => props.visible,
    set: (value): void => emit('update:visible', value),
});

</script>