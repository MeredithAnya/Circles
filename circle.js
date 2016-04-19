(function() {
	if (typeof Circles === "undefined"){
		window.Circles = {};
	}

	//radius will grow when clicked
	//color will be randomly generated

	var Circle = Circles.Circle = function(options){
		this.context = options.ctx;
		this.pos = options.pos;
		this.radius = options.radius;
		this.color = options.color;
		//maybe add trailing circles like spots in dont
		//pop the bubble

	}

	Circle.prototype.draw = function() {
		var ctx = this.context;

		if (this.radius < window.innerWidth/2){

			
			ctx.beginPath();
			ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
			ctx.linewidth = 10;
			ctx.strokeStyle = this.color;
			ctx.stroke();

			var that = this;
			if ( 30 < this.radius < 40){
				setTimeout(function() {
					that.radius += 10;
					var colors = ["blue", "green", "pink"];
					that.color = colors[Math.floor(Math.random()*colors.length)];
					that.draw();
					console.log(that.radius);
				}, 20);
			}
		}else {
			// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		}	

	};











})();