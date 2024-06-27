'use strict';

/**
 * curso router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::curso.curso');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/cursos",
            "handler": "curso.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/cursos/:attribute/:value",
            "handler": "curso.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}
