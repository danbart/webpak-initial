import "@styles/main.css";
import "@styles/vars.styl";
import Template from "@templates/Template.js";

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
