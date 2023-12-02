<script setup lang="ts">
import GoogleButton from "../components/GoogleButton.vue";
</script>
<template>
  <VForm>
    <VSheet
      elevation="7"
      max-width="600"
      rounded="lg"
      width="100%"
      class="pa-12 text-center mx-auto"
    >
      <h1 class="mb-10">Login</h1>
      <VForm @submit.prevent>
        <VTextField
          elevation="1"
          variant="outlined"
          type="email"
          label="Email"
        ></VTextField>

        <VTextField
          elevation="1"
          variant="outlined"
          type="password"
          label="Password"
        ></VTextField>
        <VRow class="mb-8">
          <VCol>
            <VBtn type="submit" block class="mt-4 bg-primary">Login</VBtn>
          </VCol>
        </VRow>
        Or
        <VRow class="mt-8">
          <VCol>
            <GoogleButton />
          </VCol>
        </VRow>
      </VForm>
    </VSheet>
  </VForm>
</template>
