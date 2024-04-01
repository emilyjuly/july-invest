<script lang="ts" setup>
import { useStore } from "~/stores";

const store = useStore();

</script>

<template>
    <div>
        <strong>FUNDS</strong>
        <div v-for="fund in store.quoteListFund" :key="fund.name">
            {{fund}}
        </div>
    </div>
</template>