//----------------------------------------------------------------------------------------------------------------------
/// Main Client-side Application
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

//import Vue from '../../../vendor/vue/dist/vue'
import { loadAsync } from '../../../utils/vueLoader'

//----------------------------------------------------------------------------------------------------------------------

/*
var TestClass = Vue.extend({
    name: 'TestComponent',
    template: '<h2>Welcome, <span class="friend">{{ friend }}</span>.</h2>',
    replace: false,
    data: function()
    {
        return {
            friend: 'World'
        };
    }
});

//----------------------------------------------------------------------------------------------------------------------

Vue.component('test', TestClass);
*/

loadAsync('test', {
    name: 'TestComponent',
    templateUrl: '/components/test_tag/test.html',
    replace: false,
    data: function()
    {
        return {
            friend: 'World'
        };
    }
});

//----------------------------------------------------------------------------------------------------------------------
