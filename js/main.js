

// function style() {
//     document.getElementById("fullName").style.border = "solid 5px blue";
//     let name = document.getElementById("fullName").value
//     if (name.length < 3) {
//         document.getElementById("nameValidation").style.display = 'block'
//         document.getElementById("fullName").style.backgroundColor = 'gray'
//     } else {
//         document.getElementById("nameValidation").style.display = 'none'
//     }
// }

// function styleRemove() {
//     document.getElementById("fullName").style.border = "1px solid #ced4da";
//     let name = document.getElementById("fullName").value
//     if (name.length < 3) {
//         let valid = document.getElementById("nameValidation")
//         valid.style.display = 'block'

//     } else {
//         document.getElementById("nameValidation").style.display = 'none'
//     }
// }

// document.getElementById("fullName").addEventListener("focus", style);
// document.getElementById("fullName").addEventListener("blur", styleRemove);


// // email
// document.getElementById("email").addEventListener("focus", function () {
//     document.getElementById("email").style.border = "solid 5px blue";
// });

// document.getElementById("email").addEventListener("blur", function () {
//     document.getElementById("email").style.border = "1px solid #ced4da";
// });



// // password
// document.getElementById("password").addEventListener("focus", function () {
//     let password = document.getElementById("password").value
//     if (password.length < 1) {
//         document.getElementById("passwordValidation").style.display = 'block'
//         document.getElementById("password").style.backgroundColor = 'gray'
//     } else {
//         document.getElementById("passwordValidation").style.display = 'none'
//     }
// });

// document.getElementById("password").addEventListener("blur", function () {
//     let password = document.getElementById("password").value
//     if (password.length < 1) {
//         document.getElementById("passwordValidation").style.display = 'block'
//         document.getElementById("password").style.backgroundColor = 'gray'
//     } else {
//         document.getElementById("passwordValidation").style.display = 'none'
//         document.getElementById("password").style.backgroundColor = 'white'
//     }
// });


// // password confirmed
// document.getElementById("repeatPassword").addEventListener("focus", function () {
//     let password = document.getElementById("password").value
//     let repeatPassword = document.getElementById("repeatPassword").value
//     if (password !== repeatPassword || password.length !== repeatPassword.length) {
//         document.getElementById("passwordRepeatValidation").style.display = 'block'
//         document.getElementById("repeatPassword").style.backgroundColor = 'gray'
//     } else {
//         document.getElementById("passwordRepeatValidation").style.display = 'none'
//         document.getElementById("repeatPassword").style.backgroundColor = 'white'
//     }
// });



// document.getElementById("repeatPassword").addEventListener("blur", function () {
//     let password = document.getElementById("password").value
//     let repeatPassword = document.getElementById("repeatPassword").value
//     if (password !== repeatPassword || password.length !== repeatPassword.length || repeatPassword.length === 0) {
//         document.getElementById("passwordRepeatValidation").style.display = 'block'
//         document.getElementById("repeatPassword").style.backgroundColor = 'gray'

//     } else {
//         document.getElementById("passwordRepeatValidation").style.display = 'none'
//         document.getElementById("repeatPassword").style.backgroundColor = 'white'
//     }
// });


















































// const inputBorder = document.getElementsByClassName(".border-blue")

// inputBorder[0].addEventListener('focus', (event) => {
//     inputBorder[0].style.border = 'solid 10px blue !important';
// });

// inputBorder[0].addEventListener('blur', (event) => {
//     inputBorder[0].style.border = 'none';
// });

// let fullName = document.getElementById('fullName');
// fullName.addEventListener("focus", function () {
//     fullName.style.border = '10px solid blue';
// });

// function appendImage() {
//     const img = document.createElement("img");
//     img.style = 'margin-bottom: 10px'
//     img.src = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
//     const src = document.getElementById("appendImage");
//     src.appendChild(img);
//     alert(src.childNodes.length)
// }

// function insertImage() {
//     const img = document.createElement("img");
//     img.src = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
//     const src = document.getElementById("appendImage");
//     src.insertBefore(img, src.children[src.childNodes.length]);
// }










// let data;
// function openTab(){
//     let name = document.getElementById("fullName").value

//     function open(){
//         data = window.open("", "", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=100,width=600,height=500")
//         data.document.write(name)
//         data.document.body.style.backgroundColor = "yellow"
//         data.focus()
//     }

//     setTimeout(open, 3000);
// }


