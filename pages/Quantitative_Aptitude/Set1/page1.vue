<template>
    <div class="bg-pink-300 flex h-full w-full pl-7 py-10 pr-36 overflow-y-scroll ">
        <div class="bg-white flex flex-col h-fit px-6 py-10 gap-6 rounded-md">
            <QuestionSet :questionset="page1" />
            <div class="flex justify-center">
                <NuxtLink to="/Quantitative_Aptitude/Set1/page2" class=" bg-green-600 rounded-md px-4 py-2 w-fit text-white" >Next</NuxtLink>
            </div>
        </div>

    </div>
</template>

<script setup>

definePageMeta({
    layout:'main-layout',
    components:'questionset'
})
var page1=[
    {
        "q": "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",

        "options": ["120 metres", "180 metres", "324 metres", "150 metres"]
    },
    {
        "q": "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        "options": ["45 km/hr",
            "50 km/hr",
            "54 km/hr",
            "55 km/hr"]

    },
    {
        "q": "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        "options": ["200 m",
            "225 m",
            "245 m",
            "250 m"]
    },
    {
        "q": "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
        "options": ["1 : 3",
            "3 : 2",
            "3 : 4",
            "None of these"]
    },
    {
        "q": "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
        "options": ["120 m",
            "240 m",
            "300 m",
            "None of these"]
    }

    ]

</script>

<style scoped>

</style>