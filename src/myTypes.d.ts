
export interface Friend {
    name: string;
    phone: string;
    dob? : Date
    age: number
    intrests? : string[]
}

export interface Colleague {
    name: string;
    department: string;
    contact: Contact
  }

interface Contact{
    email : string;
    extension : number;
}

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string;
    email: string
}

