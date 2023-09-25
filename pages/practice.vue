<template>
    <div class="flex flex-col w-full pr-8 ml-24 h-full overflow-y-scroll">
        <div class="h-1/4">Welcome To Practice Section</div>
        <div id="topic-container" class="h-3/4 grid grid-cols-3 gap-5 p-5">
            <div class="topic">Quantitative Aptitude</div>
            <div class="topic">Core Concepts</div>
            <div class="topic">Programming</div>
            <div class="topic">Psychomteric</div>
            <div class="topic">Interview Questions</div>
            <div class="topic">Verbal Reasoning</div>
            <div class="topic">One</div>
            <div class="topic">Two</div>
            <div class="topic">Three</div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:"main-layout",
    
})
</script>
<style scoped>
.topic{
    height: 250px;
    background-color: #f5f5f5;
    box-shadow:2px 2px 2px grey;
    border-radius: 5px;
    padding-left: 30px;
    padding-top: 25px;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 600;
    
}
::-webkit-scrollbar {
  
  width: 10px;
  border-radius: 15px;
  background-color: #f5f5f5; /* Background color of the track */
}

/* Style the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
  background-color: red; /* Color of the thumb */
  border-radius: 15px; /* Rounded corners for the thumb */
}
</style>