$(document).ready(function() {
    $(".fancybox").fancybox();
});

function showBadges() {
	var badgeArea = "<p>";
	for(var i=0; i<badges.length; i++){
		if(badges[i].acquired == true){
			badgeArea += badges[i].name + "</p>" + badges[i].image + "<br>";
		};
	};
	console.log(badgeArea);
	document.getElementById("badgeInfo").innerHTML = badgeArea;
};

$('#badgeField').click(showBadges());