

$(document).ready(function(){
    $(".wrap1 ul li a").click(function(e){
        e.preventDefault();
        var x=$(this).attr("href");
        $("body,html").animate({
            "scrollTop":$(x).offset().top
        })
    })
})

$(document).ready(function(){
    $(".wrap2 .icon-but").click(function(){
        $(".wrap1 .flex .flex1").toggle(500)
    })
})

/* document.querySelector(".wrap2 .icon-but").addEventListener("click", function(){
    document.querySelector(".wrap1 .flex .flex1").style.display="block";
})
document.querySelector(".container").addEventListener("click", function(){
    document.querySelector(".wrap1 .flex .flex1").style.display="none"
}) */


// document.querySelector(".wrap1 .color").addEventListener("click", function(){
    // console.log("hii")
// })