<template>
    <div class="w-full h-screen justify-center items-center flex bg-amber-100">
        <form action="" class="bg-gray-100 rounded-lg w-[450px] h-[300px] px-8 flex flex-col gap-7 py-10 justify-center">
            <div class="flex flow-row justify-between items-center">
                <div class="">
                    User Id
                </div>
                <input type="text" v-model.number="userid" class="bg-transparent border border-black rounded-md w-[250px]">
            </div>
            <div class="flex flex-row justify-between">
                <div>
                    Password
                </div>
                <input type="text" v-model= "password" class="bg-transparent border border-black rounded-md w-[250px] ">
            </div>
            <input type="button" @click="validate" value="Submit" class="text-white rounded bg-pink-700 w-28 h-8 self-end">
        </form>
    </div>
</template>

<script setup>
    const userid = ref()
    const password = ref('')
    async function validate(){
        console.log(userid.value,typeof(userid.value));
        console.log(password.value,typeof(password.value));
        await useFetch("http://localhost:8000/login",{
        method: 'post',
        body: {
            user_id: userid.value,
            password: password.value
        }
    }).then((response) => console.log(response))
    }   
    
</script>