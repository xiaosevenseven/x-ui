import { App } from "vue";

export function withInstall(comp) {
    comp.install = function(app: App) {
        const { name } = comp;
        app.component(name, comp);
    }    
    return comp;
}
