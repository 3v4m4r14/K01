var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            uusTeisteKohta: true,
            alaealineLaps: false,
            otherPeopleCount: 1
        }
    }, 
    methods: {
        increaseCount: function() {
            this.otherPeopleCount++;
        }, 
        decreaseCount: function() {
            this.otherPeopleCount--;
        }
    }
});
