export class Group {
  id: string;
  accountId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  getUpdateDateAsDate(): Date{
    return new Date(this.updatedAt);
  }

  getCreatedDateAsDate(): Date {
    return new Date(this.createdAt);
  }
}
