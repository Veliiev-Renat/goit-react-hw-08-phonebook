"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{941:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(885),r={text:"Contacts_text__Cijp1",button:"Contacts_button__vUlqW",item:"Contacts_item__WTDnh"},s=n(434),c=n(791),l=n(634),u=function(e){return e.contact.contacts.items},i=n(217),o=n(184);function m(e){var t=e.click,n=(0,s.I0)(),a=(0,s.v9)(u),m=(0,s.v9)(i.rK);(0,c.useEffect)((function(){m&&n((0,l.yF)())}),[n,m]);var d=(0,s.v9)((function(e){return e.contact.filter})),f=d?a.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})):a;return(0,o.jsx)("ul",{className:r.list,children:f.map((function(e){return(0,o.jsxs)("li",{className:r.item,children:[(0,o.jsxs)("p",{className:r.text,children:[e.name," : ",e.number]}),(0,o.jsx)("button",{type:"button",onClick:function(){n((0,l.GK)(e.id))},className:r.button,children:"delete "}),(0,o.jsx)("button",{type:"button",onClick:t,className:r.button,id:e.id,children:"Up Date"})]},e.id)}))})}var d={label:"Filter_label__vEd1E",input:"Filter_input__N7T3z"},f=n(557);function p(){var e=(0,s.I0)();return(0,o.jsxs)("form",{className:d.form,onSubmit:function(e){e.preventDefault()},children:[(0,o.jsx)("h2",{children:"Contacts"}),(0,o.jsxs)("label",{className:d.label,children:["Find contact by name",(0,o.jsx)("input",{type:"text",onChange:function(t){e((0,f.xO)(t.target.value))},className:d.input,name:"filter"})]})]})}var _="Form_form__e1yzW",b="Form_label__8nx+5",x="Form_input__FTtTw",h="Form_button__8NOIT";function v(){var e=(0,s.I0)(),t=(0,s.v9)(u);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Phonebook"}),(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements;t.find((function(e){return e.name===a.name.value}))?alert("".concat(a.name.value," is alredy in you contacts")):(e((0,l.uK)({name:a.name.value,number:a.number.value})),n.target.reset())},className:_,children:[(0,o.jsxs)("label",{className:b,children:["Name",(0,o.jsx)("input",{className:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:b,children:["Number",(0,o.jsx)("input",{className:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})]})}var j="ModalUpdate_overlay__E9uwr",N="ModalUpdate_modal__Cr+Go",C="ModalUpdate_button__YZ49m",y=function(e){var t=e.close,n=e.Click,a=e.id,r=(0,s.I0)();return(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]),(0,o.jsx)("div",{onClick:n,className:j,children:(0,o.jsx)("div",{className:N,children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.user.value,s=e.currentTarget.elements.number.value;console.log(a),r((0,l.mP)({contactId:a,upDate:{name:n,number:s}})),t()},children:[(0,o.jsx)("input",{type:"text",name:"user"}),(0,o.jsx)("input",{type:"text",name:"number"}),(0,o.jsx)("button",{className:C,children:"Update Contact"})]})})})};function k(){var e=(0,c.useState)(!1),t=(0,a.Z)(e,2),n=t[0],r=t[1],s=(0,c.useState)(null),l=(0,a.Z)(s,2),u=l[0],i=l[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{}),(0,o.jsx)(p,{}),(0,o.jsx)(m,{click:function(e){r(!0),i(e.target.id)}}),n&&(0,o.jsx)(y,{close:function(){r(!1)},Click:function(e){e.currentTarget===e.target&&r(!1)},id:u})]})}}}]);
//# sourceMappingURL=941.478341a0.chunk.js.map