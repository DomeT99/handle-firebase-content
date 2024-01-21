<script setup lang="ts">
import type { ModalConfirm } from '@/types/components';

defineProps<{
   data: ModalConfirm;
}>();
</script>
<template>
   <v-dialog>
      <v-card location="center" :width="data.width ?? 500" :title="data.title">
         <v-alert
            v-if="data.isShowBanner ?? false"
            density="compact"
            type="error"
            text="NB: Questa azione sarà irreversibile"></v-alert>
         <v-card-text>
            {{ data.message }}
         </v-card-text>

         <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn :loading="data.loader" text="Sì" @click="data.onConfirm" />
            <v-btn text="No" @click="data.onCancel" />
         </v-card-actions>
      </v-card>
   </v-dialog>
</template>
