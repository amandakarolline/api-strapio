'use strict';

/**
 * componente-curricular router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::componente-curricular.componente-curricular');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/componentes-curriculares",
            "handler": "componente-curricular.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/componentes-curriculares/:attribute/:value",
            "handler": "componente-curricular.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}
