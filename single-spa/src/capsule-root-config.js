import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/' ,
});

registerApplication({
  name: "@capsule/react-single",
  app: () => System.import("@capsule/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@capsule/react-multiples",
  app: () => System.import("@capsule/react-multiples"),
  activeWhen: ['/react-multiples']
});

start({
  urlRerouteOnly: true,
});
