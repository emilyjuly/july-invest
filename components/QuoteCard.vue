<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore();

const isDown = (value: any) => {
    return value < 0;
}
</script>

<template>
    <div class="quote-card">
        <div v-if="store.clickedItem.name">
            <div class="flex flex-column gap-3">
                <strong>{{ store.clickedItem.stock }}</strong>
                <span>{{ store.clickedItem.name }}</span>
                <span>{{ store.clickedItem.sector }}</span>
            </div>
            <Image :src="store.clickedItem.logo" alt="Logo" width="200px" />
            <div class="flex flex-column gap3">
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
                <span>{{ store.clickedItem.volume }}</span>
                <span class="font-medium text-secondary text-sm">{{ store.clickedItem && `R$ ${store.clickedItem.close}` }}</span>
                <span>{{ store.clickedItem.market_cap }}</span>
            </div>
        </div>
        <div v-else>
            <span>Selecione um ativo para visualizar detalhes dele.</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main';

.quote-card {
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: $bg-gray;
    width: 100%;
}


.red-text {
    color: $red;
}

.green-text {
    color: $green;
}
</style>