'use strict';

/**
 * subscribe-newsletter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribe-newsletter.subscribe-newsletter');
