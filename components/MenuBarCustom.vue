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
    <div class="menu-container">
        <div v-for="item in items" :key="item.label">
            <router-link :to="item.route" class="menu-items">
                {{ item.label }}
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.menu-container {
    display: flex;
    gap: 60px;
    margin-right: 50px;
    @media (max-width: 767.98px) {
        margin-right: 0;
        gap: 20px;
    }
}

.menu-items {
    font-weight: 300;
    font-size: 15px;
    text-decoration: none;
    color: $white;
}
</style>