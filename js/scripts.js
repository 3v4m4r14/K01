var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            uusTeisteKohta: true,
            alaealineLaps: false,
            valitud: "",
            otherPeople: [{
                name: 'Aa',
                surname: 'Aa aaaaa',
                code: 12
            }, {
                name: 'Bb',
                surname: 'Bb aaaaa',
                code: 13
            }]
        }
    }, 
    methods: {
        addElement: function() {
            this.otherPeople.push({
                name: 'Rr',
                surname: 'Rr aaaaa',
                code: 555
            });
        },  
        removeElement: function(index) {
            this.otherPeople.splice(index, 1);
        }
    }
});
