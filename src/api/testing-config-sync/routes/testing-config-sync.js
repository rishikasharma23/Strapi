'use strict';

/**
 * testing-config-sync router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-config-sync.testing-config-sync');
