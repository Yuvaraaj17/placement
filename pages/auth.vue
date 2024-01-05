<template>
    <div class="w-full h-screen justify-center items-center flex bg-amber-100">
        <form action="" class="bg-gray-100 rounded-lg w-[450px] h-[300px] px-8 flex flex-col gap-7 py-10 justify-center">
            <div class="flex flow-row justify-between items-center">
                <div class="">
                    User Id
                </div>
                <input type="text" ref="input1" @keypress.enter="focusInput" v-model.number="userid" class="bg-transparent px-1 py-1 border border-black rounded-md w-[250px] focus:outline-none">
            </div>
            <div class="flex flex-row justify-between">
                <div>
                    Password new
                </div>
                <input type="text" ref="input2" @keypress.enter="focusbtn" v-model="password" class="bg-transparent px-1 py-1 border border-black rounded-md w-[250px] focus:outline-none ">
            </div>
            <input type="button" ref="btn" @keypress.enter="validate" value="Submit" class="text-white rounded bg-pink-700 w-28 h-8 self-end focus:outline-none focus:scale-110 transition-transform duration-200 ease-out">
        </form>
    </div>
</template>

<script setup>
const userid = ref()
const password = ref('')
const input1=ref(null)
const input2=ref(null)
const btn=ref(null)

onMounted(() => {
  input1.value.focus()
})

function focusInput(){
    input2.value.focus()
}

function focusbtn(){
    btn.value.focus()
}

async function validate() {
    
    console.log(userid.value, typeof (userid.value));
    console.log(password.value, typeof (password.value));
    await useFetch("http://localhost:8000/login", {
        method: 'post',
        body: {
            user_id: userid.value,
            password: password.value
        }
    }).then(async (response) => {
        if (response.data.value == true) {
            console.log("redirect to admin home page");
            useCurrentUser().value = userid.value
            await navigateTo("admin_home")
        }
        else {
            alert("Invalid user id or password")
            input1.value.focus()
        }
    }

    )
    userid.value=''
    password.value=''
}

</script>