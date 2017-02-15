// Your jQuery goes here

var userData = {};
$("#start").click(function(event){
		$("#q1").show();
		$("#welcome").hide();
	});


$("#q1next").click(function(event){
		$("#q2").show();
		$("#q1").hide();
	});

$("#h1next").click(function(event){
		$("#q2a").show();
		$("#q2").hide();
	});
$("#h2next").click(function(event){
		$("#q2b").show();
		$("#q2").hide();
	});
$("#h3next").click(function(event){
		$("#q2c").show();
		$("#q2").hide();
	});


$("#btnRight").click(function(event){
		$('#next').on('click', getNext);
        $('#prev').on('click', getPrev);
	});

 $("#btnRight").click(function(event){
		$("#q2").show();
		$("#welcome").hide();
	});
