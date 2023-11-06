'use strict';

/**
 * testing-without-db controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testing-without-db.testing-without-db');
