SuccessfulValidationMessage = Vue.component('successful-validation-message', (
    {
        template: '<div class="valid-feedback-text">Korras nagu Norras!</div>'
    }
));

var vm = new Vue({
    el: "#app",
    data: function () {
        return {
            pageIdx: 0,
            canChange: true,
            progress: 0,
            containsOtherPeople: false,
            ownershipSelection: "",
            otherPeople: [],
            errors: []
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
            if(this.pageIdx >= 1) {
                console.log('Wow');
                var yks = document.getElementById('yksk6ik');
                if (yks.checkValidity() === true) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                yks.classList.add('was-validated');
                console.log("Olen siin");
            }
            console.log("Hello");
            // TODO: rename
            // TODO: show errors in UI by adding classes and showing feedback text
            this.errors = [];
            if (this.pageIdx === 1) {
                if (!(this.otherPeople[0].name || this.otherPeople[0].surname)) {
                    // TODO: add empty string check
                    this.errors.push({applicantName: "Palun lisa nimi."});
                }
                if (!this.otherPeople[0].code) {
                    this.errors.push({applicantCode: "Palun sisesta isikukood."});
                }
                if (!this.otherPeople[0].email) {
                    this.errors.push({email: "Palun sisesta e-posti aadress."});
                } else if (!this.validEmail(this.otherPeople[0].email)) {
                    this.errors.push({email: "Palun sisesta korrektne e-posti aadress."});
                }
                if (!this.otherPeople[0].phoneNumber) {
                    this.errors.push({phoneNumber: "Palun sisesta telefoninumber."});
                }

                if (this.containsOtherPeople) {
                    // TODO: checks according to number of people added
                }
            }
            if (this.pageIdx === 2) {
                if (!this.newCountry) {
                    this.errors.push({newCountry: "Palun sisestage riik."});
                }
                if (!this.newCounty) {
                    this.errors.push({newCounty: "Palun sisestage maakond."});
                }
                if (!this.newTown) {
                    this.errors.push({newTown: "Palun sisestage vald/linn, alevik, küla."});
                }
                if (!this.newStreet) {
                    this.errors.push({newStreet: "Palun sisestage tänav/talu, maja nr, korteri nr."});
                }
                if (!this.newZipCode) {
                    this.errors.push({newZipCode: "Palun sisestage postiindeks."});
                }
            }

            if (this.errors.length === 0) {
                this.canChange = true;
            }
            if (this.canChange && this.pageIdx < 5) {
                this.pageIdx += 1;
                this.progress = this.pageIdx / 5 * 100;
                this.canChange = false;
            }
        },
        previousPage: function () {
            if (this.pageIdx > 0) {
                this.pageIdx -= 1;
                this.progress = this.pageIdx / 5 * 100;
            }
        },
        validEmail: function (email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }, 
        idCardLogin: function() {
            this.otherPeople = [];
            this.containsOtherPeople = true;
            this.addMockupData();
            this.nextPage();
        }, 
        blankLogin: function() {
            this.otherPeople = [];
            this.addElement();
            this.nextPage();
        }, 
        addMockupData: function() {
            this.otherPeople.push({
                name: "Kana",
                surname: "Snitsel",
                code: "33303031234",
                email: "kana.snitsel@gmail.ee",
                phoneNumber: "5555123564",
                isUnderaged: false,
                guardian: {
                    name: "",
                    surname: "",
                    code: ""
                },
                lastForeignHome: "",
                foreignCode: "",
                nationality: "eestlane",
                nativeLanguage: "eesti keel",
                education: "2",
                socialStatus: "F"
            });
            this.otherPeople.push({
                name: "Arvuti",
                surname: "Hiir",
                code: "50505051234",
                email: "lolololol@lmao.rofl",
                phoneNumber: "123456789",
                isUnderaged: true,
                guardian: {
                    name: "Päris",
                    surname: "Hiir",
                    code: "37010151234"
                },
                lastForeignHome: "",
                foreignCode: "",
                nationality: "eestlane",
                nativeLanguage: "eesti hiirte keel",
                education: "2",
                socialStatus: "E"
            });
            this.otherPeople.push({
                name: "UFO",
                surname: "Alien",
                code: "00000001234",
                email: "ufo.alien@solar.system",
                phoneNumber: "45454355342",
                isUnderaged: false,
                guardian: {
                    name: "",
                    surname: "",
                    code: ""
                },
                lastForeignHome: "Mars",
                foreignCode: "12402242101564655054647753412154541534031231",
                nationality: "marslane",
                nativeLanguage: "marsi keel",
                education: "9",
                socialStatus: "H"
            });
        }
    }
});
