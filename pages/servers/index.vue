<template>
  <h2>{{ $t("list") }}</h2>
  <a-button
    type="primary"
    class="btn-add"
    @click="navigateTo(localePath('servers-add'))"
    >{{ $t("add") }}</a-button
  >
  <a-table :dataSource="servers" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'isActive'">
        <span>
          <a-tag :color="record.isActive ? 'green' : 'geekblue'">
            {{ record.isActive ? $t("active") : $t("inactive") }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a
            @click="
              navigateTo(
                localePath({ name: 'servers-id', params: { id: record.id } })
              )
            "
            >{{ $t("edit") }}</a
          >
          <a-divider type="vertical" />
          <a-popconfirm
            :title="$t('titlePop')"
            :ok-text="$t('yes')"
            :cancel-text="$t('no')"
            @confirm="useDeleteServer(record.id)"
          >
            <a>{{ $t("delete") }}</a>
          </a-popconfirm>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { useServerStore } from "@/stores/store";

const { useGetServers, useDeleteServer } = server();
const store = useServerStore();
const localePath = useLocalePath();
const i18n = useI18n();
const servers = computed(() => {
  return store.servers;
});

onMounted(() => {
  useGetServers();
});
const columns = [
  {
    title: i18n.t("serverId"),
    dataIndex: "id",
    key: "id",
  },
  {
    title: i18n.t("name"),
    dataIndex: "name",
    key: "name",
  },
  {
    title: i18n.t("description"),
    dataIndex: "description",
    key: "description",
  },
  {
    title: i18n.t("status"),
    dataIndex: "isActive",
    key: "isActive",
  },
  {
    title: i18n.t("action"),
    key: "action",
  },
];
</script>
<style lang="scss" scoped>
.btn-add {
  margin: 16px 0;
}
</style>
