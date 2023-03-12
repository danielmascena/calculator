export default {
    // state
    data() {
        return {
            a: 0,
            b: 0,
            r: 0
        }
    },
    // actions
    methods: {
        add() {
            this.a = this.r = this.a + this.b;
            this.b = 0;
        }
    }
}