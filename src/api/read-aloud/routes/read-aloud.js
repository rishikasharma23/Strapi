'use strict';

/**
 * read-aloud router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::read-aloud.read-aloud');
