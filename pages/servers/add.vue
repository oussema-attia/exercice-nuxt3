<template>
  <h2>{{ $t("add") }}</h2>
  <a-form :model="formState" @finish="useAddServer">
    <LazyFormServer
      :data="formState"
      @useUpdateData="(name: string, data:string | boolean) => useUpdateData(name, data)"
    />
    <a-button type="primary" html-type="submit">{{ $t("create") }}</a-button>
    <a-button
      style="margin-left: 10px"
      @click="navigateTo(localePath('servers'))"
      >{{ $t("cancel") }}</a-button
    >
  </a-form>
</template>
<script lang="ts" setup>
const localePath = useLocalePath();
const { useUpdateData, formState, useAddServer } = server();
</script>
