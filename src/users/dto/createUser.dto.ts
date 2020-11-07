const enum Roles {
  EMPLOYEE,
  MANAGER,
}

export class CreateUserDTO {
  readonly username: string;
  readonly password: string;
  readonly role: Roles;
}
