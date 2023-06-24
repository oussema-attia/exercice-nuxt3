import { Server } from "@/utils/utils";

export const useServerStore = defineStore("server", {
  state: () => ({
    idCount: 2,
    server: {} as Server | undefined,
    servers: [
      {
        id: 0,
        name: "Server A",
        description: "Server of domain A",
        isActive: true,
      },
      {
        id: 1,
        name: "Server B",
        description: "Server of domain B",
        isActive: false,
      },
      {
        id: 2,
        name: "Server C",
        description: "Server of domain C",
        isActive: true,
      },
    ] as Server[],
  }),
  actions: {
    useDeleteServer(id: number) {
      const index = this.servers.findIndex((a: any) => a.id == id);
      this.servers.splice(index, 1);
    },
    useAddServer(data: Server) {
      let newServer = data;
      this.idCount++;
      newServer.id = this.idCount++;
      this.servers.push(data);
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
  },
});
