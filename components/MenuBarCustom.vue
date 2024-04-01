<script lang="ts" setup>
import {ref} from "vue";

const items = ref([
    {
        label: 'BDRs',
        route: '/bdrs'
    },
    {
        label: 'Funds',
        route: '/funds'
    },
    {
        label: 'Stocks',
        route: '/stocks'
    }]);
</script>

<template>
    <div class="flex gap-8 mr-5">
        <div v-for="item in items" :key="item.label">
            <router-link :to="item.route" class="menu-items">
                {{ item.label }}
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.menu-items {
    font-weight: 300;
    font-size: 15px;
    text-decoration: none;
    color: $white;
}
</style>