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
  const useUpdateServer = (id: string) => {
    store.useUpdateServer({
      id: id,
      data: formState.value,
      onSuccess: () => {
        useOpenNotification(i18n.t("successUpdate"), "success");
        navigateTo(localePath("servers"));
      },
      onError: () => {
        useOpenNotification(i18n.t("error"), "error");
      },
    });
  };
  const useUpdateData = (name: string, data: string | boolean) => {
    formState.value[name] = data;
  };
  const useAddServer = () => {
    store.useAddServer({
      data: formState.value,
      onSuccess: () => {
        useOpenNotification(i18n.t("successAdd"), "success");
        navigateTo(localePath("servers"));
      },
      onError: () => {
        useOpenNotification(i18n.t("error"), "error");
      },
    });
  };

  const useDeleteServer = (id: string) => {
    store.useDeleteServer({
      id: id,
      onSuccess: () => {
        useOpenNotification(i18n.t("successDelete"), "success");
        useGetServers();
      },
      onError: () => {
        useOpenNotification(i18n.t("error"), "error");
      },
    });
  };

  const useGetServers = () => {
    store.useGetServers({
      onSuccess: () => {
        /**/
      },
      onError: () => {
        useOpenNotification(i18n.t("error"), "error");
      },
    });
  };

  const useGetServer = (id: string) => {
    store.useGetServer({
      id: id,
      onSuccess: (data: Server) => {
        formState.value = data;
      },
      onError: () => {
        useOpenNotification(i18n.t("error"), "error");
      },
    });
  };

  return {
    formState,
    useUpdateData,
    useUpdateServer,
    useAddServer,
    useGetServers,
    useDeleteServer,
    useGetServer,
  };
};
