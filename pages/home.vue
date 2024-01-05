<template>
    <div class="flex bg-slate-400 text-5xl justify-center self-center">
        Welcome Home , You are logged in !!!
    </div>
</template>

<script setup>
import { useCounter } from '~/composables/states';


useCurrentUser().value == null ? await navigateTo("/auth") : 
definePageMeta({ layout: "main-layout" })

</script>
<style lang="scss" scoped>
</style>