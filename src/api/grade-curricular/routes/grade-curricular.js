'use strict';

/**
 * grade-curricular router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::grade-curricular.grade-curricular');

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/grade-curriculares",
            "handler": "grade-curricular.findAll",
            "config": {
                "policies": [],
            }
        },
        {
            "method": "GET",
            "path": "/grade-curriculares/:attribute/:value",
            "handler": "grade-curricular.findByAttribute",
            "config": {
                "policies": [],
            }
        },
        
    ]
}