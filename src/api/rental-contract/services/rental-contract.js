'use strict';

/**
 * rental-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-contract.rental-contract');
