$(document).ready(function(){
	atualiza();
});
function atualiza(){
$.get('?contador='+Senha+'&pegar=downloads', function(resultado){
$('#DivDownloads').html(resultado);
})
$.get('?contador='+Senha+'&pegar=x9', function(resultado){
$('#DivX9').html(resultado);
})	
$.get('?contador='+Senha+'&pegar=menu&filtro='+Filtro, function(resultado){
$('#DivMenu').html(resultado);
})	
setTimeout('atualiza()', 10000);
}
