'use strict';

/**
 * testing-config-sync-with-db service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-config-sync-with-db.testing-config-sync-with-db');
