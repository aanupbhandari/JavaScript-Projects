const anup = {
    firstName : 'Anup',
    lastName : 'Bhandari',
    fullName: function(){
        console.log(`My full Name is ${this.firstName} ${this.lastName}` );
    },
}

const susmita = {
    firstName : 'Susmita',
    lastName : 'Bhandari',
    fullName: function () {
        console.log(`My Full Name is ${this.firstName} ${this.lastName}`);
    }
}

anup.fullName();
susmita.fullName();