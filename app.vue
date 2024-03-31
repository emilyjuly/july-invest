<script setup lang="ts">
</script>

<template>
    <NuxtPage/>
    <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-top-left"/>
    <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-middle-right"/>
</template>

<style scoped>
.luz-azul-top-left {
    position: absolute;
    top: -500px;
    left: -600px;
    z-index: -1;
}

.luz-azul-middle-right {
    position: absolute;
    bottom: -300px;
    right: 0;
    z-index: -1;
    opacity: 0.2;
}
</style>
