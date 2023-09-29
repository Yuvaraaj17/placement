<template>
    <div class="w-full h-full gap-6 bg-cyan-400 flex flex-col px-36 p-10" >
        <div id="topicone" class="flex flex-col justify-center h-fit" @click="openTopic1">
            <div class="w-full h-fit flex items-center justify-between flex-row gap-2 bg-slate-400 p-4 rounded-md">
                <div class="flex h-12 w-12 items-center justify-center">
                    <img src="/folder_close.png">
                </div>
                <div class="flex h-full w-full items-center text-lg">
                    Time and Distance
                </div>
                <div class="flex h-11 w-11 items-center justify-center p-2 relative">
                    <img class="transition-all duration-200 ease-out" src="/double_arrow.png" alt="" :class="{'opacity-0':isOpen1,'opacity-100':!isOpen1}">
                    <img class="transition-all duration-200 ease-out absolute h-11 w-11 p-2 rotate-180" src="/double_arrow.png" alt="" :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">
                </div>
            </div>
            <div class="flex w-full transition-all duration-500 ease-out bg-white justify-center rounded-b-md overflow-hidden " :class="{'h-0':!isOpen1,'h-32':isOpen1}">
                <ul class="mx-16 mt-5 flex w-full h-full text-cyan-700 relative ">
                    <li class="transition-opacity duration-500 ease-out absolute left-0" :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">Time and Distance I</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-1/4 " :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">Time and Distance II</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-2/4" :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">Time and Distance III</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-3/4" :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">Time and Distance IV</li>
                    <li class="transition-opacity duration-500 ease-out absolute top-12" :class="{'opacity-0':!isOpen1,'opacity-100':isOpen1}">Time and Distance V</li>
                    
                </ul>

            </div>

        </div>
        <div id="topicone" class="flex flex-col justify-center h-fit" @click="openTopic2">
            <div class="w-full h-fit flex items-center justify-between flex-row gap-2 bg-slate-400 p-4 rounded-md">
                <div class="flex h-12 w-12 items-center justify-center">
                    <img src="/folder_close.png">
                </div>
                <div class="flex h-full w-full items-center text-lg">
                    Time and Distance
                </div>
                <div class="flex h-11 w-11 items-center justify-center p-2 relative">
                    <img class="transition-all duration-200 ease-out" src="/double_arrow.png" alt="" :class="{'opacity-0':isOpen2,'opacity-100':!isOpen2}">
                    <img class="transition-all duration-200 ease-out absolute h-11 w-11 p-2 rotate-180" src="/double_arrow.png" alt="" :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">
                </div>
            </div>
            <div class="flex w-full transition-all duration-500 ease-out bg-white justify-center rounded-b-md overflow-hidden " :class="{'h-0':!isOpen2,'h-32':isOpen2}">
                <ul class="mx-16 mt-5 flex w-full h-full text-cyan-700 relative ">
                    <li class="transition-opacity duration-500 ease-out absolute left-0" :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">Time and Distance I</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-1/4 " :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">Time and Distance II</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-2/4" :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">Time and Distance III</li>
                    <li class="transition-opacity duration-500 ease-out absolute left-3/4" :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">Time and Distance IV</li>
                    <li class="transition-opacity duration-500 ease-out absolute top-12" :class="{'opacity-0':!isOpen2,'opacity-100':isOpen2}">Time and Distance V</li>
                    
                </ul>

            </div>

        </div>
        

    </div>
</template>

<script setup>
import 'material-symbols'
definePageMeta({
    layout: 'main-layout'
})

// const element=document.getElementById("topicone");

const isOpen1=ref(false);
const isOpen2=ref(false);
function openTopic1(){
    isOpen1.value=!isOpen1.value
    
}
function openTopic2(){
    isOpen2.value=!isOpen2.value
    
}

</script>
    