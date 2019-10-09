const KEYS ={
	LEFT: 37,
	RIGHT: 39,
	SPACE: 32
},

let game ={
	running: true,
	ctx: null,
	platform: null,
	ball: null,
	blocks: [],
	score: 0,
	rows: 6,
	cols: 10,
	width: 1280,
	height: 720,
	sprites: {
		background: null,
		ball: null,
		platform: null,
		block: null
	},
	sounds: {
		bump: null,
	},
	initCanvasSize() {
		let realWidth = window.innerWidth * window.devicePixeRatio;
		let realHeight = window.innerHeight * window.devicePixeRatio;
		let maxHeight = this.height;
		let maxWidht = this.width;
		this.height = Math.min (Math.floor(maxWidht * realHeight / realWidth), maxHeight);
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	},
	init() {
		this.canvas = document.getElementById('mycanvas');
		this.ctx = this .canvas.getContext("2d");
		this.initCanvasSize();
		this.setTextFont();
		this.setEvents();
	},
	setTextFont() {
		this.ctx.font = "28px Arial";
		this.ctx.fillStyle = "#FFFFFF";
	},
	setEvents() {
		window.addEvenListener("keydown", e => {
			if (e.keyCode ===KEYS.SPACE) {
				this.platform.fire();
			}else if (e.keyCode === KEYS.LEFT || e.keyCode === KEYS.RIGHT)	{
				this.platform.start(e.keyCode);
			}
			});
		window.addEvenListener("keyup", e => {
			this.platform.stop();
		});
		},

		preload(callback) {
			let loaded = 0;
			let required = Object.keys(this.sprites).length;
			required = Object.keys(this.sounds).length;
 
			let onResourceLoad = () => {
				++loaded;
				if(loaded >= required) {
					callback();
				}
			};

			this. preloadSprites(onResourceLoad);
			this. preloadAudio(onResourceLoad);
		},

	}	
	
