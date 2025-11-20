let valor1 = Number(prompt("Dime el numero de columnas"));
let valor2 = Number(prompt("Dime el alto"));
let valor3 = Number(prompt("Dime el ancho"));



document.write("<table border = "+ "0"+" cellspacing = "+"2"+" bgcolor ="+" black"+ "width="+"200"+">");
document.write("<tr bgcolor ="+"white"+" height = "+valor2+">");
for(let i=1;i<=valor1;i++){
    document.write("<td width = "+valor3+" >"+"&nbsp;</td>");
}

document.write("</tr>");
document.write("</table>");