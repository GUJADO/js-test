const KEYS = {
	LEFT: 37,
	RIGHT: 39,
	SPACE:32
}

let game ={
	running: true,
	ctx: null,
	platform:null,
	ball: null,
	blocks: [],
	csore: 0,
	rows: 4,
	cols: 8,
	width: 640,
	height: 300,
	sprite: {
		background: null,
		ball: null,
		platform: null,
		block: null
	}
	sound: {
		bump: null,
	},
	init(){
		this.ctx = document.getElementById('mycanvas').getContex("2d");
		this.setTextFont();
		this.setEvents();
	},
	setTextFont(){
		this.ctx.font = "20px Arial";
		this.ctx.fillStyle = "#FFFFFF";
	},
	setTextFont(){
		window.addEventListeren("keydown", e => {
			if (e.keyCode === KEYS.SPACE){
				this.platform.fire();
			}else if (e.keyCode === KEYS.LEFT || e.keyCode === KEYS.RIGHT) {
				this.platform.start(e.keyCode);

			}
			
		});
		window.addEventListeren("keyup", e =>{
			this.platform.stop();
		});
	},
	preload(callback) {
		let loaded = 0;
		let required = Object.keys(this.sprites).lenght;
		required = Object.keys(this.sound).lenght;

		let onResourseLoad = () => {
			++loaded;
			if (loaded >= required) {
				callback();
			}
		};

		this.reloadSprites(onResourseLoad);
		this.reloadAudio(onResourseLoad);
	},
	preloadSprite(onResourseLoad){
		for (let key in this.sprite) {
			this.sprite[key] = new Image();
			this.sprite[key].src = "img/" + key + ".png";
			this.sprite[key].addEventListeren("load", onResourseLoad);

		}
	},
	preloadSprite(onResourseLoad){
		for (let key in this.sound) {
			this.sprite[key] = new Audio("sound/" + key + ".mp3");
			this.sprite[key].addEventListeren("canplaythrough", onResourseLoad {once: true});
		}
	},
	create(){
		
	}		





	



 	}
