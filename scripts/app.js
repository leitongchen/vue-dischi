new Vue({
    el: "#app",
    data: {
        albumsList: [],
        sortedList: [],

        genreList: [],
    },
    methods: {
        
    },
    mounted() {

        let ajaxList = [];

        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {

            ajaxArrayLength = resp.data.response.length;

            ajaxList = [...resp.data.response]

            if (ajaxList.length === ajaxArrayLength) {
                this.albumsList = ajaxList;

                // ordina gli album per data nell'array this.sortedList
                this.sortedList = [...this.albumsList]

                this.sortedList.sort(function (a, b) {

                    a.year = parseInt(a.year)
                    b.year = parseInt(b.year)

                    return b.year - a.year;
                });

                // salvo i generi nella variabile genreList
                let genreMusicList = [];

                this.sortedList.forEach((album) => {

                    if (genreMusicList.length == 0 || !genreMusicList.includes(album.genre)) {
                        genreMusicList.push(album.genre)
                    }
                })
                this.genreList = genreMusicList;
                console.log(genreMusicList);
            };
        });



    }
})