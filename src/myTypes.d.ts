
export interface Friend {
    name: string;
    phone: string;
    age: number
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
