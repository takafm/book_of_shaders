#ifdef GL_ES
precision mediump float;
#endif

uniform float time;

void main() {
	gl_FragColor = vec4(abs(sin(0.5*time)),sin(time),sin(0.1*time),1.0);
}
