// utils.js

export const loadCss = (url) => {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    document.head.appendChild(link);
};

export const loadJs = (url) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
};
