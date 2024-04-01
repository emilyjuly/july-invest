<script lang="ts" setup>
import { useStore } from "~/stores";

const store = useStore();

</script>

<template>
    <div>
        <strong>STOCKS</strong>
        <div v-for="stock in store.quoteListStock" :key="stock.name">
            {{stock}}
        </div>
    </div>
</template>