new Vue({
    el: "#app",
    data: {
        albumsList: [],
    },
    methods: {

    },
    mounted() {
        let ajaxArrayLength = 1;

        for (let i=0; i < ajaxArrayLength; i++) {

            let ajaxList = []

            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {
                
                // console.log(resp.data.response.length);

                ajaxArrayLength = resp.data.response.length;
                console.log(ajaxArrayLength);

                ajaxList = resp.data.response;
                // console.log(ajaxList);

                if (ajaxList.length === ajaxArrayLength) {
                    this.albumsList = ajaxList
                   
                    console.log(this.albumsList);
                }

            })

        }

    }
})