$(".aTag").mouseover(function(){
	var id = $(this).attr("id");
 	$("#"+id).css("color", "#096CE0");
 	console.log(id);
});
$(".aTag").mouseout(function(){
	var id = $(this).attr("id");
 	$("#"+id).css("color", "#202020");
 	console.log(id);
});
