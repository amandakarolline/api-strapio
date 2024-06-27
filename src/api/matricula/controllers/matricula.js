'use strict';

/**
 * matricula controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');
const { contentAPI } = sanitize;

module.exports = createCoreController('api::matricula.matricula');

module.exports = {
    async findByAttribute(ctx) {
        const { attribute, value } = ctx.params;
        const model = strapi.getModel('api::matricula.matricula');
        
        const entity = await strapi.db.query('api::matricula.matricula').findMany({ where: { [attribute]: value } });
        
        if (!entity) {
            return ctx.notFound('Entity not found');
        }
        
        const sanitizedEntity = await contentAPI.output(entity, model);
        return ctx.send(sanitizedEntity);
    },
    
    async findAll(ctx) {
        const model = strapi.getModel('api::matricula.matricula');
        const entities = await strapi.db.query('api::matricula.matricula').findMany();
        
        const sanitizedEntities = await contentAPI.output(entities, model);
        
        return ctx.send(sanitizedEntities);
    },
};
