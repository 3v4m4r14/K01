var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            pageIdx: 0,
            uusTeisteKohta: false,
            alaealineLaps: false,
            valitud: "",
            otherPeople: [{
                name: "",
                surname: "",
                code: "",
                email: "",
                phoneNumber: "",
                isUnderaged: false,
                guardian: {
                    name: "",
                    surname: "",
                    code: ""
                },
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
        addElement: function () {
            this.otherPeople.push({
                name: "",
                surname: "",
                code: "",
                email: "",
                phoneNumber: "",
                isUnderaged: false,
                guardian: {
                    name: "",
                    surname: "",
                    code: ""
                },
                lastForeignHome: "",
                foreignCode: "",
                nationality: "",
                nativeLanguage: "",
                education: "",
                socialStatus: ""
            });
        },
        removeElement: function (index) {
            this.otherPeople.splice(index, 1);
        },
        nextPage: function () {
            if (this.pageIdx < 5) {
                this.pageIdx += 1;
            }
        },
        previousPage: function () {
            if (this.pageIdx > 0) {
                this.pageIdx -= 1;
            }
        }
    }
});
