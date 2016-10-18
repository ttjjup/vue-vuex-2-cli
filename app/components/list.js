import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {};
    },
    computed: mapGetters([
        'isFetching','items'
    ]),
    methods: mapActions([
        'getList'
    ]),
    created() {
        this.getList();
    },
    render(h) {
        return (
            <div>
                {this.items.map((item,idx)=> <p>{item}</p>)}
            </div>
        )
    }
}
