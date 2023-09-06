export class Idea {
  public createdBy: string;
  public content: string;
  public timeStamp: string;

  constructor(usernameParam: string, contentParam: string) {
    this.createdBy = usernameParam;
    this.content = contentParam;

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    this.timeStamp = `${day}/${month}/${year}`;
  }
}
