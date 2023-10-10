<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="navigateTo(localePath('/'))">
          <home-outlined />
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="2" @click="navigateTo(localePath('servers'))">
          <cloud-server-outlined />
          <span>Servers</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <flag-outlined />
              <span>Language</span>
            </span>
          </template>
          <a-menu-item key="3" @click="navigateTo(switchLocalePath('en')) ">English</a-menu-item>
          <a-menu-item key="4" @click="navigateTo(switchLocalePath('fr'))">French</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons-vue";
const switchLocalePath = useSwitchLocalePath();
const collapsed: ref<boolean> = ref(false);
const selectedKeys: ref<string[]> = ref(["1"]);
const localePath = useLocalePath();
</script>
<style lang="less">
@import 'ant-design-vue/lib/style/default.less';
@import 'ant-design-vue/lib/style/components.less';
</style>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
