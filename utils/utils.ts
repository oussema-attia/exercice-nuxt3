import { notification } from "ant-design-vue";

export interface Server {
  id?: number;
  name: string;
  isActive: boolean;
  description: string;
}

export const useOpenNotification = (name: any, type: any) => {
  notification[type]({
    message: name,
    description: "",
    duration: 3,
    class: type,
  });
};
