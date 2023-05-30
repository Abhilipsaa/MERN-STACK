const button1 = document.getElementById("show");
const button2 = document.getElementById("notshow");
const table = document.querySelector("tbody");

const button3 = document.getElementById("display");
const button4 = document.getElementById("hide");
const div = document.getElementById("img");

button1.addEventListener("click", () => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = "OID-1";
    const td2 = document.createElement("td");
    td2.innerText = "Samsung M52";
    const td3 = document.createElement("td");
    td3.innerText = "Rs. 29,999";
    const td4 = document.createElement("td");
    td4.innerText = "1";
    tr.append(td1, td2, td3, td4);
    table.append(tr);
    // div1.append(table);
});

button2.addEventListener("click", () => {
    window.location.reload();
});

button3.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m52-5g-1.jpg";
    div.append(img);
});

button4.addEventListener("click", () => {
    div.removeChild(div.children[0]);
});