var x,b,e,f,s,y,z,p;
var g=0;
var c=document.getElementById("dataTbl").rows.length - 1;



if (localStorage.getItem('tableAll') !== null) {
    document.getElementById("dataTbl").innerHTML=localStorage.getItem('tableAll');
}

for (e=1, g=0; e <= c; e++) {
  f=document.getElementById("dataTbl").rows[e].cells[2].innerHTML;
  if (f === '1') {
    g=g+1;
  }
}
document.getElementById("left").innerHTML=g;

function fBrevity(){
  for (i=0, x=Math.floor((Math.random()*c)+1), b=document.getElementById("dataTbl").rows[x].cells[2].innerHTML; b>1 && i<c; i++) {
    x=x+1;
    if(x>c) {
      x=x-c;
    }
    b=document.getElementById("dataTbl").rows[x].cells[2].innerHTML;
  }
  if (b == 2) {
    if (confirm("That's it!\n\nReset?") == true) {
      reset();
    }
  } else {
    var y=document.getElementById("dataTbl").rows[x].cells[0].innerHTML;
    var z=document.getElementById("dataTbl").rows[x].cells[1].innerHTML;
    document.getElementById("br").innerHTML=y;
    document.getElementById("dataTbl").rows[x].cells[2].innerHTML=2;
    document.getElementById("bl").innerHTML=z;
  }

  if (document.getElementById("ex").innerHTML !== "To see explanation click 'Show/Hide'") {
    document.getElementById("ex").innerHTML="To see explanation click 'Show/Hide'";
  }
  for (e=1, g=0; e <= c; e++) {
    f=document.getElementById("dataTbl").rows[e].cells[2].innerHTML;
    if (f === '1') {
      g=g+1;
    }
  }
  document.getElementById("left").innerHTML=g;

  $(function () {
    localStorage.setItem('tableAll', document.getElementById("dataTbl").innerHTML);
  });

}

function fShow() {
    p=document.getElementById("bl").innerHTML;
    var s = document.getElementById("ex");
    if (p==="") {
      s.innerHTML="Just click 'Hit me!'";
    } else {
      if (s.innerHTML === "To see explanation click 'Show/Hide'") {
          s.innerHTML=p;
      } else {
          s.innerHTML="To see explanation click 'Show/Hide'";
      }
    }
}

function reset() {
  for (j=1; j<=c; j++) {
    document.getElementById("dataTbl").rows[j].cells[2].innerHTML=1;
  }
  for (e=1, g=0; e <= c; e++) {
    f=document.getElementById("dataTbl").rows[e].cells[2].innerHTML;
    if (f === '1') {
      g=g+1;
    }
  }
  document.getElementById("left").innerHTML=g;
  document.getElementById("br").innerHTML="Click 'Hit me!'";
  document.getElementById("ex").innerHTML="To see explanation click 'Show/Hide'";
  document.getElementById("bl").innerHTML="";
}


$("#reset").click(function() {
  localStorage.removeItem("tableAll");
});
