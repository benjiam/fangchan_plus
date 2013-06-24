
function click1() {
    chrome.tabs.executeScript(null, 
            {code:"document.body.style.backgroundColor='red'"});
    window.close();
}


function click2() {
    chrome.tabs.executeScript(null, 
            {code:"document.body.style.backgroundColor='blue'"});
    window.close();
}


document.addEventListener('load', function () {
        var divs = document.querySelectorAll('img');
        for (var i = 0; i < divs.length; i++) {


        divs[i].addEventListener('click', click1);
        //divs[i].addEventListener('onmouseover', click1);
        //divs[i].addEventListener('onmouseout', click2);


        }
        });


