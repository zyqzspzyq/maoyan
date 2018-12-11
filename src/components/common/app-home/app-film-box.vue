<template>
    <div class="app-film-box">
        <div class="film-list">
            <app-film 
                v-for = "movie in movieList"
                :key = "movie.id"
                :info = "movie"
            ></app-film>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import AppFilm from '@components/common/app-home/app-film'
//let wrapper = document.querySelector('.app-film-box')
//let scroll = new BScroll(wrapper)
export default {

    components: {
        AppFilm
    },
    props: ['type'],
    data() {
        return {
            movieList: []
        }
    },
    async created (){
        let url = this.type
        
        let result = await this.$http ({
            //url: '/my/ajax/' + url ,
            url: '/my/ajax/' + url ,
            // url: '/my/v4/api/film/now-playing?page=1&count=5'
            
        })
       // this.movieList = JSON.parse(JSON.stringify(result)).movieList
       this.movieList = result.data.movieList;
   
    },
   

}
</script>
<style lang="scss">
    .app-film-box{
       position:absolute;
        width:100%;
        height:100%;
        overflow:auto;
        display: block;
        .film-list{
            margin-top:0;
            background: #f5f5f5;

        }
    }
</style>

