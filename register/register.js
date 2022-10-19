
let existornot = false;




document.getElementById("button").onclick = function () {
    const myObj = {
        userName: 
        document.getElementById("firstName").value,
        password: lastNameValue = document.getElementById("lastName").value
    }

    const myObjJSon = JSON.stringify(myObj) ;


    checkfor(myObjJSon);
};


function checkfor(myObjJSon) {


    Object.keys(localStorage).forEach(function (key) {
        const storedItem = localStorage.getItem(key);



        if (storedItem === myObjJSon) {
            existornot = true;
        }
        });
        action(existornot, myObjJSon);
        existornot = false

    }
    
    function action(existornot, myObjJSon) {
        if (existornot ===false) {
            console.log("the user does not exists")
            add(myObjJSon);


        } else {
            console.log("the user exists")
            AlreadyTaken();
        }

    }


    function add(myObjJSon) {
        const itemCount = localStorage.length;
        const newitemCount = itemCount + 1;

        const stringnumber = newitemCount.toString();

        localStorage.setItem(stringnumber ,myObjJSon);
    }


    function AlreadyTaken() {
        const section = document.querySelector(".exsist");

        section.style.display = "block";
        
        setTimeout(function () {
            section.style.display = "none";
        },2000);
    }
    document.getElementById("login_button").onclick = function () {
        location.href = "../login/index.html"};
