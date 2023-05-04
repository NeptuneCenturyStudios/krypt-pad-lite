<template>
    <div class="title-bar d-flex align-center">
        <span>{{ title }}</span>

        <div class="ml-auto">
            <button class="title-bar-button title-bar-button-minimize" type="button" @click="minimize"><v-icon
                    icon="mdi-window-minimize" /></button>
            <button class="title-bar-button title-bar-button-maximize-restore" type="button" @click="toggleMaximizeRestore">
                <v-icon :icon="isMaximized ? 'mdi-window-restore' : 'mdi-window-maximize'" />
            </button>
            <button class="title-bar-button title-bar-button-close" type="button" @click="close"><v-icon
                    icon="mdi-window-close" /></button>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';

// Define our reactive properties
const isMaximized = ref(false);

defineProps({
    title: { type: String, default: "Krypt Pad Lite" }
});

// Window button handlers
function minimize() {
    window.electronAPI.minimize();
}

function toggleMaximizeRestore() {
    window.electronAPI.toggleMaximizeRestore();
}

function close() {
    window.electronAPI.close();
}

// Register any callback we need.
// Register unmaximized callback
window.electronAPI.onUnmaximized(() => {
    isMaximized.value = false;
})

// Register maximized callback
window.electronAPI.onMaximized(() => {
    isMaximized.value = true;
})

</script>

<style lang="scss" scoped>
$button-hover: #555;
$button-hover-close: #b81818;
$transition: background-color 200ms ease-in-out;

.title-bar {
    height: 2rem;
    -webkit-user-select: none;
    webkit-user-select: none;
    -webkit-app-region: drag;
}

/* Title bar buttons */
.title-bar .title-bar-button {
    -webkit-app-region: no-drag;
    width: 3rem;
    cursor: default;
    transition: $transition;
}

.title-bar .title-bar-button:hover {
    -webkit-app-region: no-drag;
    width: 3rem;
    background-color: $button-hover;
}

.title-bar .title-bar-button.title-bar-button-close:hover {
    background-color: $button-hover-close;
}


.title-bar .title-bar-button i {
    font-size: .9rem;
    height: 2rem;
}

.v-theme--dark .title-bar {
    background-color: rgb(var(--v-theme-on-surface-variant));

}
</style>