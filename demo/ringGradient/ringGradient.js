(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (factory((global.d3 = global.d3 || {})));
}(this,function(exports){
	function RingGradient(options){
		if(options.svg instanceof d3.selection){
			this.container = options.svg;
		}else{
			if(d3.select(options.svg) instanceof d3.selection){
				this.container = d3.select(options.svg)
			}else{
				throw new Error("container unavailable !");
			}
		}
		this.cx = options.cx?options.cx:0;
		this.cy = options.cy?options.cy:0;
		this.r = options.radius?options.radius:100;
		this.color = options.color?options.color:d3.scaleSequential(d3.interpolate("blue","red"));
		this.ringWidth = options.ringWidth?options.ringWidth:5;
		this.dotR = options.dotRadius?options.dotRadius:10;
		this.dotW = options.dotStrokeWidth?options.dotStrokeWidth:3;
		this.dotFill = options.dotFill?options.dotFill:"#FFF";
		this.t = 0;
		this.flag = false;

		this.init = function(){
			var defs = this.container.append("defs"),
				linear1 = defs.append("linearGradient").attr("id","ringGradient_linear_1"),
				linear2 = defs.append("linearGradient").attr("id","ringGradient_linear_2");
			linear1.append("stop").attr("offset","0%").attr("stop-color",this.color(0));
			linear1.append("stop").attr("offset","100%").attr("class",".ringGradient_linear_1_stop")
				.attr("stop-color",this.color(this.t));
			linear2.append("stop").attr("offset","0%").attr("stop-color",this.color(0.5));
			linear2.append("stop").attr("offset","100%").attr("class",".ringGradient_linear_2_stop")
				.attr("stop-color",this.color(0.5));
			this.g = this.container.append("g")
				.attr("class","ringGradient_g")
				.attr("transform","translate("+this.cx+","+this.cy+")")
			this.ring1 = this.g.append("path").attr("class",".ringGradient_ring_1")
				.attr("stroke","url(#ringGradient_linear_1)")
				.attr("stroke-width",this.ringWidth)
			this.ring2 = this.g.append("path").attr("class",".ringGradient_ring_2")
				.attr("stroke","url(#ringGradient_linear_2)")
				.attr("stroke-width",this.ringWidth)
			this.dot = this.g.append("circle")
				.attr("class","ringGradient_dot")
				.attr("r",this.dotR)
				.attr("cx",0)
				.attr("cy",-this.r)
				.attr("stroke-width",this.dotW)
				.attr("fill",this.dotFill)
				.attr("stroke",this.color(0))
		}
		this.update = function(t){
			if(t>=1){
				this.ring2.attr("d","M"+0+" "+this.r+"A"+this.r+" "+this.r+" "+180+" 0 1 "+0+" "+(-this.r));
				this.dot.attr("cx",0).attr("cy",-this.r).attr("stroke",this.color(1))
			}
		}


		this.init();

		return this;
	}


	exports.RingGradient = RingGradient;
}))