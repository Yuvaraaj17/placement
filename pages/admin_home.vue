<template>
    <div>
        Welcome Home {{ useCurrentUser().value  }} count {{ useCounter().value }}
    </div>
</template>

<script setup>
import { useCounter } from '~/composables/states';

useCurrentUser().value == null ? await navigateTo("/auth") : definePageMeta({ layout: 'admin-layout' })

     

</script>

<style scoped>

</style>