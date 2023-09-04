define("@widget/LAYOUT/c/bs-themeOverrides-e736c017.js", ["exports"], (function(e) {
    "use strict";
    (global.Core || guac["@wsb/guac-widget-core"]).constants;
    e.a = e => {
        let {
            sectionHeadingHR: t
        } = e;
        return t ? {
            sectionHeadingHR: t
        } : {}
    }, e.b = e => {
        let {
            sectionHeadingColor: t
        } = e;
        return {
            HIGHLIGHT: {
                style: {
                    color: "highlight"
                }
            },
            HIGH_CONTRAST: {
                style: {
                    color: "highContrast"
                }
            }
        }[t] || {}
    }, e.c = e => {
        let {
            sectionHeadingSize: t
        } = e;
        return t ? {
            style: {
                fontSize: t
            }
        } : {}
    }, e.s = e => {
        let {
            sectionHeadingAlignment: t
        } = e;
        return {
            LEFT: {
                style: {
                    textAlign: "left",
                    "@md": {
                        textAlign: "left"
                    }
                },
                alignmentOption: "left"
            },
            CENTER: {
                style: {
                    textAlign: "center",
                    "@md": {
                        textAlign: "center"
                    }
                },
                alignmentOption: "center"
            },
            RIGHT: {
                style: {
                    textAlign: "right",
                    "@md": {
                        textAlign: "right"
                    }
                },
                alignmentOption: "right"
            }
        }[t] || {}
    }
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-themeOverrides-e736c017.js.map