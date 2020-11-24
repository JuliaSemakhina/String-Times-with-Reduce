const pressed = [];
const secretCode = 'julia';

window.addEventListener('keyup', (e)=> {
	console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if(pressed.join("").includes(secretCode)){
		console.log("Yeaah!");
		cornify_add();
	}
	console.log(pressed);
})

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort( (a,b)=> strip(a) > strip(b) ? 1 : -1);
console.log(sortedBands);

document.querySelector('#bands').innerHTML = sortedBands.map(elem => `<li>${elem}</li>`).join('');
