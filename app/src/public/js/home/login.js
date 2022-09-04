"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#btn");

var login = function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req.id.length);
    // if (id.value.length <= 0) {
    //     alert("아이디를 입력해주세요.");
    //     return false;
    // }
    // if (psword.value.length <= 0) {
    //     alert("패스워드를 입력해주세요.");
    //     return false;
    // }
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })

}

loginBtn.addEventListener("click", login);

