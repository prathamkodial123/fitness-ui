import { cssFiles, jsFiles } from "./resourceList";
import { loadCss, loadJs } from "./utils";

export const loadResources = () => {
    // Load CSS files
    cssFiles.forEach((cssFile) => {
        loadCss(cssFile);
    });

    // Load JS files
    jsFiles.forEach((jsFile) => {
        loadJs(jsFile);
    });
};


export const loadResourcesJS = () => {
    // Load JS files
    const js = Array.of('js/main.js')
    js.forEach((jsFile) => {
        loadJs(jsFile);
    });
};
