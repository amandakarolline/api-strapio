'use strict';

/**
 * grade-componente controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');
const { contentAPI } = sanitize;

module.exports = createCoreController('api::grade-componente.grade-componente');

module.exports = {
    async findByAttribute(ctx) {
        const { attribute, value } = ctx.params;
        const model = strapi.getModel('api::grade-componente.grade-componente');

        const entity = await strapi.db.query('api::grade-componente.grade-componente').findMany({ where: { [attribute]: value } });

        if (!entity) {
            return ctx.notFound('Entity not found');
        }

        const sanitizedEntity = await contentAPI.output(entity, model);
        return ctx.send(sanitizedEntity);
    },

    async findAll(ctx) {
        const model = strapi.getModel('api::grade-componente.grade-componente');
        const entities = await strapi.db.query('api::grade-componente.grade-componente').findMany();

        const sanitizedEntities = await contentAPI.output(entities, model);

        return ctx.send(sanitizedEntities);
    },
    
    async findByTwoAttributes(ctx) {
        const { attribute1, value1, attribute2, value2 } = ctx.params;
        const model = strapi.getModel('api::grade-componente.grade-componente');

        const entity = await strapi.db.query('api::grade-componente.grade-componente').findMany({ where: { [attribute1]: value1, [attribute2]: value2 } });

        if (!entity) {
            return ctx.notFound('Entity not found');
        }

        const sanitizedEntity = await contentAPI.output(entity, model);
        return ctx.send(sanitizedEntity);
    },
};
