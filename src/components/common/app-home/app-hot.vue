<template>
    <section class="app-hot">
        <app-film-box type="movieOnInfoList"></app-film-box>
    </section>
</template>
<script>

import AppFilmBox from '@components/common/app-home/app-film-box'


export default {
    
    components: {
        AppFilmBox
    }
}
</script>
<style lang="scss">
    .app-hot{
        height:623px;
        position:absolute;
        overflow: hidden;
        width:100%;
        display: block;
        font-size: 14px;
        color:#777;

    }
</style>

