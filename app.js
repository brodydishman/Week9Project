


let inputEle = document.createElement("input");
inputEle.placeholder="Name";


let inputElePass = document.createElement("input");
inputElePass.placeholder="Password";
inputElePass.setAttribute("Type","password");


let messageEle = document.createElement("h3");


let button = document.createElement("button");
button.innerHTML = "Login";


button.addEventListener("click",function(){
    if(inputEle.value==="coolStudent123"&&inputElePass.value==="password"){
        messageEle.innerHTML="Logged in"

    }else{
        messageEle.innerHTML="Incorrect information"
        home.innerHTML=""
        about.innerHTML=""
        notes.innerHTML=""
    }


})
document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);


const pages = [
    {
        page:"Home",
        navigate: home
    },
    {
        page: "About",
        navigate: about
    },
    {
        page: "Notes",
        navigate: notes
    }
]


function navButton(pg, pr, nv){

    let button=document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);

}

function navigation(){

    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="Blue";
    for (obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);

}

function home(){

    let home = document.createElement("div");
    let homeEle = document.createElement("h1");
    home.innerHTML="";
    homeEle.innerHTML = "Home";
    home.appendChild(homeEle);
    document.body.appendChild(home);
    document.body.querySelector(".wrapper").appendChild(home);
    home.body.innerHTML=""

}

function about(){

    let about = document.createElement("div");
    let aboutEle = document.createElement("h1");
    let nameEle = document.createElement("h3");
    about.innerHTML="";
    aboutEle.innerHTML = "About";
    nameEle.innerHTML = "Brody Dishman";
    about.appendChild(aboutEle);
    about.appendChild(nameEle);
    document.body.appendChild(about);
    document.body.querySelector(".wrapper").appendChild(about);

}

function notes(){

    let notes = document.createElement("div");
    let notesEle = document.createElement("h1");
    notes.innerHTML="";
    notesEle.innerHTML="Notes";
    notes.appendChild(notesEle);
    document.body.appendChild(notes);
    document.body.querySelector(".wrapper").appendChild(notes);

    let inputEleNote = document.createElement("input");
    inputEleNote.placeholder="Note";


    let inputEleNum = document.createElement("input");
    inputEleNum.placeholder="Number";



    let button = document.createElement("button");
    button.innerHTML= "Submit Note";
    button.addEventListener("click",function (){


        let list = [];
let listEle = document.createElement("div")
function renderList(){

    listEle.innerHTML="";

    for(let i=0; i<list.length; i++){
        let ele = document.createElement("div")
        ele.innerHTML=list[i];
        listEle.appendChild(ele)
    }
}

        document.body.appendChild(inputEleNote);
        document.body.appendChild(inputEleNum);
list.push(inputEleNote.value);
list.push(inputEleNum.value);
renderList();

document.body.appendChild(listEle);

renderList();
    })

    document.body.appendChild(button);

}


navigation();
home();
about();
notes();











