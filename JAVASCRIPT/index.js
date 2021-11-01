// ///////////////////////time///////////////////////////////////////////
  ////////////////////////////// time/////////////////////////////////////
const showNav=()=>{
    window.alert('ufff')
}

const Hide=()=>{
    document.getElementById("navBtnDiv2").className="hide";
}
const Show=()=>{
    document.getElementById("navBtnDiv2").className="show";
}


// const counterPlus=()=>{
//     var counter=1;
//     counter +=1;
//     console.log(counter)
//     document.getElementById("counter").innerHTM=counter
//     console.log(counter)
// }
// const counterMinus=()=>{
//     document.getElementById("counter").innerHTML=counter-1
// }


var button = document.getElementById("counterPlus"),
  count = 1;
button.onclick = function() {
  count += 1;
//   console.log(count)
if(count<=20){
  document.getElementById('countero').innerHTML = count;
}else{
    count -= 1;
}
};

var button = document.getElementById("counterMinus"),
  count = 1;
button.onclick = function() {
  count -= 1;
//   console.log(count)
if(count>=1){
  document.getElementById('countero').innerHTML = count;
}else{
    count += 1;
}
};