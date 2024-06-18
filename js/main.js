var myDiv = document.getElementById("Cover")
var myPic = document.getElementById("myPic")

function changeHeight() 
{    
    scrollY>50 ? myDiv.style.height="60vh" :  myDiv.style.height="20vh"
    scrollY>100 ? myDiv.style.height="80vh" :  myDiv.style.height="20vh"
    scrollY>150 ? myDiv.style.height="100vh" :  myDiv.style.height="20vh"
    scrollY>200 ? myDiv.style.height="120vh" :  myDiv.style.height="20vh"
    
}

window.addEventListener('scroll', function() 
{
    requestAnimationFrame(changeHeight)
}, false)