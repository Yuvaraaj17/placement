<template>
    <div class="w-full h-full gap-6 bg-cyan-400 flex flex-col px-36 p-10" >
        <div class="cursor-pointer flex flex-col justify-center h-fit relative">
            <input type="checkbox" class="opacity-0 absolute top-0 h-20 w-full inset-x-0 peer">
            <div class="w-full h-fit flex items-center justify-between flex-row gap-2 bg-slate-400 p-4 rounded-md ">
                <div class="flex h-12 w-12 items-center justify-center">
                    <img src="/folder_close.png">
                </div>
                <div class="flex h-full w-full items-center text-lg ">
                    Time and Distance
                </div>
            </div>
            <img class="absolute flex h-10 w-10 items-center justify-center p-2 top-5 right-4 transition-all duration-200 ease-out opacity-100 peer-checked:opacity-0" src="/double_arrow.png">
            <img class="absolute flex h-10 w-10 items-center justify-center p-2 top-5 right-4 transition-all duration-200 ease-out rotate-180 opacity-0 peer-checked:opacity-100" src="/double_arrow.png">
            <div class="flex w-full transition-all duration-500 ease-out bg-white justify-center rounded-b-md overflow-hidden h-0 peer-checked:h-32">
                <ul class="mx-16 mt-5 flex w-full h-full text-cyan-700 relative ">
                    <li class="absolute left-0">Question Set I</li>
                    <li class="absolute left-1/4 ">Question Set II</li>
                    <li class="absolute left-2/4" >Question Set III</li>
                    <li class="absolute left-3/4">Question Set IV</li>
                    <li class="absolute top-12">Question Set V</li>
                    
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


</script>
    