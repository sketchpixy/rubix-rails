/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var l20n = __webpack_require__(1);
	window.ReactL20n = {
	  l20n: l20n,
	  Entity: l20n.Entity
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ctx = L20n.getContext();

	var Entities = {
	  ready: false,
	  entities: {},
	  registerEntity: function(entity) {
	    if(Entities.hasOwnProperty(entity)) {
	      if(!Entities.ready) return;
	      ReactBootstrap.Dispatcher.emit('ctx:'+entity);
	      return;
	    }
	    ctx.localize([entity], function(l) {
	      ReactBootstrap.Dispatcher.emit('ctx:'+entity);
	    });
	    Entities[entity] = 1;
	  }
	};

	var initializeLocales = function(appname, locales, rpath) {
	  rpath = rpath || '';
	  ctx.ready(function() {
	    Entities.ready = true;
	    for(var i in Entities.entities) {
	      Entities.registerEntity(Entities.entities[i]);
	    }
	    ReactBootstrap.Dispatcher.emit('ctx:ready');
	  });
	  ctx.linkResource(function(locale) {
	    return rpath + '/locales/' + appname + '/' + locale + '/strings.l20n';
	  });
	  ctx.registerLocales(locales.default, locales.locales);
	  ctx.requestLocales(locales.default);
	};

	var Entity = React.createClass({displayName: 'Entity',
	  propTypes: {
	    data: React.PropTypes.object,
	    entity: React.PropTypes.string,
	    dangerouslySetInnerHTML: React.PropTypes.bool,
	    componentClass: function(props, propName, componentName) {
	      return React.isValidClass(props[propName]);
	    }
	  },
	  getDefaultProps: function() {
	    return {
	      componentClass: React.DOM.span
	    };
	  },
	  getInitialState: function() {
	    return {
	      entity: ''
	    };
	  },
	  handler: function() {
	    this.setState({
	      entity: ctx.getSync(this.props.entity, this.props.data)
	    });
	  },
	  componentDidMount: function() {
	    ReactBootstrap.Dispatcher.on('ctx:'+this.props.entity, this.handler);
	    Entities.registerEntity(this.props.entity);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('ctx:'+this.props.entity, this.handler);
	  },
	  render: function() {
	    var componentClass = this.props.componentClass;
	    if(componentClass === React.DOM.input) {
	      return this.transferPropsTo(
	        componentClass({entity: null, data: null, value: this.state.entity})
	      );
	    }
	    if(this.props.dangerouslySetInnerHTML) {
	      return this.transferPropsTo(
	        componentClass({entity: null, data: null, dangerouslySetInnerHTML: {__html: this.state.entity}})
	      );
	    }
	    return this.transferPropsTo(
	      componentClass({entity: null, data: null}, this.state.entity)
	    );
	  }
	});

	module.exports = {
	  ctx: ctx,
	  initializeLocales: function(appname, locales, rpath) {
	    initializeLocales(appname, locales, rpath);
	  },
	  ready: function() {
	    if(Entities.ready) {
	      ReactBootstrap.Dispatcher.emit('ctx:ready');
	      return;
	    }
	  },
	  changeLocale: function(locale) {
	    ctx.requestLocales(locale);
	  },
	  Entity: Entity
	};


/***/ }
/******/ ])