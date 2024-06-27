'use strict';

/**
 * docente router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::docente.docente');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/docentes",
            "handler": "docente.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/docentes/:attribute/:value",
            "handler": "docente.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}