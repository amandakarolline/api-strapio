'use strict';

/**
 * matricula router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::matricula.matricula');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/matriculas",
            "handler": "matricula.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/matriculas/:attribute/:value",
            "handler": "matricula.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}
