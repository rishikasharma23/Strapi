'use strict';

/**
 * testing-without-db service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-without-db.testing-without-db');
