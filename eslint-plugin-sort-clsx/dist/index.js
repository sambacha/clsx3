"use strict";
const sort_clsx_1 = require("./rules/sort-clsx");
module.exports = {
    rules: {
        sortClsx: sort_clsx_1.sortClsx,
    },
    configs: {
        all: {
            plugins: ["sort-clsx"],
            rules: {
                "sort-clsx": "error",
            },
        },
    },
};
