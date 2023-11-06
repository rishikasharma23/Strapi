'use strict';

/**
 * read-aloud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::read-aloud.read-aloud');
