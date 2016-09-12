var leftNav = document.getElementById('left');
var rightNav = document.getElementById('right');

rightNav.onclick = function(event){
	event.preventDefault();
	var width = document.getElementById('slider').offsetWidth;
	var moveIt = document.getElementById('slider_view');
	var change = getComputedStyle(moveIt);
	var changeIt = change.marginLeft;
	if(changeIt == '0px'){
		moveIt.style.marginLeft = width*-1 +'px';
	}else if(changeIt == (width*-1)+'px'){
		moveIt.style.marginLeft = width*-2 +'px';
	}
}

leftNav.onclick = function(event){
	event.preventDefault();
	var width = document.getElementById('slider').offsetWidth;
	var moveIt = document.getElementById('slider_view');
	var change = getComputedStyle(moveIt);
	var changeIt = change.marginLeft;
	if(changeIt == (width*-2)+'px'){
		moveIt.style.marginLeft = width*-1 +'px';
	}else if(changeIt == (width*-1)+'px'){
		moveIt.style.marginLeft = 0 +'px';
	}
}


// read more
var more = document.getElementById('readMore');

more.onclick = function(event){
	document.getElementById('texty').style.height = "auto";
	document.getElementById('shadovy').style.display = "none";
	more.style.display = "none";
};







































