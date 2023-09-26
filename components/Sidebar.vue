<template>
    <div class="h-screen bg-red-500 transition-width duration-500 ease-out"
        :class="{ 'w-56': isToggle, 'w-24': !isToggle }">
        <div class="flex flex-col items-center pt-5 gap-10">
            <div class="relative w-full pb-4">
                <img @click="toggle" src="/Hamburger.png" alt="" class="absolute transition-all duration-500 ease-out"
                    :class="{ 'ml-64': isToggle, 'ml-[30px]': !isToggle }">
            </div>
            <div class="w-full h-1/3 relative">
                <div class="element">
                    <NuxtLink to="/home" class="nuxt-link">
                        <img src="/Home.png" alt="">
                        <div class="text" :class="{ 'opacity-0': !isToggle, 'opacity-100': isToggle }">Home</div>
                    </NuxtLink>
                </div>
                <div class="element top-16">
                    <NuxtLink to="/course" class="nuxt-link">
                        <img src="/Book.png" alt="">
                        <div class="text" :class="{ 'opacity-0': !isToggle, 'opacity-100': isToggle }">Courses</div>
                    </NuxtLink>
                </div>
                <div class="element top-32">
                    <NuxtLink to="/drive" class="nuxt-link">
                        <img src="/Drive.png" alt="">
                        <div class="text" :class="{ 'opacity-0': !isToggle, 'opacity-100': isToggle }">Drives</div>
                    </NuxtLink>
                </div>
                <div class="element top-48">
                    <NuxtLink to="/practice" class="nuxt-link">
                        <img src="/Test.png" alt="">
                        <div class="text" :class="{ 'opacity-0': !isToggle, 'opacity-100': isToggle }">Practice</div>
                    </NuxtLink>
                </div>

            </div>

        </div>
    </div>
</template>


<script setup>
const isToggle = ref(false);
function toggle() {
    isToggle.value = !isToggle.value;
    console.log(isToggle.value);
}
</script>

<style scoped>
.element {
    position: absolute;
    padding-left: 30px;
    width: 100%;
    

}
.nuxt-link{
    cursor: default;
}
.text {
    position: absolute;
    color: white;
    margin-left: 48px;
    font-size: larger;
    margin-top: -30px;
    transition: opacity;
    transition-delay: 50ms;
    transition-duration: 350ms;
    transition-timing-function: ease-out;
    
}</style>

