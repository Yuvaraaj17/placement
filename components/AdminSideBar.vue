<template>
    <div class="h-screen bg-red-500 transition-width duration-500 ease-out"
        :class="{ 'w-96': isToggle, 'w-24': !isToggle }">
        <div class="flex flex-col items-center gap-7 pt-5 w-full">
            <div class="flex w-full  px-3" :class="{ 'justify-center': !isToggle, 'justify-end': isToggle }">
                <div class="flex" @click="toggle"><img class="w-9" src="/Hamburger.png"></div>
            </div>
            <div class="flex flex-col h-full w-full ml-16 items-start gap-10">
                <NuxtLink to="/admin_home" class="flex items-center flex-row h-8 w-48 gap-2">
                    <img class="w-8 h-8" src="/Home.png" alt="">
                    <div v-if="isToggle" class="text-xl font-normal text-white transition-opacity  duration-1000 ease-out"
                        :class="{'opacity-100':isToggle,'opacity-0':!isToggle}">Home</div>
                </NuxtLink>
                <NuxtLink to="/topic_choose" class="flex items-center flex-row h-8 w-48 gap-2">
                    <img class="w-8 h-8" src="/Book.png" alt="">
                    <div v-if="isToggle" class="text-xl font-normal text-white transition-opacity duration-1000 ease-out"
                        :class="{ 'opacity-100': isToggle, 'opacity-0': !isToggle}">Question Bank</div>
                </NuxtLink>
                <NuxtLink to="/drive" class="flex items-center flex-row h-8 w-48 gap-2 ">
                    <img class="h-8 w-8 " src="/Drive.png" alt="">
                    <div v-if="isToggle" class="text-xl font-normal text-white transition-opacity duration-1000 ease-out "
                        :class="{ 'opacity-100': isToggle, 'opacity-0': !isToggle}">Update Drives</div>
                </NuxtLink>
                <NuxtLink to="/practice" class="flex items-center flex-row h-8 w-8 gap-2">
                    <img class="w-full h-full" src="/Test.png" alt="">
                    <div v-if="isToggle" class="text-xl font-normal text-white transition-opacity duration-[450ms] ease-out"
                        :class="{ 'opacity-100': isToggle, 'opacity-0': !isToggle}">FAQ</div>
                </NuxtLink>
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
