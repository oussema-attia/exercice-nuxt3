import { Server } from "@/utils/utils";
import { useServerStore } from "@/stores/store";

export default () => {
  const store = useServerStore();
  const route = useRoute();
  const router = useRouter();
  const i18n = useI18n();
  const formState: Ref<Server> = ref({
    name: "",
    isActive: false,
    description: "",
  });
  const useUpdateServer = () => {
    store.useUpdateServer(formState.value, Number(route.params.id));
    // navigateTo(localePath("servers"));
    useOpenNotification(i18n.t('successUpdate'), "success");
    router.push({ path: "/" + i18n.locale.value + "/" + "servers" });
  };
  const useUpdateData = (name: string, data: string | boolean) => {
    formState.value[name] = data;
  };
  const useAddServer = () => {
    store.useAddServer(formState.value);
    // navigateTo(localePath("servers"));
    router.push({ path: "/" + i18n.locale.value + "/" + "servers" });
    useOpenNotification(i18n.t('successAdd'), "success");
  };

  return {
    formState,
    useUpdateData,
    useUpdateServer,
    useAddServer,
  };
};
