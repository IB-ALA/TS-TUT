export interface Item {
  id: string;
  item: string;
  cheched: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _cheched: boolean = false
  ) {
    // you can declared them again here but it is no nice as it will be compiled twice in js
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get cheched(): boolean {
    return this._cheched;
  }

  set cheched(cheched: boolean) {
    this._cheched = cheched;
  }
}
