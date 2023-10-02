<template>
    <div class="flex flex-col h-fit gap-5 pr-8  relative" v-for="(question, index) in questionset">
        <div>
            <span>{{ index + 1 }}</span>
            {{ question.q }}
        </div>
        <div class="flex flex-col ml-2 gap-3 relative" >
            <label v-for="options in question.options" :for="index + '_' + options">
                <input type="radio" :name="'q' + index" :id="index + '_' + options"> <span class="ml-1">{{ options }}</span>
            </label>
            <input type="checkbox" class="absolute top-36 left-0  w-[100px] h-6 z-10 peer opacity-0">
            <div class="transition-all duration-200 peer-hover:underline peer-hover:underline-offset-4 peer-hover:text-cyan-500 ">View Answer</div>
            <div class="px-3 py-1 absolute rounded-[4px] text-white bg-cyan-500 top-[140px] left-36 border transition-all duration-500 cursor-pointer hover:text-cyan-500 hover:bg-white hover:border-cyan-500">Submit</div>
            <div class="flex w-full bg-black transition-all h-0 duration-500 ease-out peer-checked:h-32" ></div>
        </div>
            
            
            
        
        <hr class="h-0.5 bg-cyan-800">
    </div>
</template>

<script setup>

defineProps({
    questionset: Array
})


</script>