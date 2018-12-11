import BScroll from 'better-scroll'

const scroll = ({
    el,
    handle,
    onscroll
}) =>{
    let scroll = new BetterScroll(el,{
        probeType: 2,
        pullUpload: {
            threshold:50
        },
        click: true
    })
}