const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else{
    //     title.classList.remove(CLICKED_CLASS);
    // }

    //토글 한줄에 해결
    title.classList.toggle(CLICKED_CLASS);

}

function init(){

    // title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
    title.addEventListener("mouseleave", handleClick);

    
}

init();