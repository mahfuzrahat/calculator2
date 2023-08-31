(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".equal");
    let allClear = document.querySelector(".ac-btn");
    let allDelete = document.querySelector(".de-btn");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(e){
        if(screen.value == ""){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    allClear.addEventListener("click", function(e){
        screen.value = '';
    })

    allDelete.addEventListener("click", function(e){
        screen.value = screen.value.toString().slice(0, -1);
    })



})();


