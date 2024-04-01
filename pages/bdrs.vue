<script lang="ts" setup>
import { useStore } from "~/stores";

const store = useStore();

</script>

<template>
    <div>
        <strong>BDRS</strong>
        <div v-for="brd in store.quoteListBDRs" :key="brd.name">
            {{brd}}
        </div>
    </div>
</template>