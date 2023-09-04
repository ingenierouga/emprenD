export class Usuario {
  public username: string;
  public password: string;
  public hasAccess: boolean;

  constructor(username: string, password: string, hasAccess: boolean) {
    this.username = username;
    this.password = password;
    this.hasAccess = hasAccess;
  }
}
