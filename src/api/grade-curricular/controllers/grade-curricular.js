'use strict';

/**
 * grade-curricular controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');
const { contentAPI } = sanitize;

module.exports = createCoreController('api::grade-curricular.grade-curricular');

module.exports = {
    async findByAttribute(ctx) {
        const { attribute, value } = ctx.params;
        const model = strapi.getModel('api::grade-curricular.grade-curricular');
      
        const entity = await strapi.db.query('api::grade-curricular.grade-curricular').findMany({ where: { [attribute]: value } });
      
        if (!entity) {
            return ctx.notFound('Entity not found');
        }
  
        const sanitizedEntity = await contentAPI.output(entity, model);
        return ctx.send(sanitizedEntity);
    },
  
    async findAll(ctx) {
        const model = strapi.getModel('api::grade-curricular.grade-curricular');
        const entities = await strapi.db.query('api::grade-curricular.grade-curricular').findMany();
  
        const sanitizedEntities = await contentAPI.output(entities, model);
  
        return ctx.send(sanitizedEntities);
    },
};
