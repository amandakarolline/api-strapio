'use strict';

/**
 * grade-componente router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::grade-componente.grade-componente');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/grade-componentes",
            "handler": "grade-componente.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/grade-componentes/:attribute/:value",
            "handler": "grade-componente.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}
