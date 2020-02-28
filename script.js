function add(){


    let task = document.getElementById("value").value;

    var res = document.getElementById("result");
    let label = document.createElement("label")
    let check = document.createElement("input");
    let span = document.createElement("span");
    let p = document.createElement("p");

    label.className = "container";
    check.className="checkboox";
    check.id = "check";
    check.type = "checkbox";
    check.setAttribute("onclick","check()")
    span.className="checkmark";
    p.className="text";

    res.appendChild(label);
    label.appendChild(check);
    label.appendChild(span);
    label.appendChild(p)
    p.innerHTML = task;
}

function check() {
    var checkBox = document.getElementsByClassName("checkboox");
    var text= document.getElementsByClassName("text");

    for (let i = 0 ; i<checkBox.length ; i++){
        if (checkBox[i].checked == true){

            text[i].style.textDecoration = 'line-through';
      
          } else {
            text[i].style.textDecoration = 'none';
              
          }
        console.log(text[0])

    }
    
  }


