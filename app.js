
const pb = document.querySelectorAll('.photo-cube');
// const cc = document.querySelectorAll('.cube-container');
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
// let zStart = 0;

function rotate(e){
	// console.log(isRotating);
	if(!isRotating) return;
	const xPos = e.x + window.scrollX;
	const yPos = e.y - 48 + window.scrollY;
	const xs = xPos - xStart;
	const ys = yPos - yStart;
	
	
	// console.log(window.getComputedStyle(pb[0]));
	
	pb[0].style.transform = `rotateX(${xs}deg) rotateY(${ys}deg)`;
	
	// const cx = this.offsetParent.clientWidth/2;
	// const cy = this.offsetParent.clientHeight/2;

	
	// const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xs),2) + 
				 // Math.pow(Math.abs(ys),2)));
	
	
	
	// let slope = Math.round(((ys)/(xs)) * 1000) / 1000 || 0;
	
	
	// console.log();
	
	console.log(xPos, yPos, xStart, yStart);
	
	// console.log(isRotating);
	
};

hold.addEventListener('mousedown', (e) => {
		isRotating = true;
		xStart = e.x + window.scrollX;
		yStart = e.y - 48 + window.scrollY;
		// console.log(e.x, e.y-48+window.scrollY);
		
		// console.log(e.target.offsetParent.offsetParent);
		console.log(xStart, yStart);
	});
// body.addEventListener('mouseup', () => isRotating = false);

hold.addEventListener('mousemove', rotate);
	
hold.addEventListener('mouseup', () => isRotating = false);
hold.addEventListener('mouseleave', () => isRotating = false);



// for(let i = 0; i < cc.length; i++){
	
	
	
	// cc[i].addEventListener('mousemove', rotate);
	
	// cc[i].addEventListener('mouseup', () => isRotating = false);
	// cc[i].addEventListener('mouseout', () => isRotating = false);
	
// }

	
	// [lastX, lastY] = [e.offsetX, e.offsetY];










