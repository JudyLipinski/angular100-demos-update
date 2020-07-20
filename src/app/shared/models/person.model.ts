export interface Person {
  name: string;
  email: string;
  age: number;
}

export interface RestrictedPerson extends Person{
  age: 20|21|22;
}
