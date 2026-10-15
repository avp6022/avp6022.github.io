// Entry point. Each module is independent and safe to run on any page.
import { observeFigures } from "./modules/figure-observer.js";
import { initSectionNav } from "./modules/section-nav.js";

observeFigures();
initSectionNav();
