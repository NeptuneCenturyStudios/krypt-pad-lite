<template>
    <div class="title-bar d-flex align-center">
        <span>{{ title }}</span>
        
        <button class="title-bar-button title-bar-button-maximize-restore ml-auto" type="button" @click="toggleMaximizeRestore"><v-icon icon="mdi-window-maximize" /></button>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';


defineProps({
    title: { type: String, default: "Krypt Pad Lite" }
});

function toggleMaximizeRestore(){
    window.electronAPI.toggleMaximizeRestore();
}

</script>

<style lang="scss" scoped>
.title-bar {
    height: 2rem;
    -webkit-user-select: none;
    webkit-user-select: none;
    -webkit-app-region: drag;
}

.title-bar .title-bar-button{
    -webkit-app-region: no-drag;
}

.v-theme--dark .title-bar {
    background-color: rgb(var(--v-theme-on-surface-variant));

}
</style>