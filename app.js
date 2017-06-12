
const pb = document.querySelectorAll('.photo-cube');
const cc = document.querySelectorAll('.cube-container');
// const body = document.querySelector('body');
// const main = document.querySelector('main');


// const cubes = Array.from(cc);

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
let xStart;
let yStart;
let xEnd;
let yEnd;
// let xs;
// let ys;
// let oldXS;
// let oldYS;
let whichPB = 0;

let rotObj = {
	0 : {
		x : 0,
		y : 0,
		xs : 0,
		ys : 0
	},
	
	1 : {
		x : 0,
		y : 0,
		xs : 0,
		ys : 0
	}
	
};

function rotate(e){
	
	if(!isRotating) return;
	const xPos = e.x + window.scrollX;
	const yPos = e.y - 48 + window.scrollY;
	
	
	// if(xEnd){
			
		rotObj[whichPB].xs = xPos - xStart + rotObj[whichPB].x;
		rotObj[whichPB].ys = yPos - yStart + rotObj[whichPB].y;
			
	// } else {
	
		// rotObj[whichPB].xs = xPos - xStart;
		// rotObj[whichPB].ys = yPos - yStart;
		
	
	// }
	
	pb[whichPB].style.transform = `rotateX(${-rotObj[whichPB].ys}deg) rotateY(${rotObj[whichPB].xs}deg)`;
	
	console.log(xPos, yPos, xStart, yStart, rotObj[whichPB].xs, rotObj[whichPB].ys, 'position, start, mvmt');
	// console.log(xs, ys);
	
	
};

hold.addEventListener('mousedown', (e) => {
	
		
		
		const cubeZeroCtr = { x : (cc[0].offsetLeft + cc[0].offsetWidth/2), 
					  y : (cc[0].offsetTop - 48 + cc[0].offsetHeight/2)
					}
					
		const cubeOneCtr = { x : (cc[1].offsetLeft + cc[1].offsetWidth/2), 
					  y : (cc[1].offsetTop - 48 + cc[1].offsetHeight/2)
					}

		console.log(cubeZeroCtr.x, cubeZeroCtr.y, cubeOneCtr.x, cubeOneCtr.y, 'centers of pbs');	
		
		xStart = e.x + window.scrollX;
		yStart = e.y - 48 + window.scrollY;
		
		
		const distFromCubeZero = Math.round(Math.sqrt(Math.pow(Math.abs(cubeZeroCtr.x - xStart),2) + Math.pow(Math.abs(cubeZeroCtr.y - yStart),2)));
		
		const distFromCubeOne = Math.round(Math.sqrt(Math.pow(Math.abs(cubeOneCtr.x - xStart),2) + Math.pow(Math.abs(cubeOneCtr.y - yStart),2)));
		
		console.log(distFromCubeZero, distFromCubeOne, 'dists from pbs');
		
		if(distFromCubeZero <= distFromCubeOne){
			whichPB = 0;
		} else {
			whichPB = 1;
		}
		
		
		
		
		
		isRotating = true;
		console.log(xStart, yStart, whichPB, 'start, which pb');
	});


hold.addEventListener('mousemove', rotate);
	
hold.addEventListener('mouseup', (e) => {
	
	
	isRotating = false;
	xEnd = e.x + window.scrollX;
	yEnd = e.y - 48 + window.scrollY;
	rotObj[whichPB].x = rotObj[whichPB].xs || 0;
	rotObj[whichPB].y = rotObj[whichPB].ys || 0;
	
	// oldXS = xs || 0;
	// oldYS = ys || 0;
	console.log(xEnd, yEnd, rotObj[whichPB].x, rotObj[whichPB].y, 'end, rotation values');
	console.log('\n\n');
});


hold.addEventListener('mouseleave', (e) => {
	
	isRotating = false;
	xEnd = e.x + window.scrollX;
	yEnd = e.y - 48 + window.scrollY;
	rotObj[whichPB].x = rotObj[whichPB].xs || 0;
	rotObj[whichPB].y = rotObj[whichPB].ys || 0;
	
	// oldXS = xs || 0;
	// oldYS = ys || 0;
	console.log(xEnd, yEnd, rotObj[whichPB].x, rotObj[whichPB].y, 'end, rotation values');
	console.log('\n\n');
	console.log('mouse left');
	
	
	
	
	
	
	
});



// for(let i = 0; i < cc.length; i++){
	
	
	
	// cc[i].addEventListener('mousemove', rotate);
	
	// cc[i].addEventListener('mouseup', () => isRotating = false);
	// cc[i].addEventListener('mouseout', () => isRotating = false);
	
// }

	
	// [lastX, lastY] = [e.offsetX, e.offsetY];










