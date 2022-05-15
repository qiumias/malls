import { debounce } from './utils'
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let refresh = debounce(this.$refs.scroll.refresh(), 100)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}

// export const backTopMixin = {
//     data() {
//         return {
//             // 控制数据：是否显示 BackTop 按钮，默认不显示
//             isShowBackTop: false,
//         }
//     },
//     methods: {
//         backClick() {
//             this.$refs.scroll.scrollTo(0, 0, 500)
//         },
//         contentScroll(position) {
//             // 判断BackTop是否显示
//             this.isShowBackTop = (-position.y) > 1000
//         },
//     },
//     components: {
//         BackTop
//     }
// }