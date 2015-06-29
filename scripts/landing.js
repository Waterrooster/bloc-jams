

var point = document.getElementsByClassName('point');


function revealPoint(i)
{
	point[i].style.opacity = 1;
	point[i].style.transform  = 'scaleX(1) translateY(0)';
	point[i].style.msTransform = 'scaleX(1) translateY(0)';
	point[i].style.WebkitTransform = 'scaleX(1) translateY(0)';
}
for(var i = 0; i< point.length;i++)
{
	revealPoint(i);
}