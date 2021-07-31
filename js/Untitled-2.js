// JavaScript Document
Bootstrap back to top button
/
by MDBootstrap
1
//Get the button
2
let mybutton = document.getElementById("btn-back-to-top");
3
​
4
// When the user scrolls down 20px from the top of the document, show the button
5
window.onscroll = function () {
6
  scrollFunction();
7
};
8
​
9
function scrollFunction() {
10
  if (
11
    document.body.scrollTop > 20 ||
12
    document.documentElement.scrollTop > 20
13
  ) {
14
    mybutton.style.display = "block";
15
  } else {
16
    mybutton.style.display = "none";
17
  }
18
}
19
// When the user clicks on the button, scroll to the top of the document
20
mybutton.addEventListener("click", backToTop);
21
​
22
function backToTop() {
23
  document.body.scrollTop = 0;
24
  document.documentElement.scrollTop = 0;
25
}

Console errors: 0
