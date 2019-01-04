import BoxFrameVue from './index.vue';

const BoxFrame = {
	install : function(Vue){
		Vue.component('box-frame',BoxFrameVue)
	}
};

export default BoxFrame;
