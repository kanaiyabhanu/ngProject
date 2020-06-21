export interface Iuser {
  firstname: string;
  lastname: string;
  address: string;
  userLogin: {
    username: string;
    password: string;
  };
}

export interface Iregister {
  FirstName: string;
  LastName: string;
  Address: string;
  MobileNo: string;
  EmailId: string;
  UserLogin: {
    UserName: string;
    Password: string;
  };
}

export interface Ilogin {
  UserLogin: {
    UserName: string;
    Password: string;
  };
}
