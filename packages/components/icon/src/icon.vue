<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { createNamspace } from '@x-ui/utils';
import { iconProps } from './icon';
import { computed } from 'vue';

defineOptions({
    name: "x-icon"
});

const bem = createNamspace('icon');

const props = defineProps(iconProps);

const style = computed(() => {
    if (!props.size && !props.color) return {}
    return {
        ...(props.size ? { fontSize: props.size } : {}),
        ...(props.color ? { color: props.color } : {})
    }
})
</script>