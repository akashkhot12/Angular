'use strict';

/**
 * api1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api1.api1');
