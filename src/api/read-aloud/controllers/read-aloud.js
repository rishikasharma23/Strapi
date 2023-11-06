'use strict';

/**
 * read-aloud controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::read-aloud.read-aloud');
