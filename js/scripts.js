SuccessfulValidationMessage = Vue.component('successful-validation-message', (
    {
        template: '<div class="valid-tooltip">Korras nagu Norras!</div>'
    }
));

UnsuccessfulValidationMessage = Vue.component('unsuccessful-validation-message', (
    {
        template: '<div class="invalid-tooltip">Jama lugu.</div>'
    }
));

var vm = new Vue({
        el: "#app",
        data: function () {
            return {
                pageIdx: 0,
                canChange: true,
                sentForSigning: false,
                signed: false,
                progress: 0,
                containsOtherPeople: false,
                ownershipSelection: "",
                otherPeople: [],
                errors: {},
                nameValidationMsg: "Haige kala",
                codeValidationMsg: "Haigem kala"
            }
        },
        computed: {
            previousPageDisabled: function () {
                return this.pageIdx <= 1 || this.sentForSigning || this.signed;
            },
            nextPageDisabled: function () {
                return this.pageIdx >= 5;
            },
            canFinish: function () {
                return this.sentForSigning && this.signed;
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
            sendForSigning: function () {
                this.sentForSigning = true;
            },
            sign: function () {
                alert("*id-kaardiga allkirjastamise mock*\nKujutame ette, et siin küsitakse PIN-i ja muid toredusi.");
                this.signed = true;
            },
            checkValidityFor: function (formId) {
                var form = document.getElementById(formId);
                form.classList.remove('was-validated');
                if (form.checkValidity() !== false) {
                    this.canChange = true;
                    return true;
                }
                form.classList.add('was-validated');
                return false;
            },
            validateName: function (id, index) {
                console.log(id + " : " + index);
                var all = document.getElementsByClassName(id);
                var input;

                if (all.length === 0) {
                    input = document.getElementById(id);
                } else {
                    input = all[index - 1];
                    console.log(input.id);
                    if (input.id[input.id.length - 1] !== (index).toString()) {
                        input.id = input.id + (index);
                        console.log("Uus id: " + input.id);
                    }
                }
                this.errors[id] = {};
                this.errors[id][index] = this.nameValidationMsg;

                console.log(input.value);
                if (input.value === "") {
                    input.setCustomValidity("Palun sisesta nimi")
                } else if (input.value.trim() === "") {
                    input.setCustomValidity("Nimi ei tohi koosneda ainult tühikutest");
                } else {
                    input.setCustomValidity("");
                }
                this.errors[id][index] = input.validationMessage;
            },
            validateCode: function (id) {
                this.errors[id] = this.codeValidationMsg;
                var input = document.getElementById(id);
                if (input.value.length < 11) {
                    input.setCustomValidity("Isikukood on liiga lühike");
                } else if (input.value.length > 11) {
                    input.setCustomValidity("Isikukood on liiga pikk")
                } else if (!/^[1-6][0-9]{2}[01][0-9][0-9]{2}[0-9]{4}$/.test(input.value)) {
                    input.setCustomValidity("Palun sisesta korrektne Eesti isikukood");
                } else {
                    input.setCustomValidity("");
                }
                this.errors[id] = input.validationMessage;
            },
            nextPage: function () {
                if (this.pageIdx === 1) {
                    this.checkValidityFor('applicantForm');
                }
                else if (this.pageIdx === 2) {
                    this.checkValidityFor('addressForm');
                }
                else {
                    this.canChange = true;
                }

                if (this.canChange && this.pageIdx < 5) {
                    this.pageIdx += 1;
                    this.progress = this.pageIdx / 5 * 100;
                    this.canChange = false;
                }
                this.scrollToTop();
            },
            previousPage: function () {
                if (this.pageIdx > 0) {
                    this.pageIdx -= 1;
                    this.progress = this.pageIdx / 5 * 100;
                }
                this.scrollToTop();
            },
            scrollToTop: function () {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
            validEmail: function (email) {
                var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            },
            idCardLogin: function () {
                this.otherPeople = [];
                this.containsOtherPeople = true;
                this.addMockupData();
                this.nextPage();
            },
            blankLogin: function () {
                this.otherPeople = [];
                this.addElement();
                this.nextPage();
            },
            addMockupData: function () {
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
    })
;
