//----------------------------------------------------------------------------------------------------------------------
/// A simple template loader for Vue components
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

var fs = require('fs');
var path = require('path');

var Vue = require('../vendor/vue/dist/vue');

/*
import path from 'path'
import fs from 'fs'

import Vue from '../vendor/vue/dist/vue'
*/

//----------------------------------------------------------------------------------------------------------------------

var rootPath = path.resolve(__dirname, '..', 'dist');

function loadAsync(componentName, vueOpts)
{
    return Vue.component(componentName, function(resolve, reject)
    {
        if(vueOpts.templateUrl)
        {
            fs.readFile(path.join(rootPath, vueOpts.templateUrl), 'utf8', function(error, html)
            {
                if(error)
                {
                    reject(error);
                }
                else
                {
                    delete vueOpts.templateUrl;
                    vueOpts.template = html;

                    resolve(vueOpts);
                } // end if
            });
        }
        else
        {
            resolve(vueOpts);
        } // end if
    });
} // end loadAsync

//----------------------------------------------------------------------------------------------------------------------

//export default loadAsync;
module.exports = { loadAsync: loadAsync };

//----------------------------------------------------------------------------------------------------------------------
