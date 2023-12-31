import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function r(){return`
    <form class="feedback-form" autocomplete="off">
      <label>
        Email
        <input type="email" name="email" autofocus />
      </label>
      <label>
        Message
        <textarea name="message" rows="8"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  `}const m=document.getElementById("form-container");m.innerHTML=r();const l=document.querySelector(".feedback-form"),n="feedback-form-state";l.addEventListener("input",s);l.addEventListener("submit",i);let e=JSON.parse(localStorage.getItem(n))||{};const{email:t,message:a}=l.elements;u();function s(o){e={email:t.value,message:a.value},localStorage.setItem(n,JSON.stringify(e))}function u(){e&&(t.value=e.email||"",a.value=e.message||"")}function i(o){if(o.preventDefault(),console.log({email:t.value,message:a.value}),t.value===""||a.value==="")return alert("Please fill in all the fields!");localStorage.removeItem(n),o.currentTarget.reset(),e={}}
//# sourceMappingURL=commonHelpers2.js.map
