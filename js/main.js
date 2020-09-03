document.getElementById('install-extension').addEventListener('click', function () {
    window.open('https://chrome.google.com/webstore/detail/utility-for-facebook/bindlhahkbeopbjgjkhihjkanlebkoma');
});

document.getElementById('a-about').addEventListener('click', function (e) {
    // retrieve the element
    let html = document.getElementsByClassName("html")[0];
    let css = document.getElementsByClassName("css")[0];
    let js = document.getElementsByClassName("js")[0];
    let react = document.getElementsByClassName("react")[0];
    let node = document.getElementsByClassName("node")[0];

    resetAnimation(html, "html");
    resetAnimation(css, "css");
    resetAnimation(js, "js");
    resetAnimation(react, "react");
    resetAnimation(node, "node");
});

function resetAnimation(element, className) {
    // -> removing the class
    element.classList.remove(className);

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void element.offsetWidth;

    // -> and re-adding the class
    element.classList.add(className);
}