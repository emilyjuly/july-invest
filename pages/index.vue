<script setup>
import { useStore } from "~/stores/index.ts";
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";

onMounted(async () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
})

const chartData = ref();
const chartOptions = ref();

const store = useStore();
store.getDataTable()

const setChartData = () => {
    const changeData = store.dataTable.map(item => item.change);
    return {
        labels: changeData,
        datasets: [
            {
                label: 'Change',
                data: changeData,
                backgroundColor: ['rgba(0,182,209,0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(0,18,184)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>

<template>
    <div>
        <div class="title">
            <Image src="/coins.png" alt="" width="100" class="bottom-right-coin"/>
            <Image src="/coins.png" alt="" width="150" class="top-left-coin"/>
            <Image src="/coins.png" alt="" width="150" class="middle-right-coin"/>
            <span>ACCESS QUOTES</span>
            <span>FOR STOCKS, FUNDS,</span>
            <span>AND BDRs</span>
            <span class="subtitle">Your platform to consult quotes on financial market assets.</span>
            <span class="subtitle">Quickly and intuitively access the information an investor needs!</span>
        </div>
        <div class="mt-8 flex flex-column justify-content-center gap-8">
            <div class="cards-container">
                <Card :length="store.quoteListBDRs.length" name="bdrs" />
                <Card :length="store.quoteListFund.length" name="funds" />
                <Card :length="store.quoteListStock.length" name="stocks" />
            </div>
            <div class="flex justify-content-center">
                <Table :data="store.dataTable" :use-pagination="false" :is-unstyled="true" :is-from-bdrs="false" />
            </div>
            <div class="chart-container">
                <div class="flex flex-column gap-3">
                    <span class="find-the-price">Find the price</span>
                    <span class="of-the-asset">of the asset</span>
                    <span class="looking-for">you're looking for. Access for type!</span>
                    <Button label="BDRs" outlined @click="$router.push(`/bdrs`)" />
                    <Button label="Funds" outlined @click="$router.push(`/funds`)" />
                    <Button label="Stocks" outlined @click="$router.push(`/stocks`)" />
                </div>
                <Chart type="line" :data="chartData" :options="chartOptions" class="chart" />
            </div>
        </div>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-top-left"/>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-middle-right"/>
        <Image src="luz-azul.png" alt="Image" width="1000" class="luz-azul-bottom-left"/>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 6rem;
    font-size: 90px;
    font-weight: 600;
    background: $gradient-blue;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    @media (max-width: 767.98px) {
        font-size: 50px;
        align-items: flex-start;
        gap: 1rem;
    }
}

.subtitle {
    font-size: 16px;
    font-weight: 100;
    color: $white;
    letter-spacing: 0.1rem;
    margin-top: -20px;
    @media (max-width: 767.98px) {
        margin-top: 0;
    }
}

.bottom-right-coin {
    position: absolute;
    z-index: -1;
    right: 300px;
    bottom: 300px;
    filter: brightness(15%) saturate(100%) contrast(100%) ;
    transform: scaleX(-1);
    animation: moveCoinTranslate 3s infinite alternate;
}

.top-left-coin {
    position: absolute;
    z-index: -1;
    left: 260px;
    top: 160px;
    filter: brightness(20%) saturate(100%) contrast(100%) ;
    animation: moveCoin 3s infinite alternate;
    @media (max-width: 767.98px) {
        left: 160px;
    }
}

.middle-right-coin {
    position: absolute;
    z-index: -1;
    right: 200px;
    bottom: -600px;
    filter: brightness(15%) saturate(100%) contrast(100%) ;
    transform: scaleX(-1);
    animation: moveCoinTranslate 3s infinite alternate;
}

.find-the-price {
    font-weight: bold;
    font-size: 80px;
    background: $gradient-blue;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.of-the-asset {
    font-weight: bold;
    font-size: 40px;
}

.looking-for, .access {
    font-size: 20px;
    color: $text-gray;
    letter-spacing: 2px;
}

.cards-container {
    display: flex;
    justify-content: center;
    gap: 8rem;
    @media (max-width: 767.98px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}

.chart-container {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    @media (max-width: 767.98px) {
        flex-direction: column;
        padding: 0;
        gap: 40px;
    }
}

.chart {
    width: 60%;
    @media (max-width: 767.98px) {
        width: 90%;
        height: 100%;
    }
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

.luz-azul-bottom-left {
    position: absolute;
    left: -500px;
    bottom: -1400px;
    z-index: -1;
    opacity: 0.2;
}

@media (max-width: 768px) {
    .luz-azul-top-left,
    .luz-azul-middle-right,
    .luz-azul-bottom-left {
        display: none;
    }
}

@keyframes moveCoin {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(5px, 5px);
    }
    100% {
        transform: translate(0, 0);
    }
}

@keyframes moveCoinTranslate {
    0% {
        transform: translate(0, 0) scaleX(-1);
    }
    50% {
        transform: translate(5px, 5px) scaleX(-1);
    }
    100% {
        transform: translate(0, 0) scaleX(-1);
    }
}
</style>