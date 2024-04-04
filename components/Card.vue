<script setup lang="ts">

const props = defineProps({
    length: Number,
    name: String
});
</script>


<template>
    <div>
        <div v-if="length === 0" class="card" style="padding: 0;">
            <Skeleton width="300px" height="120px" borderRadius="15px"></Skeleton>
        </div>
        <div v-else class="card" @click="$router.push(`/${name}`)">
            <span class="title">{{ length }}</span>
            <span class="subtitle">quotes of</span>
            <span class="description">{{ name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    border: 3px solid $border-gray;
    border-radius: 15px;
    width: 300px;
    height: 120px;
    background-color: $bg-gray;
    transition: 0.2s;
}

.card:hover {
    background-color: $bg-gray-hover;
    transition: 0.2s;
}

.title {
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
}

.subtitle {
    color: $text-gray;
}

.description {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
}
</style>