var r=document.getElementById('resultat')


function number(value){
	r.value+=value;
}
function clean(value){
	r.value='';
}

function calcul(){
	r.value=eval(r.value)
}

function delet(){
	r.value=value.slice(-1)
}