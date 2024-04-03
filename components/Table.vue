<script setup lang="ts">
import {useStore} from "~/stores";

const store = useStore();
store.getDataTable();

const getSeverity = (type: string) => {
    switch (type) {
        case 'fund':
            return 'info';
            break;
        case 'stock':
            return 'warning';
            break;
        case 'bdr':
            return 'success';
            break;
        default:
            return 'primary';
    }
}

const isDown = (value: number) => {
    return value < 0
}

</script>


<template>
    <div style="width: 70%">
        <DataView :value="store.dataTable" v-if="store.dataTable[0]" unstyled>
            <template #header>
                <span class="top-title">Top markets</span>
            </template>
            <template #list="slotProps">
                <div v-for="(item, index) in slotProps.items" :key="index" class="grid-container">
                    <div class="name-container">
                        <div class="image-container">
                            <img class="image" v-if="item" :src="item.logo" :alt="item.name"/>
                        </div>
                        <div class="infos">
                            <div class="name-infos">
                                <span class="stock">{{ item && item.stock }}</span>
                                <span class="name">{{ item && item.name }}</span>
                                <span class="sector">{{ item && item.sector }}</span>
                            </div>
                            <Tag :severity="getSeverity(item.type)" :value="item.type" v-if="item"
                                 style="width: 50px; margin-top: 10px;"/>
                        </div>
                    </div>
                    <div class="change-container">
                        <Image src="/down.png" alt="Imagem de gráfico caindo" width="20"
                               v-if="isDown(item && item.change)"/>
                        <Image src="/high.png" alt="Imagem de gráfico subindo" width="20"
                               v-if="!isDown(item && item.change)"/>
                        <span class="change" v-if="item"
                              :class="{ 'red-text': isDown(item && item.change), 'green-text': !isDown(item && item.change) }">{{
                                item && `${item.change}%`
                            }}</span>
                    </div>
                    <div class="close-container">
                        <strong>Close</strong>
                        <span class="font-medium text-secondary text-sm">{{ item && `R$ ${item.close}` }}</span>
                    </div>
                </div>
            </template>
        </DataView>
        <div v-else>
            <div class="top">
                <span class="top-title">Top markets</span>
            </div>
            <div class="grid-container" v-for="item in 6" :key="item">
                <Skeleton width="100%" height="100px" class="m-0">{{ item }}</Skeleton>
            </div>
        </div>
    </div>
</template>

<style scoped>

.top {
    background-color: rgba(42, 42, 57, 0.51);
    border-top: 3px solid #3c3c56;
    padding: 15px;
    border-radius: 10px 10px 0 0;
}

.top-title {
    font-size: 20px;
    font-weight: 600;
}

.grid-container {
    display: flex;
    align-items: center;
    border-top: 3px solid #3c3c56;
    justify-content: space-between;
    gap: 100px;
    background-color: rgba(42, 42, 57, 0.51);
}

.name-container {
    display: flex;
    justify-content: space-between;
    width: 30%;
    gap: 20px;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
}

.image {
    width: 90%;
}

.infos {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 3px;
    padding: 10px;
}

.name-infos {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.stock {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
}

.name {
    font-size: 12px;
    color: #989898;
}

.sector {
    font-weight: 600;
}

.change-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 20%;
}

.change {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
}

.red-text {
    color: #dc4040;
}

.green-text {
    color: green;
}

.close-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 10%;
}
</style>
