
const pb = document.querySelectorAll('.photo-cube');

pb.forEach(x => 
	x.addEventListener('mousedown', (e)=> {
		const cx = x.offsetWidth/2;
		const cy = x.offsetHeight/2;
		const xPos = e.offsetX;
		const yPos = e.offsetY;
		const dist = Math.round(Math.sqrt(Math.pow(Math.abs(xPos-cx),2) + 
					 Math.pow(Math.abs(yPos-cy),2)));
		const dir = Math.round(Math.atan(Math.abs(yPos-cy)/Math.abs(xPos-cx))/(Math.PI/180));
		
		
		
		
		
		console.log(xPos, yPos, cx, cy, dist,dir);
		
		
	})
);

//create function that rotates cube taking info from the mouse