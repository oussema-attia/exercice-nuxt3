<template>
  <a-form-item
    :label="$t('name')"
    name="name"
    :rules="[{ required: true, message: $t('required') }]"
  >
    <a-input
    :default-value="data.name"
      @change="(a:any)=>$emit('useUpdateData','name',a.target.value)"
    />
  </a-form-item>
  <a-form-item :label="$t('status')">
    <a-switch
      :checked="data.isActive"
      @change="(a:boolean)=>$emit('useUpdateData','isActive',a)"
    />
  </a-form-item>
  <a-form-item
    :label="$t('description')"
    name="description"
    :rules="[{ required: true, message: $t('required') }]"
  >
    <a-textarea
      :default-value="data.description"
      @change="(a:any)=>$emit('useUpdateData','description',a.target.value)"
    />
  </a-form-item>
</template>
<script lang="ts" setup>
import { Server } from "@/utils/utils";

defineProps({
  data: {
    type: [Object as ()=> Server, null],
    default: null
    },
});
defineEmits(['useUpdateData'])

</script>