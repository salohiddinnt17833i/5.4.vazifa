let name1 = document.getElementById('name');
let surname = document.querySelector('#surname');
let age = document.querySelector('#age');
let email = document.querySelector('#email');
let span = document.querySelector('#span')

let m1 = document.querySelector('#m1')
let m2 = document.querySelector('#m2')
let m3 = document.querySelector('#m3')
let m4 = document.querySelector('#m4')

let btn = document.querySelector('#button')
let saqlash = document.querySelector('#saqlash')
let olish = document.querySelector('#olish')


let m11;
let m22;
let m33;
let m44;

btn && btn.addEventListener('click', function () {
    m11 = m1.innerHTML = 'Ismi' + ' ' + name1.value;
    m22 = m2.innerHTML = 'Familiyasi' + ' ' + surname.value;
    m33 = m3.innerHTML = 'Yoshi' + ' ' + age.value;
    m44 = m4.innerHTML = 'Emaili' + ' ' + email.value;

});


saqlash && saqlash.addEventListener('click', function () {
    let str1 = JSON.stringify(m11)
    localStorage.setItem('ismi', str1)
    let str2 = JSON.stringify(m22)
    localStorage.setItem('familiyasi', str2)
    let str3 = JSON.stringify(m33)
    localStorage.setItem('yoshi', str3)
    let str4 = JSON.stringify(m44)
    localStorage.setItem('emaili', str4)

})

olish && olish.addEventListener('click', function () {
    let o1 = JSON.parse(localStorage.getItem('ismi'));
    let o2 = JSON.parse(localStorage.getItem('familiyasi'));
    let o3 = JSON.parse(localStorage.getItem('yoshi'));
    let o4 = JSON.parse(localStorage.getItem('emaili'));
    span.innerHTML = o1 + ', ' + o2 + ', ' + o3 + ', ' + o4;
})