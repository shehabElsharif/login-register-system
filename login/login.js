



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
            correct()
            setTimeout( function (){location.href = "../site/homepage.html"},2000);

        } else {

            invaled();
        }
        
        });
 
    }
    function invaled() {
        const section = document.querySelector(".invaled");

        section.style.display = "block";
        
        setTimeout(function () {
            section.style.display = "none";
        },2000);
    }
    function correct() {
        const section2 = document.querySelector(".correct");

        section2.style.display = "block";
        
        setTimeout(function () {
            section2.style.display = "none";
        },2000);
    };

    document.getElementById("Register_button").onclick = function () {
        location.href = "../register/register.html"};
