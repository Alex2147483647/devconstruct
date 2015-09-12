(function (window, angular, undefined) {
    'use strict';

    var urlBase = "http://devconstruct.com:3000/api";
    var authHeader = 'authorization';

    /**
     * @ngdoc overview
     * @name lbServices
     * @module
     * @description
     *
     * The `lbServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("lbServices", ['ngResource']);

    /**
     * @ngdoc object
     * @name lbServices.Categories
     * @header lbServices.Categories
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Categories` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Categories",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/categories/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#create
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/categories",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#createMany
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/categories",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#upsert
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/categories",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#exists
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/categories/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#findById
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/categories/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#find
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/categories",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#findOne
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/categories/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#updateAll
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/categories/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#deleteById
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/categories/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#count
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/categories/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#prototype$updateAttributes
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/categories/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories#createChangeStream
                     * @methodOf lbServices.Categories
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/categories/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Categories#updateOrCreate
             * @methodOf lbServices.Categories
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Categories` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Categories#update
             * @methodOf lbServices.Categories
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Categories#destroyById
             * @methodOf lbServices.Categories
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Categories#removeById
             * @methodOf lbServices.Categories
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Categories#modelName
             * @propertyOf lbServices.Categories
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Categories`.
             */
            R.modelName = "Categories";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Language
     * @header lbServices.Language
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Language` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Language",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/languages/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#create
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/languages",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#createMany
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/languages",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#upsert
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/languages",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#exists
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/languages/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#findById
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/languages/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#find
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/languages",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#findOne
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/languages/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#updateAll
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/languages/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#deleteById
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/languages/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#count
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/languages/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#prototype$updateAttributes
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Language` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/languages/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Language#createChangeStream
                     * @methodOf lbServices.Language
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/languages/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Language#updateOrCreate
             * @methodOf lbServices.Language
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Language` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Language#update
             * @methodOf lbServices.Language
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Language#destroyById
             * @methodOf lbServices.Language
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Language#removeById
             * @methodOf lbServices.Language
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Language#modelName
             * @propertyOf lbServices.Language
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Language`.
             */
            R.modelName = "Language";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Orders
     * @header lbServices.Orders
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Orders` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Orders",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/orders/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#create
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/orders",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#createMany
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/orders",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#upsert
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/orders",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#exists
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/orders/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#findById
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/orders/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#find
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/orders",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#findOne
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/orders/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#updateAll
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/orders/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#deleteById
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/orders/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#count
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/orders/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#prototype$updateAttributes
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Orders` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/orders/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Orders#createChangeStream
                     * @methodOf lbServices.Orders
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/orders/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Orders#updateOrCreate
             * @methodOf lbServices.Orders
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Orders` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Orders#update
             * @methodOf lbServices.Orders
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Orders#destroyById
             * @methodOf lbServices.Orders
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Orders#removeById
             * @methodOf lbServices.Orders
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Orders#modelName
             * @propertyOf lbServices.Orders
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Orders`.
             */
            R.modelName = "Orders";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Users
     * @header lbServices.Users
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Users` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Users",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/users/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__findById__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__destroyById__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__updateById__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__get__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Queries accessTokens of users.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `filter` – `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/users/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__create__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__delete__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$__count__accessTokens
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Counts accessTokens of users.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#create
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#createMany
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#upsert
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/users",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#exists
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/users/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#findById
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/users/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#find
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/users",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#findOne
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/users/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#updateAll
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/users/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#deleteById
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/users/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#count
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/users/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#prototype$updateAttributes
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Users` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/users/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#createChangeStream
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/users/change-stream",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#login
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function (response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/users/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#logout
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Logout a user with access token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function (response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/users/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#confirm
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` – `{string}` -
                     *
                     *  - `token` – `{string}` -
                     *
                     *  - `redirect` – `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/users/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#resetPassword
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Reset password for a user with email.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/users/reset",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Users#getCurrent
                     * @methodOf lbServices.Users
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/users" + "/:id",
                        method: "GET",
                        params: {
                            id: function () {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function (response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__: true
                    }
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Users#updateOrCreate
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Users` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Users#update
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Users#destroyById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Users#removeById
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Users#getCachedCurrent
             * @methodOf lbServices.Users
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link lbServices.Users#login} or
             * {@link lbServices.Users#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A Users instance.
             */
            R.getCachedCurrent = function () {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name lbServices.Users#isAuthenticated
             * @methodOf lbServices.Users
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function () {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name lbServices.Users#getCurrentId
             * @methodOf lbServices.Users
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function () {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name lbServices.Users#modelName
             * @propertyOf lbServices.Users
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Users`.
             */
            R.modelName = "Users";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Categories_developers
     * @header lbServices.Categories_developers
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Categories_developers` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Categories_developers",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/categories_developers/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#create
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/categories_developers",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#createMany
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/categories_developers",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#upsert
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/categories_developers",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#exists
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/categories_developers/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#findById
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/categories_developers/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#find
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/categories_developers",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#findOne
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/categories_developers/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#updateAll
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/categories_developers/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#deleteById
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/categories_developers/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#count
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/categories_developers/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#prototype$updateAttributes
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Categories_developers` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/categories_developers/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Categories_developers#createChangeStream
                     * @methodOf lbServices.Categories_developers
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/categories_developers/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Categories_developers#updateOrCreate
             * @methodOf lbServices.Categories_developers
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Categories_developers` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Categories_developers#update
             * @methodOf lbServices.Categories_developers
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Categories_developers#destroyById
             * @methodOf lbServices.Categories_developers
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Categories_developers#removeById
             * @methodOf lbServices.Categories_developers
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Categories_developers#modelName
             * @propertyOf lbServices.Categories_developers
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Categories_developers`.
             */
            R.modelName = "Categories_developers";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Products
     * @header lbServices.Products
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Products` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Products",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/products/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#create
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/products",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#createMany
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/products",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#upsert
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/products",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#exists
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/products/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#findById
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/products/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#find
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/products",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#findOne
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/products/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#updateAll
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/products/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#deleteById
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/products/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#count
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/products/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#prototype$updateAttributes
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Products` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/products/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Products#createChangeStream
                     * @methodOf lbServices.Products
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/products/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Products#updateOrCreate
             * @methodOf lbServices.Products
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Products` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Products#update
             * @methodOf lbServices.Products
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Products#destroyById
             * @methodOf lbServices.Products
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Products#removeById
             * @methodOf lbServices.Products
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Products#modelName
             * @propertyOf lbServices.Products
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Products`.
             */
            R.modelName = "Products";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Countries
     * @header lbServices.Countries
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Countries` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Countries",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/countries/:id",
                {'id': '@id'},
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#create
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/countries",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#createMany
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/countries",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#upsert
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/countries",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#exists
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/countries/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#findById
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/countries/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#find
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/countries",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#findOne
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/countries/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#updateAll
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/countries/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#deleteById
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/countries/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#count
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/countries/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#prototype$updateAttributes
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Countries` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/countries/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Countries#createChangeStream
                     * @methodOf lbServices.Countries
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/countries/change-stream",
                        method: "POST"
                    },
                }
            );


            /**
             * @ngdoc method
             * @name lbServices.Countries#updateOrCreate
             * @methodOf lbServices.Countries
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Countries` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Countries#update
             * @methodOf lbServices.Countries
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Countries#destroyById
             * @methodOf lbServices.Countries
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Countries#removeById
             * @methodOf lbServices.Countries
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Countries#modelName
             * @propertyOf lbServices.Countries
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Countries`.
             */
            R.modelName = "Countries";


            return R;
        }]);


    module
        .factory('LoopBackAuth', function () {
            var props = ['accessTokenId', 'currentUserId'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function (name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function () {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function (name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            }

            LoopBackAuth.prototype.clearUser = function () {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.clearStorage = function () {
                props.forEach(function (name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                var key = propsPrefix + name;
                if (value == null) value = '';
                storage[key] = value;
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
            function ($q, LoopBackAuth) {
                return {
                    'request': function (config) {

                        // filter out non urlBase requests
                        if (config.url.substr(0, urlBase.length) !== urlBase) {
                            return config;
                        }

                        if (LoopBackAuth.accessTokenId) {
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: {error: {status: 401}},
                                status: 401,
                                config: config,
                                headers: function () {
                                    return undefined;
                                }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    }
                }
            }])

    /**
     * @ngdoc object
     * @name lbServices.LoopBackResourceProvider
     * @header lbServices.LoopBackResourceProvider
     * @description
     * Use `LoopBackResourceProvider` to change the global configuration
     * settings used by all models. Note that the provider is available
     * to Configuration Blocks only, see
     * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
     * for more details.
     *
     * ## Example
     *
     * ```js
     * angular.module('app')
     *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
     * ```
     */
        .provider('LoopBackResource', function LoopBackResourceProvider() {
            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#setAuthHeader
             * @methodOf lbServices.LoopBackResourceProvider
             * @param {string} header The header name to use, e.g. `X-Access-Token`
             * @description
             * Configure the REST transport to use a different header for sending
             * the authentication token. It is sent in the `Authorization` header
             * by default.
             */
            this.setAuthHeader = function (header) {
                authHeader = header;
            };

            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#setUrlBase
             * @methodOf lbServices.LoopBackResourceProvider
             * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
             * @description
             * Change the URL of the REST API server. By default, the URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.setUrlBase = function (url) {
                urlBase = url;
            };

            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#getUrlBase
             * @methodOf lbServices.LoopBackResourceProvider
             * @description
             * Get the URL of the REST API server. The URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.getUrlBase = function () {
                return urlBase;
            };

            this.$get = ['$resource', function ($resource) {
                return function (url, params, actions) {
                    var resource = $resource(url, params, actions);

                    // Angular always calls POST on $save()
                    // This hack is based on
                    // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                    resource.prototype.$save = function (success, error) {
                        // Fortunately, LoopBack provides a convenient `upsert` method
                        // that exactly fits our needs.
                        var result = resource.upsert.call(this, {}, this, success, error);
                        return result.$promise || result;
                    };
                    return resource;
                };
            }];
        });

})(window, window.angular);
