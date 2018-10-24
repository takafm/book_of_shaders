#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main() {
	vec2 st = gl_FragCoord.xy/resolution;
	gl_FragColor = vec4(abs(sin(time))*st.x,abs(cos(time))*st.y,mouse.x,1.0);
}
