<template>
  <a-config-provider :locale="locale === 'en' ? enUS : frFR">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1" @click="navigateTo(localePath('/'))">
            <home-outlined />
            <span>{{ $t("home") }}</span>
          </a-menu-item>
          <a-menu-item key="2" @click="navigateTo(localePath('servers'))">
            <cloud-server-outlined />
            <span>{{ $t("servers") }}</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <flag-outlined />
                <span>{{ $t("language") }}</span>
              </span>
            </template>
            <a-menu-item key="3" @click="navigateTo(switchLocalePath('en'))">{{
              $t("english")
            }}</a-menu-item>
            <a-menu-item key="4" @click="navigateTo(switchLocalePath('fr'))">{{
              $t("french")
            }}</a-menu-item>
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
          {{ $t("footer") }}
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script lang="ts" setup>
import enUS from "ant-design-vue/es/locale/en_US";
import frFR from "ant-design-vue/es/locale/fr_FR";
const i18n = useI18n();
const locale = i18n.locale;
const route = useRoute();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const collapsed: Ref<boolean> = ref(false);
const selectedKeys: Ref<string[]> = ref(
  route.fullPath === localePath("servers") ? ["2"] : ["1"]
);
</script>
<style lang="less">
@import "ant-design-vue/lib/style/default.less";
@import "ant-design-vue/lib/style/components.less";
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
