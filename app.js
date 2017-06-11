
const pb = document.querySelectorAll('.photo-cube');
const cc = document.querySelectorAll('.cube-container');
// const body = document.querySelector('body');
// const main = document.querySelector('main');

const hold = document.querySelector('.hold');

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

//1em 2em 5em 4em


// let tt = document.querySelectorAll('img');

// tt.forEach(t => 
	// t.addEventListener('mousedown', (e) => {
		// // e.preventDefault();
		// return false;
	// }));

// main.addEventListener('mousedown', (e) => {e.preventDefault();});
// body.addEventListener('mousedown', (e) => {e.preventDefault();});	
	


let isRotating = false;
let xStart = 0;
let yStart = 0;
let xEnd;
let yEnd = 0;
let xs;
let ys;
let oldXS;
let oldYS;
let whichPB;

function rotate(e){
	
	if(!isRotating) return;
	const xPos = e.x + window.scrollX;
	const yPos = e.y - 48 + window.scrollY;
	
	
	if(xEnd){
			
		xs = xPos - xStart + oldXS;
		ys = yPos - yStart + oldYS;
			
	} else {
	
		xs = xPos - xStart;
		ys = yPos - yStart;
		
	
	}
	
	pb[0].style.transform = `rotateX(${-ys}deg) rotateY(${xs}deg)`;
	
	console.log(xPos, yPos, xStart, yStart, xs, ys);
	
	
};

hold.addEventListener('mousedown', (e) => {
		isRotating = true;
	
		
		
		xStart = e.x + window.scrollX;
		yStart = e.y - 48 + window.scrollY;
		
		
		console.log(xStart, yStart);
	});


hold.addEventListener('mousemove', rotate);
	
hold.addEventListener('mouseup', (e) => {
	
	
	isRotating = false;
	xEnd = e.x + window.scrollX;
	yEnd = e.y - 48 + window.scrollY;
	oldXS = xs;
	oldYS = ys;
	console.log(xEnd, yEnd, oldXS, oldYS);
	
	});


hold.addEventListener('mouseleave', () => isRotating = false);



// for(let i = 0; i < cc.length; i++){
	
	
	
	// cc[i].addEventListener('mousemove', rotate);
	
	// cc[i].addEventListener('mouseup', () => isRotating = false);
	// cc[i].addEventListener('mouseout', () => isRotating = false);
	
// }

	
	// [lastX, lastY] = [e.offsetX, e.offsetY];










