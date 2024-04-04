<script lang="ts" setup>
</script>

<template>
    <div class="header-container">
        <span class="page-title cursor-pointer" @click="$router.push(`/`)">July Invest</span>
        <MenuBarCustom />
    </div>
</template>

<style scoped lang="scss">
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

.page-title {
    margin-left: 30px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    @media (max-width: 767.98px) {
        margin-left: 0;
    }
}
</style>

