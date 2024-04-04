<script lang="ts" setup>
import { useStore } from "~/stores";
import {ref} from 'vue';

const store = useStore();

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});

const items = ref([
    { label: 'BDRs', route: '/bdrs' },
]);

</script>

<template>
    <div class="flex flex-column pt-3 pl-3 pr-3 container">
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
        <div class="flex m-5 gap-3">
            <Table :data="store.quoteListBDRs" :use-pagination="true" :is-unstyled="false" :is-from-bdrs="true" />
            <div class="flex flex-column w-5">
                <QuoteCard />
            </div>
        </div>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-top-left"/>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-middle-right"/>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";

.container {
    min-height: 100vh;
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


@media (max-width: 768px) {
    .luz-azul-top-left,
    .luz-azul-middle-right {
        display: none;
    }
}

</style>