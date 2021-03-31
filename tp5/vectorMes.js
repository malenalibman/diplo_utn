var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var dias31 = "";
console.log('Meses con 31 días:');
for(let i = 0; i < meses.length; i++) {
    if(diasDelMes[i] == 31){
        console.log(meses[i]+' que es el mes número '+(i+1)+' del año');
    }
}
console.log(dias30);

var dias30 = "";
console.log('Meses con 30 días:');
for(let i = 0; i < meses.length; i++) {
    if(diasDelMes[i] == 30){
        console.log(meses[i]+' que es el mes número '+(i+1)+' del año');
    }
}
console.log(dias30);