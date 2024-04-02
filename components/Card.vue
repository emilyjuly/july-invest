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
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    border: 3px solid #3c3c56;
    border-radius: 15px;
    width: 300px;
    height: 120px;
    background-color: rgba(42, 42, 57, 0.51);
    transition: 0.2s;
}

.card:hover {
    background-color: rgba(64, 64, 86, 0.51);
    transition: 0.2s;
}

.title {
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
}

.subtitle {
    color: #838383;
}

.description {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
}
</style>