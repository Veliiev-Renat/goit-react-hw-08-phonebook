"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{941:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(885),s="Contacts_text__Cijp1",r="Contacts_button__vUlqW",l="Contacts_item__WTDnh",c="Contacts_box__L7FJb",i="Contacts_list__R3QeP",o=n(434),u=n(791),m=n(634),d=function(e){return e.contact.contacts.items},_=n(217),p=n(184);function f(e){var t=e.click,n=(0,o.I0)(),a=(0,o.v9)(d),f=(0,o.v9)(_.rK);(0,u.useEffect)((function(){f&&n((0,m.yF)())}),[n,f]);var x=(0,o.v9)((function(e){return e.contact.filter})),b=x?a.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})):a;return(0,p.jsx)("ul",{className:i,children:b.map((function(e){return(0,p.jsxs)("li",{className:l,children:[(0,p.jsxs)("p",{className:s,children:[e.name," : ",e.number]}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("button",{type:"button",onClick:function(){n((0,m.GK)(e.id))},className:r,children:"delete "}),(0,p.jsx)("button",{type:"button",onClick:t,className:r,id:e.id,children:"Up Date"})]})]},e.id)}))})}var x={label:"Filter_label__vEd1E",input:"Filter_input__N7T3z",text:"Filter_text__uqQRu"},b=n(557);function h(){var e=(0,o.I0)();return(0,p.jsxs)("form",{className:x.form,onSubmit:function(e){e.preventDefault()},children:[(0,p.jsx)("p",{className:x.text,children:"Contacts"}),(0,p.jsxs)("label",{className:x.label,children:["Find contact by name",(0,p.jsx)("input",{type:"text",onChange:function(t){e((0,b.xO)(t.target.value))},className:x.input,name:"filter"})]})]})}var v="Form_form__e1yzW",N="Form_label__8nx+5",j="Form_input__FTtTw",C="Form_button__8NOIT",y="Form_text__c5Sr+";function k(){var e=(0,o.I0)(),t=(0,o.v9)(d);return(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements;t.find((function(e){return e.name===a.name.value}))?alert("".concat(a.name.value," is alredy in you contacts")):(e((0,m.uK)({name:a.name.value,number:a.number.value})),n.target.reset())},className:v,children:[(0,p.jsx)("p",{className:y,children:"Phonebook"}),(0,p.jsxs)("label",{className:N,children:["Name",(0,p.jsx)("input",{className:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{className:N,children:["Number",(0,p.jsx)("input",{className:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})}var w="ModalUpdate_overlay__E9uwr",g="ModalUpdate_modal__Cr+Go",F="ModalUpdate_button__YZ49m",T="ModalUpdate_form__SbrLO",U="ModalUpdate_label__JaNtA",E="ModalUpdate_text__jhoPf",A="ModalUpdate_input__1m8B5",D=function(e){var t=e.close,n=e.Click,a=e.id,s=(0,o.I0)();return(0,u.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]),(0,p.jsx)("div",{onClick:n,className:w,children:(0,p.jsx)("div",{className:g,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.user.value,r=e.currentTarget.elements.number.value;console.log(a),s((0,m.mP)({contactId:a,upDate:{name:n,number:r}})),t()},className:T,children:[(0,p.jsx)("p",{className:E,children:"EDIT CONTACT"}),(0,p.jsxs)("label",{className:U,children:["Name",(0,p.jsx)("input",{type:"text",name:"user",className:A})]}),(0,p.jsxs)("label",{className:U,children:["Number",(0,p.jsx)("input",{type:"text",name:"number",className:A})]}),(0,p.jsx)("button",{className:F,children:"Update Contact"})]})})})};function I(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],r=(0,u.useState)(null),l=(0,a.Z)(r,2),c=l[0],i=l[1];return(0,p.jsxs)("div",{style:{minHeight:"calc(100vh - 50px)",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,p.jsx)(k,{}),(0,p.jsx)(h,{}),(0,p.jsx)(f,{click:function(e){s(!0),i(e.target.id)}}),n&&(0,p.jsx)(D,{close:function(){s(!1)},Click:function(e){e.currentTarget===e.target&&s(!1)},id:c})]})}}}]);
//# sourceMappingURL=941.918e70cd.chunk.js.map