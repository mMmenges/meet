(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(20),c=n.n(s),i=(n(27),n(3)),u=n.n(i),l=n(8),d=n(4),h=n(5),p=n(7),m=n(6),f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){e.setState({showSuggestions:!0});var n=t.target.value;console.log(e.props.locations,"locations=====");var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"City"}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.onDetailsButtonClicked=function(){e.setState((function(e){return{showDetails:!e.showDetails}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("p",{className:"time",children:[e.start.dateTime," - ",e.end.dateTime]}),Object(a.jsx)("p",{className:"summary",children:e.summary}),this.state.showDetails&&Object(a.jsxs)("div",{className:"extra",children:[Object(a.jsx)("p",{className:"location",children:e.location}),Object(a.jsx)("p",{className:"description",children:e.description}),Object(a.jsx)("a",{className:"htmlLink",href:e.htmlLink,children:"Event Link"})]}),Object(a.jsx)("button",{className:"details-btn",onClick:this.onDetailsButtonClicked,children:"Details"})]})}}]),n}(r.Component),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return console.log("events=========",this.props),Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(v,{event:e})},e.id)}))})}}]),n}(r.Component),g=(n(29),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({number:n}),e.props.updateEvents(null,null,n)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"numberOfEvents",children:Object(a.jsx)("input",{type:"text",id:"numberOfEvents input",value:this.state.number,onChange:this.handleInputChanged})})}}]),n}(r.Component)),j=n(21),w=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in Berlin? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/London"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/London"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/London"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],y=n(11),k=n.n(y),O=n(9),x=n.n(O),S=function(e){var t=e.map((function(e){return e.location}));return Object(j.a)(new Set(t))},C=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://vl3kg6ucm7.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&T(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vl3kg6ucm7.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return x.a.done(),e.abrupt("return",w);case 4:return e.next=6,C();case 6:if(!(t=e.sent)){e.next=16;break}return I(),n="https://vl3kg6ucm7.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,k.a.get(n);case 12:return(a=e.sent).data&&(r=S(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),x.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=(n(48),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?E().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t,locations:n.locations})})):E().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,E().then((function(e){t.mounted&&t.setState({events:e,locations:S(e)})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(a.jsx)(g,{updateEvents:this.updateEvents}),Object(a.jsx)(b,{events:this.state.events})]})}}]),n}(r.Component)),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),L()}},[[49,1,2]]]);
//# sourceMappingURL=main.ec1eb630.chunk.js.map