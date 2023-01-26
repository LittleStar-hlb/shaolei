const guanbi = document.querySelector('.guanbi');
const xiaobian = document.querySelector('.xiaobian');





//  图片拖拽
document.ondragstart = function(){
    return false;
};
//  滑动选中
document.onselectstart = function(){
    return false;
};
//  鼠标右键
document.oncontextmenu = function(){
    return false;
};


let nav = document.querySelector(".nav");
let h1 = document.querySelectorAll(".nav > h1");

nav.addEventListener('click', function(e) {
    const active = document.querySelector('.henggang');
    if(e.target.nodeName == "A"){
        var left = e.target.offsetLeft - 2;
        active.style.transform = `translate(${left + "px"})`;
    }
    







    // for (let index = 0; index < h1.length; index++) {
    //     const element = h1[index];
        
    // }
    
//     console.log(this.offsetWidth)

// const acive = document.querySelector('.henggang');
// acive.offsetWidth = e.target.nodeName;
// if(acive){
//     acive.classList.remove("henggang")
    
// }
    // e.target.classList.add("henggang");
})


