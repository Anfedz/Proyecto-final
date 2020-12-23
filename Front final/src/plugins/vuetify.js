import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: { dark:true,
            light: {
                primary: "#324851",
                secondary: "#86AC41",
                accent: "#34675C",
                error: "#FF5252",
                info: "#7DA3A1",
                success: "#4CAF50",
                warning: "#FFC107"
            }
        }
    },
    lang: {
        locales: { es },
        current: "es"   
    },
    icons: {
        iconfont: "md"
    }
});