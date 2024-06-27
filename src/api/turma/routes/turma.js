'use strict';

/**
 * turma router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::turma.turma');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/turmas",
            "handler": "turma.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/turmas/:attribute/:value",
            "handler": "turma.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}