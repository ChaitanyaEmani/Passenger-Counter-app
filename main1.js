

let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");



let count = 0
function increment()
{
    count = count + 1
     countEl.textContent = count
}

function save()
{
    let countstr = count + " - "
    saveEl.textContent  += countstr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!") 