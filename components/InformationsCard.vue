<script setup lang="ts">
import { useStore } from "~/stores";

const store = useStore()
</script>

<template>
    <div class="card" v-if="store.clickedItem.name">
        <div class="box">
            <strong class="more-info">More informations</strong>
            <Divider />
            <strong>{{store.clickedItem.title}}</strong>
            <span class="mt-5 mb-3">{{store.clickedItem.description}}</span>
            <a :href="`https://${store.clickedItem.link}`" target="_blank">
                Learn more
            </a>
            <Divider />
            <strong>{{store.clickedItem.titleStock}}</strong>
            <span class="mt-5 mb-3">{{store.clickedItem.descriptionStock}}</span>
            <a :href="`https://${store.clickedItem.linkStock}`" target="_blank">
                Learn more
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";

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
</style>