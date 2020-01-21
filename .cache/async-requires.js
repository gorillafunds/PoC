// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-fund-template-js": () => import("../src/templates/fundTemplate.js" /* webpackChunkName: "component---src-templates-fund-template-js" */),
  "component---src-templates-fund-manager-template-js": () => import("../src/templates/fundManagerTemplate.js" /* webpackChunkName: "component---src-templates-fund-manager-template-js" */),
  "component---src-templates-fund-strategy-template-js": () => import("../src/templates/fundStrategyTemplate.js" /* webpackChunkName: "component---src-templates-fund-strategy-template-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-contact-jsx": () => import("../src/pages/contact.jsx" /* webpackChunkName: "component---src-pages-contact-jsx" */),
  "component---src-pages-fundlistpage-jsx": () => import("../src/pages/fundlistpage.jsx" /* webpackChunkName: "component---src-pages-fundlistpage-jsx" */),
  "component---src-pages-impressum-jsx": () => import("../src/pages/impressum.jsx" /* webpackChunkName: "component---src-pages-impressum-jsx" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-ruleset-jsx": () => import("../src/pages/Ruleset.jsx" /* webpackChunkName: "component---src-pages-ruleset-jsx" */)
}

