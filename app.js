
const pb = document.querySelectorAll('.photo-cube');

// function rotateCube(e){
	// const pi = Math.PI;
	// const cx = this.offsetWidth/2;
	// const cy = this.offsetHeight/2;
	// const xPos = e.offsetX;
	// const yPos = e.offsetY;
	// const xs = xPos-cx;
	// const ys = yPos-cy;
	// const maxDist = Math.ceil(Math.sqrt(2) * cx);
	// const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xs),2) + 
				 // Math.pow(Math.abs(ys),2)));
	// const distDiff = maxDist - dist;
	// const speed = Math.round((-0.000045 * Math.pow((distDiff - 311), 2) + 5)*1000)/1000;
	// let dir = Math.atan(Math.abs(ys)/Math.abs(xs));
	// const rando = (Math.floor(Math.random()*180) + 1);
	
	
	// if(xs < 0 && ys >= 0){
		// dir = pi - dir;
	// } else if(xs < 0 && ys < 0){
		// dir += pi;
	// } else if(xs >= 0 && ys < 0){
		// dir = pi - dir + pi;
	// }
	
	// const xDeg = Math.round(Math.sin(dir));
	// const yDeg = Math.round(Math.cos(dir));
	
	// let gg = parseInt(this.dataset.x, 10);
	// let hh = parseInt(this.dataset.y, 10);
	
	// gg += rando*xDeg;
	// hh += rando*yDeg;
	
	// this.setAttribute('data-x', gg);
	// this.setAttribute('data-y', hh);
	
	// console.log(gg,hh);
	// // console.log(gg,hh, typeof hh);
	
	// console.log(this.dataset.x);
	// console.log(this.dataset.y);
	
	// // cos y
	// // sin x
	
	
	// this.style.transitionDuration = `${speed}s`;
	// this.style.transform = `rotateX(${gg}deg) rotateY(${hh}deg)`;
	
	
	// console.log(dir,xDeg, yDeg, rando);

// };

// pb.forEach(pb => 
	// pb.addEventListener('mousedown', rotateCube)
// );

let tt = document.querySelectorAll('img');

tt.forEach(t => 
	t.addEventListener('mousedown', (e) => {
		e.preventDefault();
	}));


let isRotating = false;
let xStart = 0;
let yStart = 0;
let zStart = 0;

function rotate(e){
	if(!isRotating) return;
	const xPos = e.offsetX;
	const yPos = e.offsetY;
	const xs = xPos - xStart;
	const ys = yPos - yStart;
	
	const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xs),2) + 
				 Math.pow(Math.abs(ys),2)));
	
	
	
	let slope = Math.round(((ys)/(xs)) * 1000) / 1000 || 0;
	
	
	
	
	// console.log(xPos, yPos, xStart, yStart, slope, xs, ys, dist);
	// console.log(isRotating);
	
};


for(let i = 0; i < pb.length; i++){
	
	pb[i].addEventListener('mousedown', (e) => {
		isRotating = true;
		xStart = e.offsetX;
		yStart = e.offsetY;
		
		
		console.log(xStart, yStart, zStart);
	})
	
	pb[i].addEventListener('mousemove', rotate);
	
	pb[i].addEventListener('mouseup', () => isRotating = false);
	pb[i].addEventListener('mouseout', () => isRotating = false);
	
}

	
	// [lastX, lastY] = [e.offsetX, e.offsetY];










