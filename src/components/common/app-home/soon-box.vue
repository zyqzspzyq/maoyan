<template>
    <div class="soon-box">
        <p>{{info.id}}</p>
        <soon-item
            v-for = "itemd in info.content"
            :key = "itemd.id"
            :info = "itemd"
        ></soon-item>
    </div>
</template>
<script>
import SoonItem from '@components/common/app-home/soon-item'
export default {
    props: ['info'],
    components: {
        SoonItem
    }

}
</script>
<style lang="scss">
    .soon-box{
        font-size: 14px;
        color: #777;

    }
</style>

