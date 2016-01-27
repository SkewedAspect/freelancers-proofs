//----------------------------------------------------------------------------------------------------------------------
/// This file bootstraps babel.js and lets us use es6 modules in every other file.
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

// Bootstrap Babel
require('babel-register');

// Main Electron Application
require('./main');

//----------------------------------------------------------------------------------------------------------------------
