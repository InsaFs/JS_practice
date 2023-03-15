


function emptyInput(){

    console.log(login.value);
    console.log(email.value);
    console.log(birthday.value);
    document.querySelector(".info-title").style.visibility = "visible"

    if(email.value.match(/@/) && login.value.length > 4 && email.value.length > 0 && birthday.value.length > 0){
        
        if(login.value.match(/ /)){

            document.querySelector(".info-title").style.color = "red";
            document.querySelector(".info-title").innerHTML= ("Введите все обязательные поля");
            document.querySelector(".submit").disabled = true;
        }
        else{
            document.querySelector(".info-title").style.color = "green";
            document.querySelector(".info-title").innerHTML =("Всё введено верно");
            document.querySelector(".submit").disabled = false;
        }


    }
    
    else{
        document.querySelector(".info-title").style.color = "red";
        document.querySelector(".info-title").innerHTML = ("Введите все обязательные поля");
        document.querySelector(".submit").disabled = true;
    }

}







var h_one = document.querySelector('h1');
var toggle = true;

function SwitchTheme(){


    


    if(toggle == false){
        toggle = true;
        
        
        DarkTheme();

    }
    else if(toggle == true){
    toggle = false;
    
    
    WhiteTheme();
}

console.log(toggle );



}




function DarkTheme(){
    
    document.body.classList.add('body_dark');
    h_one.classList.add('text_dark');
    document.querySelector('.theme').classList.add('themeBtn_dark');
    document.querySelector('.submit').classList.add('submit_dark');
    document.querySelector('.user-info').classList.add('user-info_dark');
    document.querySelector('.date__text').classList.add('date__text_dark');
    document.querySelector('.user-id').classList.add('user-id_dark');

    
}

function WhiteTheme(){
    
    document.body.classList.remove(`body_dark`);
    h_one.classList.remove('text_dark');
    document.querySelector('.theme').classList.remove('themeBtn_dark');
    document.querySelector('.submit').classList.remove('submit_dark');
    document.querySelector('.user-info').classList.remove('user-info_dark');
    document.querySelector('.date__text').classList.remove('date__text_dark');
    document.querySelector('.user-id').classList.remove('user-id_dark');

var username;
var usermail;

}
function sendJSON(){

    // var answer = confirm("Нажмите ок, и мы начнем спамить вам на почту");
     
    // if(answer){
    //     alert("Спасибо, сейчас начнем");
        
    // }

    // else {

    //     alert("Ну пж =(");
    // }
    
    // с помощью jQuery обращаемся к элементам на странице по их именам
    let name = document.querySelector('#name');
    let lastname = document.querySelector('#email');
    // а вот сюда мы поместим ответ от сервера
    let result = document.querySelector('.user-value');
    // создаём новый экземпляр запроса XHR
    let xhr = new XMLHttpRequest();

    // if(login.value.match(/ /)){
    //     alert("Логин не должен содержать пробелов")
    //     return false;
    // }

    

if(name.value != null && name.value.length == 0){

    name.value = login.value
}

    paragraph.innerHTML = (name.name + ": " + name.value);
    paragraph2.innerHTML = (lastname.name + ": " + lastname.value);
    paragraph3.innerHTML = (login.name + ": " + login.value);
    paragraph4.innerHTML = (birthday.name + ": " + birthday.value);



    console.log(name.value);
    console.log(login.value);
    console.log(email.value);
    console.log(birthday.value);

let info_user = {
    email: document.querySelector('#email').value,
    login: document.querySelector('#login').value,
    name: document.querySelector('#name').value,
    birthday: document.querySelector('#birthday').value,

};

let json_user = JSON.stringify(info_user);

console.log(json_user);




    xhr.open("POST", "http://localhost:8080/users", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json_user);

    xhr.onreadystatechange = function () {
      
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data;
            data = this.responseText;
            console.log(JSON.parse(data));
          }
      }

    return false;


    

}


var paragraph = document.getElementById('paragraph');
var paragraph2 = document.getElementById('paragraph2');
var paragraph3 = document.getElementById('paragraph3');
var paragraph4 = document.getElementById('paragraph4');



//var spans = document.getElementsByTagName("span");


var spans = document.getElementsByClassName("simple-text");
for(var i = 0; i < spans.length; i++){

    console.log(spans[i].innerHTML);





}