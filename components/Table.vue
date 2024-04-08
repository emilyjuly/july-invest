<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useStore} from "~/stores";
import apiGoogle from "~/services/api-google";
import type {ClickedItem} from "~/interfaces/interfaces";

const store = useStore()
const search = ref('')

const emits = defineEmits(['search']);

const props = defineProps({
    data: Array,
    usePagination: Boolean,
    isUnstyled: Boolean,
    isFromBdrs: Boolean,
    showSearchInput: Boolean,
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

const getClickedItem = async (item: ClickedItem) => {
    const key: string = useRuntimeConfig().public.KEY;
    const cx: string = useRuntimeConfig().public.CX;
    const params = new URLSearchParams({
        key: key,
        cx: cx,
        q: item.name,
    });

    const {data} = await apiGoogle.get(`/v1?${params}`);

    const stockParams = new URLSearchParams({
        key: key,
        cx: cx,
        q: item.stock,
    });

    const response = await apiGoogle.get(`/v1?${stockParams}`);

    store.clickedItem = item;
    store.clickedItem.link = data.items[0].displayLink;
    store.clickedItem.description = data.items[0].snippet;
    store.clickedItem.title = data.items[0].title;

    store.clickedItem.linkStock = response.data.items[1].displayLink;
    store.clickedItem.descriptionStock = response.data.items[1].snippet;
    store.clickedItem.titleStock = response.data.items[1].title;
}

const handleSearch = () => {
    emits('search', search.value.toLowerCase())
}

</script>


<template>
    <div class="table-container">
        <DataView :value="props.data" v-if="props.data" :paginator="usePagination" :rows="5" :unstyled="isUnstyled">
            <template #header>
                <div class="flex justify-content-between align-items-center" :class="{'top': isUnstyled}">
                    <span class="top-title">Top markets</span>
                    <span v-if="showSearchInput">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-search"></i>
                            </InputGroupAddon>
                            <InputText type="text" v-model="search" @input="handleSearch" placeholder="Search by stock name"/>
                        </InputGroup>
                    </span>
                </div>
            </template>
            <template #list="slotProps">
                <div v-for="(item, index) in slotProps.items" :key="index" class="grid-container"
                     @click="getClickedItem(item)" :class="{'cursor-pointer hover:bg-black-alpha-20' : isFromBdrs}">
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
