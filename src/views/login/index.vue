<script setup lang="ts">
import DefaultLayout from "../../layout/DefaultLayout.vue";
import LoginForm from "@/components/login/LoginForm.vue";
</script>

<template>
  <DefaultLayout :scrollable="false">
    <VContainer>
      <VRow align="center" justify="center" class="h-9">
        <VCol cols="12">
          <LoginForm />
        </VCol>
      </VRow>
    </VContainer>
  </DefaultLayout>
</template>
