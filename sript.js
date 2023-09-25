function data(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c=(parseInt(a))+(parseInt(b));
    return c;
}
function data1(){
    var result=data();
    document.getElementById("result").value= result;
}