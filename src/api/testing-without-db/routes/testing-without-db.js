'use strict';

/**
 * testing-without-db router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-without-db.testing-without-db');
