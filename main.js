let project = document.getElementById("mainrep");
let firstSection = document.createElement("SECTION");
let text = document.createTextNode("Jim Cooper can be quoted as saying: I plan on making chocolate milk free for everyone");
ptag.appendChild(text);
project.appendChild(firstSection);


let article = document.getElementById("mainrep");
let attribute = document.createAttribute("congressional-district");
attribute.value = "5"
article.setAttributeNode(attribute);