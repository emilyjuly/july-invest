<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore();
store.getDataTable()

</script>


<template>
    <div>
        <DataView :value="store.dataTable">
            <template #list="slotProps">
                <div class="container">
                    <div v-for="(item, index) in slotProps.items" :key="index">
                        <div class="grid-container">
                            <div class="image-container">
                                <img class="image" v-if="item" :src="item.logo" :alt="item.name" />
                            </div>
                            <div class="name-container">
                                <span class="font-medium text-secondary text-sm">{{ item && item.type }}</span>
                                <span class="font-medium text-secondary text-sm">{{
                                        item ? item.sector : 'Not available'
                                    }}</span>
                                <span class="text-lg font-medium text-900 mt-2">{{ item && item.name }}</span>
                            </div>
                            <div
                                class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                <div
                                    class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                    <span class="font-medium text-secondary text-sm">{{ item && item.change }}</span>
                                    <span class="font-medium text-secondary text-sm">{{ item ? item.close : 'Not available' }}</span>
                                </div>
                            </div>
                            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                <div
                                    class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                    <span class="font-medium text-secondary text-sm">{{ item && item.market_cap }}</span>
                                    <span class="font-medium text-secondary text-sm">{{ item ? item.stock : 'Not available' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<style scoped>

.container {
    display: grid;
    column-gap: 50px;
    width: 100%;
}

.grid-container {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 50px;
    border-bottom: 1px solid #3c3c56;
    background-color: rgba(42, 42, 57, 0.51);
    width: 100%;
}

.image-container {
    width: 4rem;
    position: relative;
}

.image {
    display: flex;
    width: 100%;
}

.name-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
</style>
