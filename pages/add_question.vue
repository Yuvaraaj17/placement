<template>
    <div class="flex w-full h-screen bg-slate-500 flex-col items-center pt-7 pb-4 gap-5 flex-grow-1 overflow-y-scroll">
        <div v-for="i in items" class="flex flex-row bg-slate-300 w-[800px] rounded-md ">
            <div class="flex w-8 bg-pink-700"></div>
            <div class="grid grid-cols-2 grid-rows-[25px,140px,52px,52px,52px,52px] py-6 px-3  justify-around items-center">
                <p class="col-span-2">Question: {{ i }}</p>
                <textarea name="question_text" class="resize-none rounded-md px-3 py-3 col-span-2 focus:outline-none"
                    cols="85" rows="4" placeholder="Type your question here" v-model="questions[i]"></textarea>
                <input class="rounded w-4/5 h-9 focus:outline-none px-3" placeholder="Option A" type="text"
                    v-model="optiona[i]">
                <input class="rounded w-4/5 h-9 focus:outline-none px-3" placeholder="Option B" type="text"
                    v-model="optionb[i]">
                <input class="rounded w-4/5 h-9 focus:outline-none px-3" placeholder="Option C" type="text"
                    v-model="optionc[i]">
                <input class="rounded w-4/5 h-9 focus:outline-none px-3" placeholder="Option D" type="text"
                    v-model="optiond[i]">
                <div>
                    Correct Choice : <select :name="'q' + i" v-model="correctopt[i]" class="w-2/5">
                        <option value="" disabled> Please choose one</option>
                        <option :value=optiona[i]>A</option>
                        <option :value=optionb[i]>B</option>
                        <option :value=optionc[i]>C</option>
                        <option :value=optiond[i]>D</option>
                    </select>
                </div>
                <div v-if="topic == null">
                    Correct Choice : <select :name="'q' + i" v-model="language[i]" class="w-2/5">
                        <option value="" disabled> Please choose one</option>
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="Javascript">Javascript</option>
                    </select>
                </div>
                <button v-if="i == last"
                    class="flex flex-shrink-0 col-span-2 place-self-end items-center justify-center bg-pink-700 h-9 w-24 text-white text-lg rounded-md px-3"
                    @click="add">Add</button>
            </div>

        </div>

        <button class="flex flex-shrink-0 items-center justify-center bg-pink-700 h-9 text-white rounded-md px-3"
            @click="click">Submit Questions</button>
    </div>
</template>

<script setup>
definePageMeta({ layout: "admin-layout" })
import { useCounter } from '~/composables/states';

console.log(useTopic().value)
var topic=useTopic().value
const {data}=await useFetch("http://127.0.0.1:8000/view_questions",{method: "GET",query:{topic: topic}})
useCounter().value=data.value.length
console.log(useCounter().value);
var i=useCounter().value+1
console.log("i",i);
const items = ref([i])
var last = i
function add() {
    i=i+1
    last=i
    items.value.push(i)
    // console.log(items.value)
}
const questions = ref([])
const optiona = ref([])
const optionb = ref([])
const optionc = ref([])
const optiond = ref([])
const correctopt = ref([])
const language=ref([])
var qset = []

function click() {
//     // var j = useCounter().value + 1
//     // console.log(j)
        console.log(items.value);
    items.value.forEach(element => {
//         console.log(element)
        console.log(language[element])
        const data = {
            id: element,
            question_text: questions.value[element],
            choice_one: optiona.value[element],
            choice_two: optionb.value[element],
            choice_three: optionc.value[element],
            choice_four: optiond.value[element],
            correct_choice: correctopt.value[element],
            topic: useTopic().value == "programming" ? language.value[element] : useTopic().value

        }
        qset.push(data)
//         // j = j + 1
    });
    console.log(qset)
    var question_set = JSON.stringify({ qset: qset })

    console.log(question_set);
    useFetch("http://localhost:8000/questions", {
        method: "POST",
        body: question_set,
        headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
        if (response.data.value == true) {
            await navigateTo("/success")
        }
    });
    qset=[]
}
</script>

<style scoped></style>