import { notification } from "ant-design-vue";

export interface Server {
  id?: number;
  name: string;
  isActive: boolean;
  description: string;
}

export const useOpenNotification = (name: string, type: string) => {
  notification[type]({
    message: name,
    description: "",
    duration: 3,
    class: type,
  });
};
