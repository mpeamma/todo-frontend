(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(57)},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(22),o=a.n(l),r=(a(37),a(11)),c=a(23),s=a(24),u=a(29),m=a(25),d=a(8),h=a(30),p=a(9),v=a.n(p),f="http://localhost/",w=a(59),E=a(60),b=a(27),g=a(62),y=a(63),D=a(61),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={heartbeat:"Loading",items:[],newTitle:"",newDescription:""},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.handleDelete=e.handleDelete.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get(f+"api/todos").then(function(t){var a=t.data;e.setState({items:a.todos})})}},{key:"handleDelete",value:function(e){var t=this;v.a.delete(f+"api/todos/"+e).then(function(){t.setState({items:Object(r.a)(t.state.items.filter(function(t){return t.id!==e}))})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v.a.post(f+"api/todos",{title:this.state.newTitle,description:this.state.newDescription}).then(function(e){var a=e.data;t.setState({items:[].concat(Object(r.a)(t.state.items),[a.todo])})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(w.a,{style:{marginLeft:20}},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("h1",null,"Sample To Do App"))),i.a.createElement(E.a,{style:{marginTop:10}},this.state.items.map(function(t,a){return i.a.createElement(b.a,{xs:4,key:a},i.a.createElement(g.a,null,i.a.createElement(g.a.Body,null,i.a.createElement(g.a.Title,null,t.title,i.a.createElement(y.a,{variant:"danger",style:{float:"right"},size:"sm",onClick:function(){return e.handleDelete(t.id)}},"x")),i.a.createElement(g.a.Text,null,t.description))))})),i.a.createElement(D.a,{onSubmit:this.handleSubmit,style:{margin:10}},i.a.createElement(D.a.Row,null,i.a.createElement(D.a.Group,{as:b.a,md:"4",controlId:"validationCustom01"},i.a.createElement(D.a.Control,{required:!0,type:"text",placeholder:"Title",value:this.state.newTitle,onChange:function(t){return e.setState({newTitle:t.target.value})}})),i.a.createElement(D.a.Group,{as:b.a,md:"4",controlId:"validationCustom01"},i.a.createElement(D.a.Control,{required:!0,type:"text",placeholder:"Description",value:this.state.newDescription,onChange:function(t){return e.setState({newDescription:t.target.value})}})),i.a.createElement(y.a,{type:"submit"},"Add new"))))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.413d17f2.chunk.js.map