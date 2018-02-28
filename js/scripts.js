var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            pageIdx: 0,
            progress: 0,
            containsOtherPeople: false,
            ownershipSelection: "",
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
                this.progress = this.pageIdx / 5 * 100;
            }
        },
        previousPage: function () {
            if (this.pageIdx > 0) {
                this.pageIdx -= 1;
                this.progress = this.pageIdx / 5 * 100;
            }
        }
    }
});
