export class Usuario {
  public createdBy: string;
  public descripcion: string;
  public timeStamp: string;

  constructor(username: string, descripcion: string) {
    this.createdBy = username;
    this.descripcion = descripcion;
    this.timeStamp = Date();
  }
}
