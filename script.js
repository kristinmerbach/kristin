function highlightProjects(event, p) {
	const et = event.target;
	let ho = et.classList.contains('highlighted');
	et.classList.toggle('highlighted');
	
	const highlights = document.querySelectorAll('.cloud span');
	const techs = document.querySelectorAll('.projects li');
	
	for (var i = 0; i < highlights.length; i++) {
		if (highlights[i] !== et) {
			highlights[i].classList.remove('highlighted');
		}
	}
	
	let highlighted = [];
	for (var i = 0; i < techs.length; i++) {
		if (techs[i].dataset.tech && techs[i].dataset.tech.includes(p) && ho == false) {
			highlighted.push(techs[i])
			techs[i].classList.add('highlighted');
		} else {
			techs[i].classList.remove('highlighted')
		}
	}
	if (highlighted[0]) {
		highlighted[0].scrollIntoView();
	}
	
}

//moving eyes
const leyeball = document.querySelector('#leyeball');
const leyeballBB = leyeball.getBBox();
const lew = leyeballBB.width;

const leye = document.querySelector('#lpupil');
const leyeBB = leye.getBBox();
const lpw = leyeBB.width;

const leML = leyeballBB.x + (lpw/2);
const leMR = (leyeballBB.x + leyeballBB.width) - (lpw/4);


const reyeball = document.querySelector('#reyeball');
const reyeballBB = reyeball.getBBox();
const rew = reyeballBB.width;
const reye = document.querySelector('#rpupil');
const reyeBB = reye.getBBox();
const rpw = reyeBB.width;
const reML = reyeballBB.x + (rpw/2);
const reMR = (reyeballBB.x + reyeballBB.width) - (rpw/4);

document.addEventListener("mousemove", (e)=> {
	let hP = e.clientX / window.innerWidth;
	
	let lhM = (lew*hP)+leML;
	let rhM = (rew*hP)+reML;      	
	
	if ((lhM) < leML) {
		leye.style.cx = `${leML}`;
	} else if (lhM > leMR) {
		leye.style.cx = `${leMR}`;
	} else {
		leye.style.cx = `${lhM}`;
	}

	if ((rhM) < reML) {
		reye.style.cx = `${reML}`;
	} else if (rhM > reMR) {
		reye.style.cx = `${reMR}`;
	} else {
		reye.style.cx = `${rhM}`;
	}
});