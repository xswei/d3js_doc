window.onload = () => {
	var W = 800,
		H = 800,
		nodes = [{
			name: "张三"
		}, {
			name: "李四"
		}, {
			name: "黄五"
		}, {
			name: "马六"
		}, {
			name: "陈七"
		}, {
			name: "王八"
		}, {
			name: "徐九"
		}],
		links = [{
			source: 0,
			target: 1,
			tag: "朋友"
		}, {
			source: 0,
			target: 2,
			tag: "情侣"
		}, {
			source: 0,
			target: 3,
			tag: "同事"
		}, {
			source: 1,
			target: 4,
			tag: "同学"
		}, {
			source: 1,
			target: 5,
			tag: "领导"
		}, {
			source: 1,
			target: 6,
			tag: "基友"
		}],
		SVG = d3.select("svg").attr("width", W).attr("height", H),
		g = SVG.append("g").attr("class", "force_g"),
		R = 30;

	var simulation = d3.forceSimulation(nodes)
		.force("link", d3.forceLink(links).distance(200))
		.force("charge", d3.forceManyBody().strength(-300))
		.force("center", d3.forceCenter(W / 2, H / 2))
		.on("tick", ticked)

	console.log(nodes);
	console.log(links)

	function ticked() {
		var circle = SVG.select("g.force_g")
			.selectAll("circle").data(nodes);
		circle.exit().remove();
		circle.enter().append("circle").merge(circle);
		circle.attr("cx", (d) => {
				return d.x;
			})
			.attr("cy", (d) => {
				return d.y;
			})
			.attr("radius",R)

		var edges_g = SVG.select("g.force_g")
			.selectAll("g.edges").data(links);
		var enter = edges_g.enter().append("g").attr("class", "edges")

		enter.each(function(d){
			d3.select(this).append("path").attr("class","links")
				.attr("d","M0"+","+0+" L"+getDis(d.source,d.target)+",0")
		})
		edges_g.merge(edges_g)
		edges_g.attr("transform", (d) => {
			return getTransform(d.source,d.target,getDis(d.source,d.target))
		})
	}
	function getDis(s,t){
		return Math.sqrt((s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y));
	}
	function getTransform(source, target, _dis) {
		var r;
		if (target.x > source.x) {
			if (target.y > source.y) {
				r = Math.asin((target.y - source.y) / _dis)
			} else {
				r = Math.asin((source.y - target.y) / _dis)
				r = -r;
			}

		} else {
			if (target.y > source.y) {
				r = Math.asin((target.y - source.y) / _dis)
				r = Math.PI - r;
			} else {
				r = Math.asin((source.y - target.y) / _dis)
				r -= Math.PI;
			}
		}
		r = r * (180 / Math.PI);
		return "translate(" + source.x + "," + source.y + ")rotate(" + r + ")"
	}
}