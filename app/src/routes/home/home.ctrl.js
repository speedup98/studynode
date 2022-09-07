"use strict"

const output = {
    home : (req, res) => {
        res.render("home/index"); //app.js에 설정된 디렉토리 views밑에 home밑에 index.ejs를 찾아간다.
    },

    login : (req, res) => {
        res.render("home/login"); //app.js에 설정된 디렉토리 views밑에 login밑에 login.ejs를 찾아간다.
    },
};

const process = {
    login: (req, res) => {
        //console.log(req.body); //서버콘솔이다. 브라우저 콘솔이 아니다.
        const id = req.body.id,
            psword = req.body.psword;
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success:true
                })
            }
        }
        return res.json({
            success:false,
            msg:"로그인에 실패"
        })
    }
}

//임시용 리스트
const users = {
    id: ["speedup"],
    psword: ["1234"]
};

module.exports = {
    output,
    process
}