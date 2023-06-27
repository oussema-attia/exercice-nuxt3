import { Server } from "@/utils/utils";
import { useServerStore } from "@/stores/store";

export default () => {
  const store = useServerStore();
  const route = useRoute();
  const i18n = useI18n();
  const localePath = useLocalePath();
  const formState: Ref<Server> = ref({
    name: "",
    isActive: false,
    description: "",
  });
  const useUpdateServer = () => {
    store.useUpdateServer(formState.value, Number(route.params.id));
    useOpenNotification(i18n.t('successUpdate'), "success");
    navigateTo(localePath("servers"));
  };
  const useUpdateData = (name: string, data: string | boolean) => {
    formState.value[name] = data;
  };
  const useAddServer = () => {
    store.useAddServer(formState.value);
    useOpenNotification(i18n.t('successAdd'), "success");
    navigateTo(localePath("servers"));
  };

  return {
    formState,
    useUpdateData,
    useUpdateServer,
    useAddServer,
  };
};
