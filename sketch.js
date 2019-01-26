function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
	var h = hour();
	var m = minute();
	var s = second();
	let h_map = map(h, 0, 24, 0, height*2/3);
	let m_map = map(m, 0, 60, 0, height*2/3);
	let s_map = map(s, 0, 60, 0, height*2/3);
	fill(255,200,100,100);
	ellipse(1/2*height, 1/3*height, h_map, h_map);
	fill(200,200,255,100);
	ellipse(1/3*height, 2/3*height, m_map, m_map);
	fill(255,200,200,100);
	ellipse(2/3*height, 2/3*height, s_map, s_map);
}