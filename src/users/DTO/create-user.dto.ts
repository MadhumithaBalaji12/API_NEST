// this is a DTO
// DTO's are simple objects that are used to share data across layers of application
export class CreateUserDto{
    name:string;
    email: string;
    role: "INTERN"|"ENGINEER"|"ADMIN";
}