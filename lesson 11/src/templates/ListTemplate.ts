import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();

  ul: HTMLUListElement;

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach(
      ({ item, id, cheched /*these are the getters on the listItem*/ }) => {
        const li: HTMLLIElement = document.createElement("li");
        li.className = "item";

        const checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = id;
        checkbox.checked = cheched;
        // checkbox.tabIndex = 0 // not needed
        checkbox.addEventListener("change", (): void => {
          cheched = !cheched;
          fullList.save();
        });

        const label: HTMLLabelElement = document.createElement("label");
        label.htmlFor = id;
        label.textContent = item;

        const button: HTMLButtonElement = document.createElement("button");
        button.textContent = "X";
        button.className = "button";

        button.addEventListener("click", (): void => {
          fullList.removeItem(id);
          this.render(fullList);
        });

        li.append(checkbox, label, button);

        this.ul.append(li);
      }
    );
  }
}
