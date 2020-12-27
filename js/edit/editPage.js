function changeTSize(num) {
  // only one body in document
  let els = document.getElementsByTagName("body");
  changeFontSize(els, num);

  // Must be done separately for buttons:
  els = document.getElementsByTagName("button");
  changeFontSize(els, num);

  //h2 loop through all h2 elements
  els = document.getElementsByTagName("h2");
  changeFontSize(els, num);

  //h3 loop through all the h3 elements
  els = document.getElementsByTagName("h3");
  changeFontSize(els, num);

  //h4 loop through all h4 elements
  els = document.getElementsByTagName("h4");
  changeFontSize(els, num);


}

/**
 * Take in a collection of elements and change the font size.
 * @param elements the collection of elements to be changed
 * @param num the specified size
 */
function changeFontSize(elements, num){
  let fontSize;
  let fontSizeString;
  for (let i = 0; i < elements.length; i++) {
    fontSizeString = window
        .getComputedStyle(elements[i], null)
        .getPropertyValue("font-size");
    fontSize = parseFloat(fontSizeString);
    elements[i].style.fontSize = fontSize + num + "px";
  }
}

function setTextColor(picker) {
  var bodyElements = document.querySelectorAll("body *, a");
  for (var i = 0; i < bodyElements.length; i++) {
    bodyElements[i].style.color = "#" + picker.toString();
  }
}

function setBackgroundColor(picker) {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "#" + picker.toString();
}
