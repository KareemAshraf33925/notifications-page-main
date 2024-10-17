var num=document.querySelector(".num"),
    markall=document.querySelector(".markall"),
    not_mess=document.querySelectorAll(".not_mess"),
    circle=document.querySelectorAll(".circle");
    not_mess.forEach( (n)=>{
        markall.addEventListener("click",()=>{
            num.innerHTML= 0;
            n.style.background="transparent";
            circle.forEach( (c)=>{
                c.style.display= "none";
            })
           
        })
    })

   