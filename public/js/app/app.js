/*! rubix - v1.0.0 - 2014-11-01 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
(function() {
/*DO NOT MODIFY*/

/*RROUTER*/
var _RTR_=window.RRouter || {};
var Routes =_RTR_.Routes,
    Route=_RTR_.Route,
    Link=_RTR_.Link,
    RoutingContextMixin=_RTR_.RoutingContextMixin;

/*REACTBOOTSTRAP+EXTRAS*/
var _RB32_=window.ReactBootstrap || {};
var Container=_RB32_.Container,
    Grid=_RB32_.Grid,
    Row=_RB32_.Row,
    Col=_RB32_.Col,
    ColMixin=_RB32_.ColMixin,
    Lead=_RB32_.Lead,
    Table=_RB32_.Table,
    Form=_RB32_.Form,
    FormGroup=_RB32_.FormGroup,
    Label=_RB32_.Label,
    Input=_RB32_.Input,
    InputGroup=_RB32_.InputGroup,
    InputGroupAddon=_RB32_.InputGroupAddon,
    InputGroupButton=_RB32_.InputGroupButton,
    Checkbox=_RB32_.Checkbox,
    Radio=_RB32_.Radio,
    Button=_RB32_.Button,
    Textarea=_RB32_.Textarea,
    Select=_RB32_.Select,
    Static=_RB32_.Static,
    Icon=_RB32_.Icon,
    HelpBlock=_RB32_.HelpBlock,
    Img=_RB32_.Img,
    Caret=_RB32_.Caret,
    Dropdown=_RB32_.Dropdown,
    DropdownButton=_RB32_.DropdownButton,
    Menu=_RB32_.Menu,
    MenuItem=_RB32_.MenuItem,
    ButtonGroup=_RB32_.ButtonGroup,
    ButtonToolbar=_RB32_.ButtonToolbar,
    Tab=_RB32_.Tab,
    TabPane=_RB32_.TabPane,
    TabList=_RB32_.TabList,
    TabContent=_RB32_.TabContent,
    TabContainer=_RB32_.TabContainer,
    Nav=_RB32_.Nav,
    NavBar=_RB32_.NavBar,
    NavText=_RB32_.NavText,
    NavLink=_RB32_.NavLink,
    NavItem=_RB32_.NavItem,
    NavForm=_RB32_.NavForm,
    NavBrand=_RB32_.NavBrand,
    NavHeader=_RB32_.NavHeader,
    NavToggle=_RB32_.NavToggle,
    NavButton=_RB32_.NavButton,
    NavContent=_RB32_.NavContent,
    BLink=_RB32_.BLink,
    Breadcrumb=_RB32_.Breadcrumb,
    Page=_RB32_.Page,
    Pager=_RB32_.Pager,
    Pagination=_RB32_.Pagination,
    Badge=_RB32_.Badge,
    BLabel=_RB32_.BLabel,
    Jumbotron=_RB32_.Jumbotron,
    Progress=_RB32_.Progress,
    ProgressGroup=_RB32_.ProgressGroup,
    Media=_RB32_.Media,
    MediaDiv=_RB32_.MediaDiv,
    MediaBody=_RB32_.MediaBody,
    MediaList=_RB32_.MediaList,
    MediaObject=_RB32_.MediaObject,
    MediaHeading=_RB32_.MediaHeading,
    ListGroup=_RB32_.ListGroup,
    ListGroupItem=_RB32_.ListGroupItem,
    ListGroupItemText=_RB32_.ListGroupItemText,
    ListGroupItemHeading=_RB32_.ListGroupItemHeading,
    Well=_RB32_.Well,
    Modal=_RB32_.Modal,
    ModalBody=_RB32_.ModalBody,
    ModalHeader=_RB32_.ModalHeader,
    ModalFooter=_RB32_.ModalFooter,
    ModalManager=_RB32_.ModalManager,
    Panel=_RB32_.Panel,
    PanelBody=_RB32_.PanelBody,
    PanelHeader=_RB32_.PanelHeader,
    PanelFooter=_RB32_.PanelFooter,
    PanelLeft=_RB32_.PanelLeft,
    PanelRight=_RB32_.PanelRight,
    PanelContainer=_RB32_.PanelContainer,
    LoremIpsum=_RB32_.LoremIpsum,
    TimelineView=_RB32_.TimelineView,
    TimelineItem=_RB32_.TimelineItem,
    TimelineHeader=_RB32_.TimelineHeader,
    TimelineIcon=_RB32_.TimelineIcon,
    TimelineAvatar=_RB32_.TimelineAvatar,
    TimelineTitle=_RB32_.TimelineTitle,
    TimelineBody=_RB32_.TimelineBody,
    Accordian=_RB32_.Accordian,
    AccordianPane=_RB32_.AccordianPane,
    AccordianTitle=_RB32_.AccordianTitle,
    AccordianContent=_RB32_.AccordianContent,
    IonTabContainer=_RB32_.IonTabContainer,
    IonTabHead=_RB32_.IonTabHead,
    IonTabBody=_RB32_.IonTabBody,
    IonTab=_RB32_.IonTab,
    IonTabItem=_RB32_.IonTabItem,
    PricingTable=_RB32_.PricingTable,
    PricingFeature=_RB32_.PricingFeature,
    PricingTableBody=_RB32_.PricingTableBody,
    PricingTablePrice=_RB32_.PricingTablePrice,
    PricingTableHeader=_RB32_.PricingTableHeader,
    PricingTableContainer=_RB32_.PricingTableContainer,
    PricingButtonContainer=_RB32_.PricingButtonContainer,
    Alert=_RB32_.Alert,
    AlertLink=_RB32_.AlertLink,
    Tag=_RB32_.Tag,
    Sidebar=_RB32_.Sidebar,
    SidebarNav=_RB32_.SidebarNav,
    SidebarBtn=_RB32_.SidebarBtn,
    SidebarMixin=_RB32_.SidebarMixin,
    SidebarNavItem=_RB32_.SidebarNavItem,
    SidebarControls=_RB32_.SidebarControls,
    SidebarControlBtn=_RB32_.SidebarControlBtn,
    TransitionEndEvent='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

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

	'use strict';

	/* Initialize Locales */
	l20n.initializeLocales('app', {
	  'locales': ['en-US'],
	  'default': 'en-US'
	});

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	/* APP PAGES */
	var blank = __webpack_require__(1);

	/* ROUTES */
	var routes = (
	  Routes(null, 
	    Route({name: "root", path: "/", view: blank})
	  )
	);

	Pace.once('hide', function() {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	var InitializeRouter = function(View) {
	  // cleanup
	  if(window.Rubix) window.Rubix.Cleanup();
	  Pace.restart();
	  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	     'page': window.location.pathname + window.location.search  + window.location.hash
	    });
	  }

	  React.renderComponent(View(null), document.getElementById('app-container'), function() {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function() {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(2);
	var Sidebar = __webpack_require__(3);
	var Footer = __webpack_require__(4);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody({className: "text-center"}, 
	                    React.DOM.p(null, "BLANK PAGE")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var Page = React.createClass({displayName: 'Page',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = React.addons.classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Page;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Brand = React.createClass({displayName: 'Brand',
	  render: function() {
	    return this.transferPropsTo(
	      NavHeader(null, 
	        NavBrand({tabIndex: "-1"}, 
	          React.DOM.img({src: "/imgs/logo.png", alt: "rubix", width: "111", height: "28"})
	        )
	      )
	    );
	  }
	});

	var Navigation = React.createClass({displayName: 'Navigation',
	  render: function() {
	    return this.transferPropsTo(
	      NavContent({className: "pull-right"}, 
	        Nav(null, 
	          NavItem({className: "logout", href: "#"}, 
	            Icon({bundle: "fontello", glyph: "off-1"})
	          )
	        )
	      )
	    );
	  }  
	});

	var Header = React.createClass({displayName: 'Header',
	  render: function() {
	    return this.transferPropsTo(
	      Grid({id: "navbar"}, 
	        Row(null, 
	          Col({xs: 12}, 
	            NavBar({fixedTop: true, id: "rubix-nav-header"}, 
	              Container({fluid: true}, 
	                Row(null, 
	                  Col({xs: 3, visible: "xs"}, 
	                    SidebarBtn(null)
	                  ), 
	                  Col({xs: 6, sm: 4}, 
	                    Brand(null)
	                  ), 
	                  Col({xs: 3, sm: 8}, 
	                    Navigation(null)
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ApplicationSidebar = React.createClass({displayName: 'ApplicationSidebar',
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header"}, "PAGES"), 
	              React.DOM.div({className: "sidebar-nav-container"}, 
	                SidebarNav({style: {marginBottom: 0}}, 
	                  SidebarNavItem({glyph: "icon-fontello-gauge", name: "Blank", href: "/"}), 
	                  SidebarNavItem({glyph: "icon-feather-mail", name: React.DOM.span(null, "Menu ", BLabel({className: "bg-darkgreen45 fg-white"}, "3"))}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Inbox", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Mail", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Compose", href: "#"})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DummySidebar = React.createClass({displayName: 'DummySidebar',
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          Col({xs: 12}, 
	            React.DOM.div({className: "sidebar-header"}, "DUMMY SIDEBAR"), 
	            LoremIpsum({query: "1p"})
	          )
	        )
	      )
	    );
	  }
	});

	var SidebarSection = React.createClass({displayName: 'SidebarSection',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({id: "sidebar"}, 
	        React.DOM.div({id: "avatar"}, 
	          Grid(null, 
	            Row({className: "fg-white"}, 
	              Col({xs: 4, collapseRight: true}, 
	                React.DOM.img({src: "/imgs/avatars/avatar0.png", width: "40", height: "40"})
	              ), 
	              Col({xs: 8, collapseLeft: true, id: "avatar-col"}, 
	                React.DOM.div({style: {top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}, "Anna Sanchez"), 
	                React.DOM.div(null, 
	                  Progress({id: "demo-progress", value: 30, min: 0, max: 100, color: "#ffffff"}), 
	                  Link({href: "#"}, Icon({id: "demo-icon", bundle: "fontello", glyph: "lock-5"}))
	                )
	              )
	            )
	          )
	        ), 
	        SidebarControls(null, 
	          SidebarControlBtn({bundle: "fontello", glyph: "docs", key: 0}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "chat-1", key: 1}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "chart-pie-2", key: 2}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "th-list-2", key: 3}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "bell-5", key: 4})
	        ), 
	        React.DOM.div({id: "sidebar-container"}, 
	          Sidebar({key: 0, active: true}, 
	            ApplicationSidebar(null)
	          ), 
	          Sidebar({key: 1}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 2}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 3}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 4}, 
	            DummySidebar(null)
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Footer = React.createClass({displayName: 'Footer',
	  getInitialState: function() {
	    return {
	      version: 0
	    };
	  },
	  componentDidMount: function() {
	    this.setState({
	      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid({gutterBottom: true}), 
	        Grid({id: "footer", className: "text-center"}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, "© 2014 Your Company Name Here - v", this.state.version)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ }
/******/ ])
})();