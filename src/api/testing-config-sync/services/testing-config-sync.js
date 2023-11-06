'use strict';

/**
 * testing-config-sync service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-config-sync.testing-config-sync');
