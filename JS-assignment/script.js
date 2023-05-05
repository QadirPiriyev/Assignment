
let addBtn = document.getElementById('addBtn');
let countBtn = document.getElementById('countBtn')
let showOrHide = document.getElementById('showOrHide')
let input = document.getElementById("inputValue");
let fruitList = document.getElementById("fruitList");

addBtn.addEventListener("click", fruitAdd);
countBtn.addEventListener("click", fruitCount);
showOrHide.addEventListener("click", listShowHide);

function fruitAdd() {

    let fruitName = input.value;
    if (fruitName.length != 0) {
        let newFruit = document.createElement("li");
        newFruit.textContent = fruitName;
        fruitList.appendChild(newFruit);
        input.value = "";
    }
    else{
        window.alert("boş ola bilməz!!")
    }
}

function fruitCount(){
    let count = fruitList.children.length;
    document.getElementById("countBox").innerHTML= "listdeki meyve sayi = " + count;
}
function listShowHide(){
    if (fruitList.classList.contains("hide")) {
        fruitList.classList.remove("hide");
    }
    else{
        fruitList.classList.add("hide");
    }
}


// optional task JS
let numberSeperator = document.getElementById("startBtn")
numberSeperator.addEventListener("click", showNumbers)
function counts_html_add(numberCount) {
    var html_code = "";

    for (var i = 1; i <= numberCount; i++) {
      if (i % 2 !== 0) {
        html_code += "<div class='tek'>" + i + "</div>";
      }
      else {
        html_code += "<div class='cut'>" + i + "</div>";
      }
    }

    return html_code;
  }

  function showNumbers() {
    var numberCount = parseInt(document.getElementById("numberCount").value);
    var counts_div = document.getElementById("counts");

    if (!isNaN(numberCount) && numberCount > 0 && numberCount <= 100) {
      counts_div.innerHTML = counts_html_add(numberCount);
    }
    else {
      counts_div.innerHTML = "<div style='color: red;'>keçərli bir rəqəm daxil edin (1-100 arasında)</div>";
    }
  }