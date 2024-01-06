const config = useRuntimeConfig();

export const useServerStore = defineStore("server", {
  state: () => ({
    idCount: 2,
    server: {} as Server,
    servers: [] as Server[],
  }),
  actions: {
    async useDeleteServer({ id, onError, onSuccess }: any) {
      const response: any = await fetch(
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
    },
    async useAddServer({ data, onError, onSuccess }: any) {
      const response: any = await fetch(
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
    },
    async useGetServer({ id, onError, onSuccess }: any) {
      this.server = {};
      const response: any = await fetch(
        config.public.API + config.public.API_SERVERS + "/" + id,
        {
          method: "GET",
        }
      );
      const res = await response.json();
      if (response.status == 200) {
        this.server = res;
        return onSuccess(res);
      } else {
        return onError(res);
      }
    },
    async useUpdateServer({ data, id, onError, onSuccess }: any) {
      const response: any = await fetch(
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
    },
    async useGetServers({ onError, onSuccess }: any) {
      this.servers = [];
      const response: any = await fetch(
        config.public.API + config.public.API_SERVERS,
        {
          method: "GET",
        }
      );
      const res = await response.json();
      if (response.status == 200) {
        this.servers = res;
        return onSuccess(res);
      } else {
        return onError(res);
      }
    },
  },
});
