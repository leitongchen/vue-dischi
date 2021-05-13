new Vue({
    el: "#app",
    data: {
        albumsList: [],
        sortedList: [],
        filteredList: [],

        genreList: [],

        userInput: "",
    },
    computed: {
        albumsFiltered() {
            // console.log(event)

            if (!this.userInput && this.sortedList) {
                return this.sortedList
            }
            // console.log(this.userInput)
            return  this.sortedList.filter((album) => album.genre.toLowerCase() === this.userInput.toLowerCase())
        }
    },
    methods: {
        createGenreList() {
             // salvo i generi nella variabile genreList
             let genreMusicList = [];

             this.sortedList.forEach((album) => {

                 if (!genreMusicList.includes(album.genre)) {
                     genreMusicList.push(album.genre)
                 }
             })
             this.genreList = genreMusicList;
            // console.log(genreMusicList);
        },
        // albums sort by date
        sortAlbumsList() {
            // ordina gli album per data nell'array this.sortedList
            this.sortedList = [...this.albumsList]

            this.sortedList.sort(function (a, b) {

                a.year = parseInt(a.year)
                b.year = parseInt(b.year)

                return b.year - a.year;
            });
        },

        /*
        albumsFilteredMeth(event) {
            // console.log(event)
            let currentEl = event.currentTarget

            if (!currentEl.value) {

                this.filteredList = this.sortedList
                return 
            }

            const filteredList = this.sortedList.filter((album) => album.genre.toLowerCase() === currentEl.value.toLowerCase())

            this.filteredList = [...filteredList]

        }
        */
    },

    mounted() {

        let ajaxList = [];

        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {

            ajaxArrayLength = resp.data.response.length;

            ajaxList = [...resp.data.response]

            if (ajaxList.length === ajaxArrayLength) {
                this.albumsList = ajaxList;
  
                this.sortAlbumsList()
                this.createGenreList()
            };
        });



    }
})