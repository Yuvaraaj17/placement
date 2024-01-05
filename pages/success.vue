<template>
    <div class="h-screen w-full flex justify-center items-center flex-col gap-5"  >
        <div class="bg-slate-400 flex text-4xl">
            Question added successfully
        </div>
        <div v-if="flag">
            Redirecting back to question page
        </div>
    </div>
</template>

<script setup>
const flag=ref(0);
setTimeout(()=>{
    flag.value=1
    console.log("time out over")
    setTimeout(()=>{
        navigateTo("add_question")
    },2000
    )
    
},2000)
// navigateTo("/practice")
// 

</script>

<style scoped>

</style>