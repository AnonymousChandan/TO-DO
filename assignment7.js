function Add() {
    let inputs = document.createElement("p")
    let task = document.getElementById("ch").value
    inputs.innerHTML = task
    if (task == " ") {
        alert("Please Enter Task")
    }
    inputs.setAttribute("key", count)
    count++
    document.querySelector("#chandan").appendChild(inputs)
    inputs.addEventListener("click", (e) => {
        document.querySelector("#chandan").removeChild(e.target)
    })
}
let count = 0