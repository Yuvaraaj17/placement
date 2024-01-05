<template> 
    <div class="flex flex-col w-full h-full p-5 gap-5  overflow-x-hidden overflow-y-scroll relative">
        <div class="flex w-full h-48 bg-slate-500">Welcome to question adding section</div>
        <div class="flex bg-slate-400 h-32 text-2xl">Select from the topics below</div>
        <div class="absolute w-full mt-96 grid grid-cols-4 gap-10 pr-10"><!-- can give w-1380px instead of w-full and remove pr-10 -->
            <div @click="aptitude" class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105 ">
                <div class="flex w-full h-fit py-3 px-4 text-2xl cursor-default">Quantitative Aptitude</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Topic-wise Questions</li>
                        <li>Full length Mock Test</li>
                        <li>Puzzles</li>
                    </ul>
                </div>
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div @click="coreConcepts" class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105">
                <div class="flex w-full h-fit py-3 px-4 te text-2xl ">Core Concepts</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Operating Systems</li>
                        <li>Computer Networks</li>
                        <li>Theory of Computation</li>
                    </ul>
                </div>
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div @click="cProgramming" class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105">
                <div class="flex w-full h-fit py-3 px-4 te text-2xl ">Programming</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Python Programming</li>
                        <li>Java Programming</li>
                        <li>C/C++ Programming</li>
                    </ul>
                </div>
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div @click="behaviourTest" class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105">
                <div class="flex w-full h-fit py-3 px-4 te text-2xl ">Behavioural Assessments</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Technical Interview</li>
                        <li>HR Interview</li>
                        <li>Group Discussion</li>
                    </ul>
                </div>
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div @click="psychometry" class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105">
                <div class="flex w-full h-fit py-3 px-4 te text-2xl ">Psychometry</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Abstraction Reasoning</li>
                        <li>Situational Judgement</li>
                        <li>Personality Traits</li>
                    </ul>
                </div>
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:scale-105">
                <div class="flex w-full h-fit py-3 px-4 te text-2xl ">Verbal Resoning</div>
                <div class="flex w-full pl-16 pr-5 py-5">
                    <ul class="flex flex-col gap-2 text-[18px] font-medium">
                        <li>Error Correction</li>
                        <li>Reading Comprehension</li>
                        <li>Homophones,Articles</li>
                    </ul>
                </div>
                
                <div class="flex w-full h-full items-end justify-end p-3">Read More...</div>
            </div>
            <div class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] ">
                <div class="flex w-full bg-orange-200 h-fit py-3 px-4 te text-2xl font-sans">Title</div>
                <div class="flex flex-col bg-cyan-300 w-full pt-5 pl-16 pr-5">Contents</div>
                <div class="flex w-full h-full items-end justify-end bg-red-300 p-3">Read More...</div>
            </div>
            <div class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] ">
                <div class="flex w-full bg-orange-200 h-fit py-3 px-4 te text-2xl ">Title</div>
                <div class="flex flex-col bg-cyan-300 w-full pt-5 pl-16 pr-5">Contents</div>
                <div class="flex w-full h-full items-end justify-end bg-red-300 p-3">Read More...</div>
            </div>
            <div class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] ">
                <div class="flex w-full bg-orange-200 h-fit py-3 px-4 te text-2xl ">Title</div>
                <div class="flex flex-col bg-cyan-300 w-full pt-5 pl-16 pr-5">Contents</div>
                <div class="flex w-full h-full items-end justify-end bg-red-300 p-3">Read More...</div>
            </div>
            <div class="flex flex-col gap-2 w-full bg-gray-200 rounded-lg drop-shadow-lg h-[250px] ">
                <div class="flex w-full bg-orange-200 h-fit py-3 px-4 te text-2xl ">Title</div>
                <div class="flex flex-col bg-cyan-300 w-full pt-5 pl-16 pr-5">Contents</div>
                <div class="flex w-full h-full items-end justify-end bg-red-300 p-3">Read More...</div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout:"main-layout",
    
})

async function aptitude(){
    useTopic().value="aptitude"
    await navigateTo("add_question")
}
async function cProgramming(){
    useTopic().value=null
    await navigateTo("add_question")
}
async function coreConcepts(){
    useTopic().value="core concepts"
    await navigateTo("add_question")
}
async function psychometry(){
    useTopic().value="psychometry"
    await navigateTo("add_question")
}
async function behaviourTest(){
    useTopic().value="behaviour test"
    await navigateTo("add_question")
}
</script>