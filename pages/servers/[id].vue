<template>
  <h2>{{ $t("editServer") }}</h2>
  <a-form :model="formState" @finish="useUpdateServer(route.params.id)">
    <LazyFormServer
      :data="formState"
      :key="formState.id"
      @useUpdateData="(name: string, data:string | boolean) => useUpdateData(name, data)"
    />
    <a-button type="primary" html-type="submit">{{ $t("save") }}</a-button>
    <a-button
      style="margin-left: 10px"
      @click="navigateTo(localePath('servers'))"
      >{{ $t("cancel") }}</a-button
    >
  </a-form>
</template>
<script lang="ts" setup>
const route = useRoute();
const localePath = useLocalePath();
const { useUpdateData, formState, useUpdateServer, useGetServer } = server();
onMounted(() => {
  useGetServer(route.params.id);
});
</script>
