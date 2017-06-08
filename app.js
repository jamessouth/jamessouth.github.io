let oo;
let g = 0;
let h = 0;
const pb = document.querySelectorAll('.photo-cube');

function rotateCube(e){
	const pi = Math.PI;
	const cx = this.offsetWidth/2;
	const cy = this.offsetHeight/2;
	const xPos = e.offsetX;
	const yPos = e.offsetY;
	const xs = xPos-cx;
	const ys = yPos-cy;
	const maxDist = Math.ceil(Math.sqrt(2) * cx);
	const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xs),2) + 
				 Math.pow(Math.abs(ys),2)));
	const distDiff = maxDist - dist;
	const speed = Math.round((-0.000045 * Math.pow((distDiff - 311), 2) + 5)*1000)/1000;
	let dir = Math.atan(Math.abs(ys)/Math.abs(xs));
	
	// /(Math.PI/180)
	
	if(xs < 0 && ys >= 0){
		dir = pi - dir;
	} else if(xs < 0 && ys < 0){
		dir += pi;
	} else if(xs >= 0 && ys < 0){
		dir = pi - dir + pi;
	}
	
	const xDeg = Math.round(Math.sin(dir));
	const yDeg = Math.round(Math.cos(dir));
	
	oo = window.getComputedStyle(this);
	
	// console.log(oo);
	// cos y
	// sin x
	
	g+=190*xDeg;
	h+=390*yDeg;
	this.style.transitionDuration = `${speed}s`;
	this.style.transform = `rotateX(${g}deg) rotateY(${h}deg)`;
	
	
	console.log(dir,xDeg, yDeg);

};

pb.forEach(pb => 
	pb.addEventListener('mousedown', rotateCube)
);

//create function that rotates cube taking info from the mouse