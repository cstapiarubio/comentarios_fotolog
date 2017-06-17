/*aquí va tu código*/

function saveData(){
	var name=document.getElementById("name").value;
	var coment=document.getElementById("comit").value;
	sessionStorage.setItem(name, coment);
}
savedata();

function recoverData(){
	for(var i=0; i<sessionStorage.length;i++){
		var name=sessionStorage.key(i);
		var clave=sessionStorage.getItem(name);
		document.getElementById("data").innerHTML="<div>"+"Nombre: "+name+"</br> Comentario:" +clave+"</div>";
	}
}
recoverData();

function cleanData(){
	document.getElementById("data").innerHTML="Limpiada vista. Los datos permanecen";
}
cleanData();

function borrarTodo(){
	sessionStorage.clear(); recoverData();
}
borrarTodo();