export class Idea {
  public createdBy: string;
  public content: string;
  public timeStamp: string;

  constructor(usernameParam: string, contentParam: string) {
    this.createdBy = usernameParam;
    this.content = contentParam;
    this.timeStamp = Date();
  }
}
