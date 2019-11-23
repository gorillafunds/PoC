const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-fund-template-js": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/templates/fundTemplate.js"))),
  "component---src-templates-fund-manager-template-js": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/templates/fundManagerTemplate.js"))),
  "component---src-templates-fund-strategy-template-js": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/templates/fundStrategyTemplate.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/about.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/contact.jsx"))),
  "component---src-pages-fundlistpage-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/fundlistpage.jsx"))),
  "component---src-pages-impressum-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/impressum.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/index.js"))),
  "component---src-pages-ruleset-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/Ruleset.jsx"))),
  "component---src-pages-web-3-jsx": hot(preferDefault(require("/home/colt/Software/GorillaFunds/PoC/src/pages/web3.jsx")))
}

