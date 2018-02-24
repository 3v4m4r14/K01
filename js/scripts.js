var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            uusTeisteKohta: true,
            alaealineLaps: false,
            valitud: "",
            otherPeople: [{
                name: "",
                surname: "",
                code: ""
            }]
        }
    }, 
    methods: {
        addElement: function() {
            this.otherPeople.push({
                name: "",
                surname: "",
                code: ""
            });
        },  
        removeElement: function(index) {
            this.otherPeople.splice(index, 1);
        }
    }
});
