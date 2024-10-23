import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {
    // there is private on the constructor because we will be only
    // initiating a single instace of the FullList (Singleton)
  }

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    // taken everything from the localStorage, parsing them
    // and then because for the underscores, we create new
    // ListItem's and then add them to the FullList instance
    // (singleton)

    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    type PrivateListItem = {
      _id: string;
      _item: string;
      _cheched: boolean;
    };
    const parsedList: PrivateListItem[] = JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._cheched
      );

      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
