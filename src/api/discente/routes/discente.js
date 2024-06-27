'use strict';

/**
 * discente router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::discente.discente');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/discentes",
            "handler": "discente.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/discentes/:attribute/:value",
            "handler": "discente.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}
