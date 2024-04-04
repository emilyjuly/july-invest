<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from "~/stores";

const store = useStore()
const data = ref()

const props = defineProps({
    data: Object,
    usePagination: Boolean,
    isUnstyled: Boolean,
    isFromBdrs: Boolean
})

onMounted(async () => {
    data.value = await props.data
})

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
    <div class="table-container">
        <DataView :value="data" v-if="data" :paginator="usePagination" :rows="5" :unstyled="isUnstyled">
            <template #header>
                <div :class="{'top': isUnstyled}">
                    <span class="top-title">Top markets</span>
                </div>
            </template>
            <template #list="slotProps">
                <div v-for="(item, index) in slotProps.items" :key="index" class="grid-container hover:bg-black-alpha-20" @click="store.clickedItem = item" :class="{'cursor-pointer hover' : isFromBdrs}">
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
            <div>
                <span class="top-title">Top markets</span>
            </div>
            <div class="grid-container" v-for="item in 6" :key="item">
                <Skeleton width="100%" height="100px" class="m-0">{{ item }}</Skeleton>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.table-container {
    width: 70%;
    @media (max-width: 767.98px) {
        width: 100%;
    }
}

.top {
    background-color: $bg-gray;
    border-top: 3px solid $border-gray;
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
    border-top: 3px solid $border-gray;
    justify-content: space-between;
    gap: 100px;
    background-color: $bg-gray;
    @media (max-width: 767.98px) {
        gap: 0;
    }
}

.name-container {
    display: flex;
    justify-content: space-between;
    width: 30%;
    gap: 20px;
    @media (max-width: 767.98px) {
        gap: 0;
        width: 40%;
    }
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    @media (max-width: 767.98px) {
        width: 50%;
    }
}

.image {
    width: 100%;
}

.infos {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 3px;
    padding: 10px;
    @media (max-width: 767.98px) {
        gap: 0;
        margin-left: 10px;
        width: 60%;
    }
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
    @media (max-width: 767.98px) {
        font-size: 15px;
    }
}

.name {
    font-size: 12px;
    color: $text-gray;
    @media (max-width: 767.98px) {
        font-size: 10px;
    }
}

.sector {
    font-weight: 600;
    @media (max-width: 767.98px) {
        font-size: 12px;
    }
}

.change-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 20%;
    @media (max-width: 767.98px) {
        gap: 3px;
        width: 35%;
    }
}

.change {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    @media (max-width: 767.98px) {
        font-size: 12px;
    }
}

.red-text {
    color: $red;
}

.green-text {
    color: $green;
}

.close-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 10%;
    @media (max-width: 767.98px) {
        gap: 3px;
        width: 20%;
        font-size: 12px;
    }
}
</style>
