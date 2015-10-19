//----------------------------------------------------------------------------------------------------------------------
/// Main Client-side Application
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

import Vue from '../vendor/vue/dist/vue'
import testSvc from './components/test/test'
import './components/test_tag/test'

//----------------------------------------------------------------------------------------------------------------------

var app = new Vue({
    el: "#main-app",
    data: {
        msg: 'Hello'
    },
    computed: {
        fullMsg: function()
        {
            var now = Date.now();
            return `${ this.msg } World (${now})`;
        }
    }
});

//----------------------------------------------------------------------------------------------------------------------

console.log('Application Started.');

//----------------------------------------------------------------------------------------------------------------------
