Amount=0;
cgst=0
sgst=0
total=0
function five()
{
    Amount=parseInt(document.getElementById('amount').value)
    if(Amount>0)
    {
       cgst=(Amount/100)*2.5
       sgst=(Amount/100)*2.5
       total=Amount+cgst+sgst;
       document.getElementById("cgst").innerHTML=cgst;
       document.getElementById("sgst").innerHTML=sgst;
       document.getElementById("total").innerHTML=total;
    }
    else{
        window.alert("undefined number")
    }
    document.getElementById("amount").value=" ";
}
function twovelev()
{
    Amount=parseInt(document.getElementById('amount').value)
    if(Amount>0)
    {
       cgst=(Amount/100)*6
       sgst=(Amount/100)*6
       total=Amount+cgst+sgst;
       document.getElementById("cgst").innerHTML=cgst;
       document.getElementById("sgst").innerHTML=sgst;
       document.getElementById("total").innerHTML=total;
    }
    else{
        window.alert("undefined number")
    }
    document.getElementById("amount").value=" ";
}