<script lang="ts" setup>
import { useStore } from "~/stores";
import {onMounted, ref} from 'vue';

const store = useStore();
let filteredData = ref([]);

onMounted(async () => {
    if (store.quoteListBDRs.length === 0) {
        await store.getQuoteList()
    }

    filteredData.value = [...store.quoteListBDRs]
    store.clearClickedItem()
})

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});

const items = ref([
    { label: 'BDRs', route: '/bdrs' },
]);

const handleSearch = (value) => {
    filteredData.value = store.quoteListBDRs.filter(item => item.stock.toLowerCase().includes(value))
}

</script>

<template>
    <div class="container">
        <div class="flex flex-column">
            <Divider />
            <Breadcrumb :home="home" :model="items" style="background-color: transparent">
                <template #item="{ item, props }">
                    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <a :href="href" v-bind="props.action" @click="navigate">
                            <span :class="[item.icon, 'text-color']" />
                            <span class="font-semibold text-blue" >{{ item.label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span>{{ item.label }}</span>
                    </a>
                </template>
            </Breadcrumb>
        </div>
        <div class="container-page">
            <div class="container-table">
                <Table @search="handleSearch" :data="filteredData" :show-search-input="true" :use-pagination="true" :is-unstyled="false" :is-from-bdrs="true" class="w-full" />
            </div>
            <div class="container-cards" v-if="store.clickedItem.name">
                <QuoteCard class="w-full" />
                <div class="card" v-if="store.clickedItem.name">
                    <div class="box">
                        <strong class="more-info">More informations</strong>
                        <Divider />
                        <strong>{{store.clickedItem.title}}</strong>
                        <span class="mt-5 mb-3">{{store.clickedItem.description}}</span>
                        <a :href="store.clickedItem.link" target="_blank">
                            Learn more
                        </a>
                        <Divider />
                        <strong>{{store.clickedItem.titleStock}}</strong>
                        <span class="mt-5 mb-3">{{store.clickedItem.descriptionStock}}</span>
                        <a :href="store.clickedItem.linkStock" target="_blank">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-cards" v-else>
                <strong style="font-size: 20px;">Select an asset from the list below to see more information about it</strong>
            </div>
        </div>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-top-left"/>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-middle-right"/>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";

.container-page {
    display: flex;
    justify-content: center;
    @media (max-width: 767.98px) {
        flex-direction: column;
    }
}

.container-table {
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 10px;
    @media (max-width: 767.98px) {
        width: 100%;
        padding: 0;
    }
}

.container-cards {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media (max-width: 767.98px) {
        width: 100%;
        padding: 0;
    }
}

.more-info {
    font-size: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 100vh;
    margin-bottom: 100px;
    @media (max-width: 767.98px) {
        padding: 0;
    }
}

.text-blue {
    color: $white;
}

.luz-azul-top-left {
    position: absolute;
    top: -500px;
    left: -600px;
    z-index: -1;
}

.luz-azul-middle-right {
    position: absolute;
    bottom: -300px;
    right: 0;
    z-index: -1;
    opacity: 0.2;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 100%;
    position: relative;
}

.card::before {
    content: "";
    background-color: rgba(0, 37, 199, 0.3);
    position: absolute;
}

.card::before {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
}

.card .box {
    padding: 1rem;
    background-color: $bg-gray;
    border: 1px solid $border-gray;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
}

.card .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box:hover {
    box-shadow: 0 0 20px 1px $blue;
    border: 1px solid $blue;
}

@media (max-width: 768px) {
    .luz-azul-top-left,
    .luz-azul-middle-right {
        display: none;
    }
}

</style>