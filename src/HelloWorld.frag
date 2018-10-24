// 2018.10.17.
// Hello, World
#ifdef GL_ES
precision mediump float; // 浮動小数点の精度の指定
#endif

// 関数はmain()の前に定義する
vec4 red() {
	return vec4(1.0, 0.0, 0.0, 1.0);
}
// vecの書き方は案外柔軟
vec4 blue() {
	return vec4(vec3(0.0, 0.0, 1.0), 1.0);
}

// 組み込み変数に色を指定する
void main() {
	gl_FragColor = vec4(0.2,0.4,0.6,1.0); // RGBA
	// gl_FragColor = red();
	// gl_FragColor = blue();
}
