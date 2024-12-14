let i = 0;

function popdown() {
    if(i === 0) {
        document.querySelector("nav").style.height = "15rem";
        document.querySelector("#ss").style.display = "none";
        document.querySelector("#fs").style.transform = "translateY(4px) rotate(60deg)";
        document.querySelector("#ts").style.transform = "translateY(-4px) rotate(-60deg)";
        document.querySelector(".popdown").style.display = "block";

        i = 1 ;
    }
    else {
        document.querySelector("nav").style.height = "6rem";
        document.querySelector(".popdown").style.display = "none";
        document.querySelector("#ss").style.display = "block";
        document.querySelector("#fs").style.width = "25px";
        document.querySelector("#fs").style.transform = "rotate(180deg)";
        document.querySelector("#ts").style.width = "25px";
        document.querySelector("#ts").style.transform = "rotate(180deg)";
        i = 0;
    }
}