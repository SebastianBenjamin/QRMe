var qrcode = new QRCode("qrcode");

function makeCode () {    

  var elText = document.getElementById("text");
  if (!elText.value) {
    alert("Please enter a text/url to generate your QR code.");
    elText.focus();
    return;
  }
  document.getElementById('qrcode').style.display='block';
  document.getElementById('print').style.display='block';
  document.getElementById('clear').style.display='block';
  document.getElementById('qrimage').style.display='none';
  document.getElementById('span').style.display='none';
  qrcode.makeCode(elText.value);
  elText.value='';

}



document.getElementById("text").addEventListener("keypress",function(event){
    if (event.key === "Enter") {document.getElementById("btn").click();}
}) ;
document.getElementById("btn").addEventListener("click",makeCode) ;
document.getElementById("clear").addEventListener("click",()=>{
    document.getElementById('qrcode').style.display='none';
    document.getElementById('print').style.display='none';
    document.getElementById('clear').style.display='none';
    document.getElementById('qrimage').style.display='block';
    document.getElementById('span').style.display='block';
    document.getElementById("text").value='';
}) ;
document.getElementById("print").addEventListener("click",()=>{
    window.print();
}) ;
