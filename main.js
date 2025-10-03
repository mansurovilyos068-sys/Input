let Lastname = document.querySelector('.Lastname')
let Name = document.querySelector('.Name')
let btn = document.querySelector('.btn')
let btnedit = document.querySelector('.btn2')
let ul = document.querySelector('.ul')
let p = document.querySelector('.p')
let editForm = document.querySelector('.editForm')
let editLastname = document.querySelector('.Editlastname')
let editName = document.querySelector('.Editname')
let btnx = document.querySelector('.btnx')
let e = document.querySelector('.e')
let overlay = document.querySelector('.overlay')


let data = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];


addUser()
function addUser() {
    ul.textContent = ''

    localStorage.setItem('list', JSON.stringify(data))

    data.forEach((item, index) => {
        ul.innerHTML +=
            `<li>      
    <h2> Familiyasi: ${item.familya}</h2>
    <h2> Ismi: ${item.ism}</h2>
    <div class="div">
        <span>${item.vaqt}</span>
        <i class="fa-solid fa-pen" onclick=(editItem(${index}))></i>
        <i class="fa-solid fa-trash" onclick=(deleteItem(${index}))></i>
    </div>
    </li>`
    })}



function editItem(i) {
    editForm.classList.remove('hidden')
    editId = i
    overlay.classList.remove('hidden')
}


btnx.addEventListener('click', ()=>{
    overlay.classList.add('hidden')
    editForm.classList.add('hidden')
})



editForm.addEventListener('submit', (f)=>{
    f.preventDefault()

    let edvallastname = editLastname.value
    let edvalname = editName.value

     if (edvallastname.length == 0) {
        e.textContent = 'Error'

        setTimeout(() => {
            e.textContent = ''
        }, 3000)
}else{
    let vaqt2 = new Date()

    let hours = vaqt2.getHours() < 10 ? '0' + vaqt2.getHours() : vaqt2.getHours()
    let min = vaqt2.getMinutes() < 10 ? '0' + vaqt2.getMinutes() : vaqt2.getMinutes()
    let sec = vaqt2.getSeconds() < 10 ? '0' + vaqt2.getSeconds() : vaqt2.getSeconds()

    let time2 = `${hours}:${min}:${sec}`

    data.splice(editId, 1, { familya: edvallastname, ism: edvalname, vaqt: time2 })
    addUser()

    editForm.classList.add('hidden')
    overlay.classList.add('hidden')
}})


function deleteItem(i) {
    const filterItem = data.filter((item, index) => {
        return index != i
})
    data = filterItem
    addUser()
}


btn.addEventListener('click', () => {
    let vaqt1 = new Date()

    let hours = vaqt1.getHours() < 10 ? '0' + vaqt1.getHours() : vaqt1.getHours()
    let min = vaqt1.getMinutes() < 10 ? '0' + vaqt1.getMinutes() : vaqt1.getMinutes()
    let sec = vaqt1.getSeconds() < 10 ? '0' + vaqt1.getSeconds() : vaqt1.getSeconds()

    let time1 = `${hours}:${min}:${sec}`

    let valLastname = Lastname.value
    let valname = Name.value


    if (valLastname, valname.length == 0) {
        p.textContent = 'Error'

        setTimeout(() => {
            p.textContent = ''
        }, 3000)
    } else {
        data.push({ familya: valLastname, ism: valname, vaqt: time1 })
        localStorage.setItem('list', JSON.stringify(data))
        addUser()
    }})
