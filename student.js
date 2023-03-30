let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}



let studentName = document.querySelector('.name-student')
let studenName = document.querySelector('.name-studen')
let local = localStorage.getItem("Name")
studentName.innerHTML = local
studenName.innerHTML = local + "✨"
let show_msg = document.querySelector('.sege')
let dashboard = document.getElementById('dash')
let school_page = document.getElementById('sch')
let set = document.querySelector('.set')
let set2 = document.querySelector('.set2')
dashboard.addEventListener('click', function () {
    set2.style.display = "none"
    show_msg.style.display = "none"
    set.style.display = "block"
})
school_page.addEventListener('click', function () {
    show_msg.style.display = "none"
    set.style.display = "none"
    set2.style.display = "block"
})


let contact = document.querySelector('.each')

let chatBox = document.querySelector('.chatBox')
let btnsend = document.querySelector('.btnInp')
let input = document.querySelector('.sendInp')

let arry = []
let mon = " "
function addem() {
    if (input.value === "") {
        return
    } else {
        chatBox.innerHTML = ""
        arry.push(input.value)
        console.log(arry);
        arry.forEach(function (items, index) {
            chatBox.innerHTML += `
                <div class="gud">
                      ${items}
                    <button onclick="remove(${index})">Del</button></div>
                </div>
        `
        })
        input.value = ""
    }
}
function remove(index) {
    chatBox.textContent = ""
    arry.splice(index, 1)
    arry.forEach(function (items, index) {
        chatBox.innerHTML += `
            <div class="gud">
                ${items}
                <button onclick="remove(${index})">Del</button></div>
            </div>
        `
    })
}


function sharp(){
    document.querySelector('.noneModal').style.display="block"
}
function back(){
    document.querySelector('.noneModal').style.display="none"
}

function msg(){
    set.style.display = "none"
    set2.style.display = "none"
    show_msg.style.display="block"
}
function enrol(){
    document.querySelector(".star").style.display="block"
}