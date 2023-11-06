'use strict';

/**
 * revamp-article-page controller
 */



const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::revamp-article-page.revamp-article-page');


// module.exports = createCoreController('api::revamp-article-page.revamp-article-page', ({ strapi }) =>  ({
  

    

//     // async findOne(ctx){
//     //     const {slug} = ctx.params;
//     //     const entity = await strapi.db.query('api::revamp-article-page.revamp-article-page').findOne({
//     //         where: {slug}
//     //     });

//     //     const sanitizedEntity = await this.sanitizedOutput(entity);
//     //     return this.transformResponse(sanitizedEntity);
//     // }
//     //above is genric method

//   // Method 2: Wrapping a core action (leaves core logic in place)
// //   async find(ctx) {
// //     // some custom logic here
// //     ctx.query = { ...ctx.query, local: 'en' }

// //     // Calling the default core action
// //     const { data, meta } = await super.find(ctx);

// //     // some more custom logic
// //     meta.date = Date.now()

// //     return { data, meta };
// //   },

//   // Method 3: Replacing a core action with proper sanitization
// //   async find(ctx) {
// //     const sanitizedQueryParams = await this.sanitizeQuery(ctx);
// //     const { results, pagination } = await strapi.service('api::restaurant.restaurant').find(sanitizedQueryParams);
// //     const sanitizedResults = await this.sanitizeOutput(results, ctx);

// //     return this.transformResponse(sanitizedResults, { pagination });
// //   }
// }));

