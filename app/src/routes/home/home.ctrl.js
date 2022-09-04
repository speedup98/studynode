"use strict"

const home = (req, res) => {
    res.render("home/index"); //app.js에 설정된 디렉토리 views밑에 home밑에 index.ejs를 찾아간다.
};

const login = (req, res) => {
    res.render("home/login"); //app.js에 설정된 디렉토리 views밑에 login밑에 login.ejs를 찾아간다.
};

module.exports = {
    home,
    login
}