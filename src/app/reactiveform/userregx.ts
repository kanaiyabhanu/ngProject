export class UserRegx {
    static UserFirstName(control) {
        let regx = /^[a-zA-Z ]/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : { firstname: true };
    };

    static UserLastname(control) {
        let regx = /^[a-zA-Z ]/;
        let valid = regx.test(control.value);
        return valid ? null : { lastname: true };
    };

    static Address(control) {
        let regx = /^[a-zA-Z ]/;
        let valid = regx.test(control.value);
        return valid ? null : { Address: true };
    }
    
    static Email(control) {
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let valid = regx.test(control.value);
        return valid ? null : { EmailId: true };
    }
    
    static Password(control) {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/;
        let valid = regx.test(control.value);
        console.log(valid);
        return valid ? null : { Password: true };
    }
}