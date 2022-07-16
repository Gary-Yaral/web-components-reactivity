class MyCounter extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        let button = document.createElement("div")
        button.style["min-width"] = "100px"
        button.style["min-height"] = "30px"
        button.innerText = "Container"
        this.shadowRoot.appendChild(button)
    }

  }
  customElements.define("my-input", MyCounter);

  let myImput = document.querySelector("my-input")
  myImput.addEventListener("input", (e) => {
    console.log(e.target.input)
  })
