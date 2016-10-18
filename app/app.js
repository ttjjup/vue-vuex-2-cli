export default {
    data() {
        return {};
    },
    render(h) {
        return(
            <div>
                <div style="margin:0 auto; width:400px; height:100px;">
                    <router-link to="/home">Home</router-link>
                    <router-link to="/list">List</router-link>
                </div>
                <transition name="router" mode="out-in">
                    <router-view class="view"></router-view>
                </transition>
            </div>
        )
    }
}
