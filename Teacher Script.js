const lake = [
    {
        id: "#0016",
        photo: "user2.png",
        name: "Mr Samuel Henshaw",
        gender: "Male",
        department: "Software Engineering",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0017",
        photo: "user2.png",
        name: "Mrs Wumi Peters",
        gender: "Female",
        department: "Software Engineering",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0018",
        photo: "user2.png",
        name: "Miss Jennifer Ita",
        gender: "Female",
        department: "Software Engineering",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Ethiopia"
    },
    {
        id: "#0019",
        photo: "user2.png",
        name: "Miss Hannah Uwana",
        gender: "Female",
        department: "Software Engineering",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0020",
        photo: "user2.png",
        name: "Mr Daniel Adesanya",
        gender: "Male",
        department: "UI / UX Design",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0021",
        photo: "user2.png",
        name: "Mr Paul",
        gender: "Male",
        department: "UI / UX Design",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0022",
        photo: "user2.png",
        name: "Mr Timi Alamu",
        gender: "Male",
        department: "UI / UX Design",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0022",
        photo: "user2.png",
        name: "Mr Oluwaseyifunmi",
        gender: "Male",
        department: "UI / UX Design",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0022",
        photo: "user2.png",
        name: "Mr Prodo",
        gender: "Male",
        department: "Graphics",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0022",
        photo: "user2.png",
        name: "Mr Tzee Amali",
        gender: "Male",
        department: "Graphics",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    },
    {
        id: "#0022",
        photo: "user2.png",
        name: "Engr. Fredrick Aderinto",
        gender: "Male",
        department: "Graphics",
        DOB: "15-8-2001",
        phone: "+234 703 34 060 13",
        salary: "Paid",
        location: "Nigeria"
    }
]

const lakeHeader = Object.keys(lake[0]);
const find = document.querySelector('.main-inp');
const style = document.querySelector('.style');

window.addEventListener('DOMContentLoaded', loadlake);
find.addEventListener('input', filter);


function loadlake(){
    let temp = `<table> <tr>`;
    lakeHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
    temp+=`<tr>`
    lake.forEach(row => {
        temp +=`
        <tr>
          <td>${row.id}</td>
          <td><img class="drink" src="${row.photo}"></td>
          <td>${row.name}</td>
          <td>${row.gender}</td>
          <td>${row.department}</td>
          <td>${row.DOB}</td>
          <td>${row.phone}</td>
          <td>${row.salary}</td>
          <td>${row.location}</td>
        </tr>
        `
    });

    temp+=`</table>`
    style.innerHTML = temp;
}


function filter(e){
let results;
let temp ="";

results = lake.filter( item=> 
    item.id.toLowerCase().includes(e.target.value.toLowerCase()) || 
    item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.gender.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.DOB.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.salary.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.location.toLowerCase().includes(e.target.value.toLowerCase())
    );
   console.log(results)
    if(results.length>0){
        temp = `<table> <tr>`;
        lakeHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
        temp+=`<tr>`
        results.forEach(row => {
            temp +=`
            <tr>
              <td>${row.id}</td>
              <td><img class="drink" src="${row.photo}"></td>
              <td>${row.name}</td>
              <td>${row.gender}</td>
              <td>${row.department}</td>
              <td>${row.DOB}</td>
              <td>${row.phone}</td>
              <td>${row.salary}</td>
              <td>${row.location}</td>
            </tr>
            `
        });
        temp+=`</table>`  
    }else{
        temp =`<div class="no-item">Item Not Found </div>`
    }

    style.innerHTML=temp;
}