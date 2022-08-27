
let dna = ''

function generar() {
    let len = parseInt(document.getElementById("txtId").value)
    let c = document.getElementById("canv1");
    let size = 500;
    let ctx = c.getContext("2d");
    let z = parseInt(document.getElementById("txtZ").value)
    let r = parseInt(document.getElementById("txtR").value)

    ctx.clearRect(0, 0, size*2, size*2);
    var arrx = []
    var temp = 0
    var str = '<b>X: </b> '
    for (i=0;i<len*2;i++){
        var choice = [-2,-1,1,2]
        var ranNum = choice[Math.floor(Math.random() * choice.length)];
        temp += ranNum
        arrx.push(temp)
        str += (ranNum == choice[0] ? 'A' : (ranNum == choice[1]) ? 'C' : (ranNum == choice[2]) ? 'T' : 'G' ) +' '
        dna += str
        if (i == len-1){str += '<br><b>Y:</b> ' }}   
    str += ' '+'<br>' 
    for (i=0;i<arrx.length/2;i++){
        x = arrx[i]*r > size ? arrx[i]*r - size : arrx[i]*r + size
        y = arrx[i+len]*r > size ? Math.abs(size*2 - arrx[i+len]*r ): arrx[i+len]*r + size
        ctx.fillRect(x,y,z,z);
        ctx.fillRect(size*2-x,y,z,z);
        str += '('+arrx[i]+','+arrx[i+len]+')'
    }
    // alert(str)
    document.getElementById("txt").innerHTML = str;
    ctx.stroke();
    // document.getElementById('limpiar').addEventListener("click",alert('c:'));
}

function mutar(){
    foo = ''
    rate = document.getElementById("txtRate").value

    alert(dna)
    var arrm = []
    for (i=0;i<len*2;i++){
        var x = dna.charAt(i)
        if (rate > Math.floor(Math.random() * 100)){
            cadena = x == 'A' ? -2 : x == 'C' ? -1 : x =='T' ? 1 : 2
        }
        else {
            cadena = choice[Math.floor(Math.random() * choice.length)];
        }
        arrm.push(cadena)
    }

}