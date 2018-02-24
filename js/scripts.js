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
                code: "",
                email: "",
                phoneNumber: "",
                lastForeignHome: "",
                foreignCode: "",
                nationality: "",
                nativeLanguage: "",
                education: "",
                socialStatus: ""
            }]
        }
    }, 
    methods: {
        addElement: function() {
            this.otherPeople.push({
                name: "",
                surname: "",
                code: "",
                email: "",
                phoneNumber: "",
                lastForeignHome: "",
                foreignCode: "",
                nationality: "",
                nativeLanguage: "",
                education: "",
                socialStatus: ""
            });
        },  
        removeElement: function(index) {
            this.otherPeople.splice(index, 1);
        }
    }
});
