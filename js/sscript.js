var x,b,e,f,s,y,z,p;
var g=0;
var c=document.getElementById("dataTblSay").rows.length - 1;



if (localStorage.getItem('tableAllSay') !== null) {
    document.getElementById("dataTblSay").innerHTML=localStorage.getItem('tableAllSay');
}

for (e=1, g=0; e <= c; e++) {
  f=document.getElementById("dataTblSay").rows[e].cells[2].innerHTML;
  if (f === '1') {
    g=g+1;
  }
}
document.getElementById("left").innerHTML=g;

function fBrevity(){
  for (i=0, x=Math.floor((Math.random()*c)+1), b=document.getElementById("dataTblSay").rows[x].cells[2].innerHTML; b>1 && i<c; i++) {
    x=x+1;
    if(x>c) {
      x=x-c;
    }
    b=document.getElementById("dataTblSay").rows[x].cells[2].innerHTML;
  }
  if (b == 2) {
    if (confirm("That's it!\n\nReset?") == true) {
      reset();
    }
  } else {
    var y=document.getElementById("dataTblSay").rows[x].cells[1].innerHTML;
    var z=document.getElementById("dataTblSay").rows[x].cells[0].innerHTML;
    document.getElementById("ex").innerHTML=y;
    document.getElementById("dataTblSay").rows[x].cells[2].innerHTML=2;
    document.getElementById("bl").innerHTML=z;
  }

  if (document.getElementById("br").innerHTML !== "To see brevity click 'Show/Hide'") {
    document.getElementById("br").innerHTML="To see brevity click 'Show/Hide'";
  }
  for (e=1, g=0; e <= c; e++) {
    f=document.getElementById("dataTblSay").rows[e].cells[2].innerHTML;
    if (f === '1') {
      g=g+1;
    }
  }
  document.getElementById("left").innerHTML=g;

  $(function () {
    localStorage.setItem('tableAllSay', document.getElementById("dataTblSay").innerHTML);
  });

}

function fShow() {
    p=document.getElementById("bl").innerHTML;
    var s = document.getElementById("br");
    if (p==="") {
      s.innerHTML="Just click 'Hit me!'";
    } else {
      if (s.innerHTML === "To see brevity click 'Show/Hide'") {
          s.innerHTML=p;
      } else {
          s.innerHTML="To see brevity click 'Show/Hide'";
      }
    }
}

function reset() {
  for (j=1; j<=c; j++) {
    document.getElementById("dataTblSay").rows[j].cells[2].innerHTML=1;
  }
  for (e=1, g=0; e <= c; e++) {
    f=document.getElementById("dataTblSay").rows[e].cells[2].innerHTML;
    if (f === '1') {
      g=g+1;
    }
  }
  document.getElementById("left").innerHTML=g;
  document.getElementById("ex").innerHTML="Click 'Hit me!'";
  document.getElementById("br").innerHTML="To see brevity click 'Show/Hide'";
  document.getElementById("bl").innerHTML="";
}


$("#reset").click(function() {
  localStorage.removeItem("tableAllSay");
});
