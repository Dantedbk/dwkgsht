

function generator() {
    
var c = document.getElementById("canv1");
var size = 500;
var ctx = c.getContext("2d");
var z = 7

var len = parseInt(document.getElementById("txtId").value)
ctx.clearRect(0, 0, size*2, size*2);
var ranNum = 0
var arrx = []
for (i=0;i<len*2;i++){
    ranNum += Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    arrx.push(ranNum)
}
for (i=0;i<arrx.length;i++){
    x = arrx[i]*10 > size ? arrx[i]*10 - size : arrx[i]*10 + size
    y = arrx[i+len]*10 > size ? Math.abs(size*2 - arrx[i+len]*10 ): arrx[i+len]*10 + size
        ctx.fillRect(x,y,z,z);
        ctx.fillRect(size*2-x,y,z,z);
        
}
ctx.stroke();
}

function cleargen(){
    ctx.clearRect(0, 0, size*2, size*2);
}