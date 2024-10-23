import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEnterForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEnterForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    const itemInputElem = document.getElementById(
      "newItem"
    ) as HTMLInputElement;

    const newEntryItem: string = itemInputElem.value.trim();
    if (!newEntryItem.length) return;

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryItem);

    fullList.addItem(newItem);
    template.render(fullList);
    itemInputElem.value = "";
  });

  const clearItemsBtn = document.getElementById(
    "clearItemsButton"
  ) as HTMLBRElement;

  clearItemsBtn?.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
