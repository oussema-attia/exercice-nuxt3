<template>
  <h2>Edit server</h2>
  <a-form :model="formState" @finish="useUpdateServer">
    <LazyFormServer
      :data="formState"
      :key="formState.id"
      @useUpdateData="(name: string, data:string | boolean) => useUpdateData(name, data)"
    />
    <a-form-item>
      <a-button type="primary" html-type="submit">Update</a-button>
      <a-button
        style="margin-left: 10px"
        @click="navigateTo(localePath('servers'))"
        >Cancel</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { useServerStore } from "@/stores/store";
const store = useServerStore();
const route = useRoute();
const localePath = useLocalePath();
const { useUpdateData, formState, useUpdateServer } = server();
onMounted(() => {
  store.useGetServer(Number(route.params.id));
  formState.value = store.server;
});
</script>
