Vue.use(VueMaterial.default);

let app = new Vue({
    el: '#app',
    data: {
        menuVisible: false,
        bot: {
        }
    },

    created: function () {
        $.getJSON("http://secret.re:8080").done(function (data) {
            app.$data.bot = data;
        }).fail(function () {
            alert("Failed to get server status JSON");
        });
    }
});
