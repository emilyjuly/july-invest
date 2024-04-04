<script setup lang="ts">
</script>

<template>
    <div class="footer-container">
        <div class="footer">
            <div class="flex flex-column gap-3">
                <span class="logo">July Invest</span>
                <span class="text">A platform to find everything about market quotes.</span>
            </div>
            <div class="flex flex-column gap-3">
                <span class="title">Contact</span>
                <a href="https://new-portfolio-emilyjuly.vercel.app/" target="_blank">
                    <span class="text">Portfolio</span>
                </a>
                <a href="mailto:emilyjulygd@gmail.com?subject=Contato sobre landing page de informações financeiras" target="_blank">
                    <span class="text">Email</span>
                </a>
            </div>
            <div class="flex flex-column gap-3">
                <span class="title">Help</span>
                <a href="mailto:emilyjulygd@gmail.com?subject=Contato sobre sugestão ou suporte na landing page de informações financeiras" target="_blank">
                    <span class="text">Send us an email</span>
                </a>
            </div>
            <div class="flex flex-column gap-3">
                <span class="title">Social Media</span>
                <span class="flex gap-3">
                    <a href="https://www.linkedin.com/in/emily-july/" target="_blank">
                        <i class="pi pi-linkedin" style="color: white"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="pi pi-whatsapp" style="color: white"></i>
                    </a>
                    <a href="https://www.instagram.com/juuly.emi/" target="_blank">
                        <i class="pi pi-instagram" style="color: white"></i>
                    </a>
            </span>
            </div>
        </div>
        <Divider class="mt-5" />
        <span class="text">©2024 All rights reserved</span>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";

.footer-container {
    display: flex;
    flex-direction: column;
    background-color: $bg-gray;
    padding: 50px;
}

.footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.1rem;
}

.text {
    font-size: 12px;
    text-decoration: none;
    color: $white;
}

.title {
    font-size: 15px;
}
</style>