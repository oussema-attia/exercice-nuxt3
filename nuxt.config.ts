import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
      }),
    ],
  },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    dynamicRouteParams: true,
    strategy: "prefix",
    baseUrl: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        ["en"]: {
          welcome: "Welcome yey",
          edit: "Edit",
          delete: "Delete",
          active: "Active",
          inactive: "Inactive",
          serverId: "Server ID",
          name: "Name",
          description: "Description",
          status: "Server status",
          action: "Action",
          list: "List servers",
          add: "Add server",
          titlePop: "Are you sure ?",
          yes: "Yes",
          no: "No",
          SuccessDelete: "Success delete",
          create: "Create",
          cancel: "Cancel",
          editServer: "Edit server",
          save: "Save",
          required: "This field is required",
        },
        ["fr"]: {
          welcome: "Bonjour yey",
          edit: "Modifier",
          delete: "Supprimer",
          active: "Actif",
          inactive: "Inactif",
          serverId: "Serveur ID",
          name: "Nom",
          description: "Description",
          status: "Statut du serveur",
          action: "Action",
          list: "Liste des serveurs",
          add: "Ajouter un serveur",
          titlePop: "Es-tu sûr ?",
          yes: "Oui",
          no: "Non",
          SuccessDelete: "Suppression réussie",
          create: "Créer",
          cancel: "Annuler",
          editServer: "Modifier le serveur",
          save: "Sauvegarder",
          required: "Ce champ est obligatoire",
        },
      },
    },
  },
});
