(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{38:function(e,t,a){e.exports=a(83)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(33),o=a.n(r),i=(a(43),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),p=(a(44),a(45),a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.temperature,n=e.text,r=e.icon;return c.a.createElement("div",{className:"weather-container"},c.a.createElement("div",{className:"header"},t),c.a.createElement("div",{className:"inner-container"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:"//openweathermap.org/img/wn/"+r+"@2x.png",alt:""})),c.a.createElement("div",{className:"current-weather"},a,"\xba")),c.a.createElement("div",{className:"footer"},n))}}]),t}(n.Component)),h=a(12),d=a(85),f=a(86),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isSelectLocationOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onToggleSelectLocation",value:function(){this.setState((function(e){return{isSelectLocationOpen:!e.isSelectLocationOpen}}))}},{key:"onLocationNameChange",value:function(e){this.setState({locationName:e.target.value})}},{key:"onSelectCity",value:function(){var e=this.state.locationName;this.props.eventEmitter.emit("updateWeather",e),this.setState({isSelectLocationOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state.isSelectLocationOpen;return c.a.createElement("div",{className:"top-container"},c.a.createElement("div",{className:"title"},"Weather Up"),c.a.createElement(p,this.props),c.a.createElement(h.c,null,c.a.createElement(d.a,null,(function(t){var a=t.ref;return c.a.createElement("button",{className:"btn btn-select-location",ref:a,onClick:e.onToggleSelectLocation.bind(e)},"Select location")})),c.a.createElement(f.a,{placement:"top"},(function(a){var n=a.ref,r=a.style,o=a.placement,i=a.arrowProps;return t&&c.a.createElement("div",{className:"popup-container",ref:n,style:r,"data-placement":o},c.a.createElement("div",{className:"form-container"},c.a.createElement("label",{htmlFor:"location-name"},"Location Name"),c.a.createElement("input",{type:"text",id:"location-name",placeholder:"City Name",onChange:e.onLocationNameChange.bind(e)}),c.a.createElement("button",{className:"btn btn-select-location",onClick:e.onSelectCity.bind(e)},"Select")),c.a.createElement("div",{ref:i.ref,style:i.style}))}))))}}]),t}(n.Component),E=(a(65),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.day;return c.a.createElement("div",{className:"forecastday-container"},c.a.createElement("div",{className:"date"},e.dt_txt),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",alt:""})),c.a.createElement("div",{className:"text"},e.weather[0].description,c.a.createElement("br",null),e.main.temp,"\xba"))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.forecastdays;return c.a.createElement("div",{className:"bottom-container"},c.a.createElement("div",{className:"inner-container"},e&&e.map((function(e,t){return console.log(e),c.a.createElement(E,{day:e,key:t})}))))}}]),t}(n.Component),O=a(19),y=a.n(O),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={cityName:"Barcelona",isLoading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updateWeather",value:function(){var e=this,t=this.state.cityName,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("640f42aa2e9f82c4d0016da7dc0b7605","&units=metric"),n="http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=").concat("640f42aa2e9f82c4d0016da7dc0b7605","&units=metric");y.a.get(a).then((function(e){return e.data})).then((function(t){e.setState({temperature:t.main.temp,text:t.weather[0].description,icon:t.weather[0].icon})})).catch((function(e){e&&console.error("Cannot fetch Weather Data from API, ",e)})),y.a.get(n).then((function(e){return e.data})).then((function(t){e.setState({isLoading:!1,forecastdays:t.list}),console.log(e.state)})).catch((function(e){e&&console.error("Cannot fetch Weather Data from API, ",e)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.eventEmitter;this.updateWeather(),t.on("updateWeather",(function(t){e.setState({cityName:t},(function(){return e.updateWeather()}))}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.cityName,n=e.temperature,r=e.text,o=e.icon,i=e.forecastdays;return c.a.createElement("div",{className:"app-container"},c.a.createElement("div",{className:"main-container"},t&&c.a.createElement("h3",null,"Loading Weather..."),!t&&c.a.createElement("div",{className:"top-section"},c.a.createElement(v,{location:a,temperature:n,text:r,icon:o,eventEmitter:this.props.eventEmitter})),c.a.createElement("div",{className:"top-section"},c.a.createElement(b,{forecastdays:i}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(37),j=a(36),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).eventEmitter=new j.EventEmitter,a.state={appName:"Weather Up"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.Children.map(this.props.children,(function(t){return c.a.cloneElement(t,Object(g.a)({},e.state,{eventEmitter:e.eventEmitter}))}))}}]),t}(n.Component);o.a.render(c.a.createElement(w,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3e9b81c0.chunk.js.map