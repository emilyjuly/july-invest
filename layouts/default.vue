<script setup></script>

<template>
    <div class="layout">
        <Header/>
        <div class="content">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}
</style>