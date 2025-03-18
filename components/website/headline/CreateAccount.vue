<template>
  <div class="flex flex-col gap-4">
    <Input id="input-firstname" placeholder="First Name"/>
    <Input id="input-lastname" placeholder="Last Name"/>
    <Input id="input-email" placeholder="Email"/>
    <Input id="input-password" placeholder="Password"/>
    <Button id="btn-create" label="Submit" custom-class="flex justify-center"/>
  </div>
</template>

<script setup lang="ts">
import Input from '~/components/elements/Input.vue';
import Button from '~/components/elements/Button.vue';
</script>

<style scoped>

</style>