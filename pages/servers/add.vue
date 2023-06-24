<template>
  <h2>Add server</h2>
  <a-form :model="formState" @finish="useAddServer">
    <LazyFormServer
      :data="formState"
      @useUpdateData="(name: string, data:string | boolean) => useUpdateData(name, data)"
    />
    <a-form-item>
      <a-button type="primary" html-type="submit">Create</a-button>
      <a-button
        style="margin-left: 10px"
        @click="navigateTo(localePath('servers'))"
        >Cancel</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
const localePath = useLocalePath();
const { useUpdateData, formState, useAddServer } = server();
</script>
