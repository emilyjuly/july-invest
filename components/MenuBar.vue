<script lang="ts" setup>
import {ref} from "vue";

const items = ref([
    {
        label: 'Quotes',
        route: '/quotes'
    },
    {
        label: 'Cryptocurrencies',
        route: '/crypto'
    },
    {
        label: 'Inflation',
        route: '/inflation'
    },
    {
        label: 'SELIC',
        route: '/selic'
    }]);
</script>

<template>
    <div class="flex gap-5 mr-5">
        <div v-for="item in items" :key="item.label">
            <router-link :to="item.route" class="menu-items">
                {{ item.label }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.menu-items {
    font-weight: 300;
    font-size: 13px;
    text-decoration: none;
    color: #c9c9c9;
}
</style>