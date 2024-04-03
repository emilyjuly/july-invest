<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore();

store.getQuoteList()
</script>

<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
    <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-top-left"/>
    <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-middle-right"/>
    <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-bottom-left"/>
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

.luz-azul-bottom-left {
    position: absolute;
    left: -500px;
    bottom: -1400px;
    z-index: -1;
    opacity: 0.2;
}
</style>
