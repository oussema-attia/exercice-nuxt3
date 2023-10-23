import { Server } from "@/utils/utils";

export const useServerStore = defineStore("server", {
  state: () => ({
    idCount: 2,
    server: {} as Server | undefined,
    servers: [] as Server[],
  }),
  actions: {
    async useDeleteServer({ id, onError, onSuccess }: any) {
      const response: any = await fetch(
        useNuxtApp().$config.public.API +
          useNuxtApp().$config.public.API_SERVERS +
          "/" +
          id,
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
        useNuxtApp().$config.public.API +
          useNuxtApp().$config.public.API_SERVERS,
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
    useGetServer(id: number) {
      this.server = {};
      this.server = this.servers.find((a: Server) => a.id == id);
    },
    useUpdateServer(data: Server, id: number) {
      const index = this.servers.findIndex((a: Server) => a.id == id);
      this.servers[index] = data;
      this.servers[index].id = id;
    },
    async useGetServers({ onError, onSuccess }: any) {
      this.servers = [];
      const response: any = await fetch(
        useNuxtApp().$config.public.API +
          useNuxtApp().$config.public.API_SERVERS,
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
