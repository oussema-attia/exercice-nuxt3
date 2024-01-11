export const useServerStore = defineStore("server", () => {
  const server: Ref<Server | {}> = ref({});
  const servers: Ref<Server[]> = ref([]);
  const config = useRuntimeConfig();

  const useDeleteServer = async ({ id, onError, onSuccess }: any) => {
    const response = await fetch(
      config.public.API + config.public.API_SERVERS + "/" + id,
      {
        method: "DELETE",
      }
    );
    const res = await response.json();
    if (response.status == 200) {
      return onSuccess(res);
    } else {
      return onError(res);
    }
  };

  const useAddServer = async ({ data, onError, onSuccess }: any) => {
    const response = await fetch(
      config.public.API + config.public.API_SERVERS,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (response.status == 201) {
      return onSuccess(res);
    } else {
      return onError(res);
    }
  };

  const useGetServer = async ({ id, onError, onSuccess }: any) => {
    server.value = {};
    const response = await fetch(
      config.public.API + config.public.API_SERVERS + "/" + id,
      {
        method: "GET",
      }
    );
    const res = await response.json();
    if (response.status == 200) {
      server.value = res;
      return onSuccess(res);
    } else {
      return onError(res);
    }
  };

  const useUpdateServer = async ({ data, id, onError, onSuccess }: any) => {
    const response = await fetch(
      config.public.API + config.public.API_SERVERS + "/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (response.status == 200) {
      return onSuccess(res);
    } else {
      return onError(res);
    }
  };

  const useGetServers = async ({ onError, onSuccess }: any) => {
    servers.value = [];
    const response = await fetch(
      config.public.API + config.public.API_SERVERS,
      {
        method: "GET",
      }
    );
    const res = await response.json();
    if (response.status == 200) {
      servers.value = res;
      return onSuccess(res);
    } else {
      return onError(res);
    }
  };

  return {
    server,
    servers,
    useDeleteServer,
    useAddServer,
    useGetServer,
    useUpdateServer,
    useGetServers,
  };
});
