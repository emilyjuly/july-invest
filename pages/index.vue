<script setup>
</script>

<template>
    <div class="flex flex-column align-items-center gap-5 mt-8 title">
        <Image src="/coins.png" alt="" width="100" class="bottom-right-coin"/>
        <Image src="/coins.png" alt="" width="150" class="top-left-coin"/>
        <span>ACCESS QUOTES</span>
        <span>FOR STOCKS, FUNDS,</span>
        <span>AND BDRs</span>
        <span class="subtitle">Your platform to consult quotes on financial market assets.</span>
        <span class="subtitle">Quickly and intuitively access the information an investor needs!</span>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.title {
    font-size: 90px;
    font-weight: 600;
    background: linear-gradient(0deg, rgb(0, 25, 206) 0%, rgba(110,119,188,1) 50%, rgba(219,219,219,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.subtitle {
    font-size: 16px;
    font-weight: 100;
    color: $white;
    letter-spacing: 0.1rem;
    margin-top: -20px;
}

.bottom-right-coin {
    position: absolute;
    z-index: -1;
    right: 300px;
    bottom: 300px;
    filter: brightness(50%) saturate(100%);
    transform: scaleX(-1);
    animation: moveCoinTranslate 3s infinite alternate;
}

.top-left-coin {
    position: absolute;
    z-index: -1;
    left: 260px;
    top: 160px;
    filter: brightness(70%) saturate(100%);
    animation: moveCoin 3s infinite alternate;
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