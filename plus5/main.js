



function click(color) {
    chrome.tabs.executeScript(null,
            {code:"document.getElementById('lg').getElementsByTagName('img')[0].src='" + color.target.title + "'"});
    window.close();
}



document.addEventListener('DOMContentLoaded', function () {
        var divs = document.querySelectorAll('div');
        for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
        }
        });

