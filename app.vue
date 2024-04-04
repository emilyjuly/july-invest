<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore();

store.getQuoteList()
</script>

<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
