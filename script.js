const fn = document.getElementById("i1")
const sn = document.getElementById("i2")
const resultado = document.getElementById("btn")
const mais = document.getElementById("mais")
const menos =document.getElementById("menos")
const multi = document.getElementById("multi")
const divi = document.getElementById("divi")
const sel = document.getElementById("sel")
const resultados1 = document.getElementById("result")
const apagar = document.getElementsByTagName("h1")
 const meo = document.getElementsByClassName("meu")
 const cp = document.getElementById("p2")

resultado.addEventListener("click", manager)
resultado.addEventListener("click", aa)


function manager() {
    if(sel.children[0].selected === true){somar()}
    else if (sel.children[1].selected === true){subtrair()}
    else if (sel.children[2].selected === true){multiplicar()}
    else if (sel.children[3].selected === true){dividir()}
}

function h1create () {
    const text = document.createElement("p")
    text.innerText = "↓ Your Current Answer ↓"
    text.classList.add("animate__backInDown")
    cp.appendChild(text)
   const h1c = document.createElement("h1")
   h1c.innerText = result
   h1c.classList.add("meu")
   h1c.classList.add("animate__backInDown")
   resultados1.appendChild(h1c)}

function aa () {
    if(apagar.length === 1) {h1create()}
    else {meo[0].innerText = result}
}


function somar () {
    result = Number(fn.value) + Number(sn.value)
    console.log(result)
    fn.value=""
    sn.value=""
  
}

function subtrair () {
    result = Number(fn.value) - Number(sn.value)
    console.log(result)
    fn.value=""
    sn.value=""
}

function multiplicar () {
    result = Number(fn.value) * Number(sn.value)
    console.log(result)
    fn.value=""
    sn.value=""
}

function dividir () {
    result = Number(fn.value) / Number(sn.value)
    console.log(result)
    fn.value=""
    sn.value=""
}