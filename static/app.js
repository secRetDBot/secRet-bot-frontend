Vue.use(VueMaterial.default);

let app = new Vue({
    el: '#app',
    data: {
        menuVisible: false,
        cards: [{test: "omg", blah: "aaa"}, {test: "lol", blah: "bbb"}],

        bot: {
            "bot_status": {
                "now": "23:30:19",
                "uptime": "0:00:05",
                "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Icons8_flat_clock.svg/2000px-Icons8_flat_clock.svg.png"
            },
            "git_status": {
                "updated": "2018-01-22 18:36:22",
                "status": "good",
                "icon": "https://avatars3.githubusercontent.com/u/1153419?s=400&v=4"
            },
            "mongo_status": {
                "host": "igio90-desktop",
                "version": "3.4.7",
                "process": "mongod",
                "pid": 921,
                "db": "secret",
                "collections": 3,
                "objects": 340,
                "indexes": 7,
                "storage_size": 118784,
                "index_size": 204800,
                "icon": "https://www.todobackend.com/images/logos/mongodb.png"
            }
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
