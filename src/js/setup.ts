import { MelvorSocial } from './melvor-social-main.js';
import { MyComponent } from './vue/my-component.js';
import '../css/styles.css';

export async function setup(ctx : ModContext) {
    const melvorSocial = new MelvorSocial();
    ctx.onInterfaceReady(() => {
        //ui.create(MyComponent({ open: false }), document.getElementById('main-container'));
    });
}