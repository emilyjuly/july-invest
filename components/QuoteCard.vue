<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore();

const isDown = (value: any) => {
    return value < 0;
}
</script>

<template>
    <div class="quote-card" v-if="store.clickedItem.name">
        <div class="box">
            <div>
                <div class="flex gap-5">
                    <div class="logo-container">
                        <Image class="logo" :src="store.clickedItem.logo" alt="Logo" width="200px" />
                    </div>
                    <div class="flex flex-column gap-3">
                        <div class="flex flex-column gap-1">
                            <strong class="stock">{{ store.clickedItem.stock }}</strong>
                            <span class="name">{{ store.clickedItem.name }}</span>
                            <span class="sector">{{ store.clickedItem.sector }}</span>
                        </div>
                        <div class="flex align-items-center gap-2">
                            <Image src="/down.png" alt="Imagem de gráfico caindo" width="20"
                                   v-if="isDown(store.clickedItem && store.clickedItem.change)"/>
                            <Image src="/high.png" alt="Imagem de gráfico subindo" width="20"
                                   v-if="!isDown(store.clickedItem && store.clickedItem.change)"/>
                            <span class="change" v-if="store.clickedItem"
                                  :class="{ 'red-text': isDown(store.clickedItem && store.clickedItem.change), 'green-text': !isDown(store.clickedItem && store.clickedItem.change) }">{{
                                    store.clickedItem && `${store.clickedItem.change}%`
                                }}</span>
                        </div>
                        <div class="flex flex-column gap-1">
                            <strong>
                                Volume: {{ store.clickedItem.volume }}
                            </strong>
                            <strong>Close: {{ store.clickedItem && `R$ ${store.clickedItem.close}` }}</strong>
                            <strong>Market Cap: {{ store.clickedItem.market_cap }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main';

.stock {
    font-size: 25px;
}

.name {
    font-size: 12px;
}

.sector {
    background-color: $text-gray;
    padding: 5px;
    border-radius: 3px;
    color: white;
    font-weight: bold;
}

.quote-card {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 100%;
    position: relative;
}

.quote-card::before,
.quote-card::after {
    content: "";
    background-color: rgba(0, 37, 199, 0.3);
    position: absolute;
}

.quote-card::before {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
}

.quote-card::after {
    content: "";
    position: absolute;
    height: 3rem;
    top: 20%;
    right: 10%;
    border: 1px solid;
}

.quote-card .box {
    padding: 1rem;
    width: 100%;
    background-color: $bg-gray;
    border: 1px solid $border-gray;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
}

.quote-card .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box:hover {
    box-shadow: 0 0 20px 1px $blue;
    border: 1px solid $blue;
}

.red-text {
    color: $red;
}

.green-text {
    color: $green;
    font-weight: bold;
    letter-spacing: 1px;
}

.logo-container {
    display: flex;
    justify-content: center;
}

.selecione {
    font-weight: bold;
}
</style>