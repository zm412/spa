import { makeAutoObservable, runInAction } from "mobx";

class Library {
  data = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true }); // autoBind важен
    this.get_library(); // инициализация данных
  }

  moveNode(id, newParentId) {
    runInAction(() => {
      const node = this.data.find((n) => n.id === id);
      const oldParentNode = this.data.find((n) => n.id === node.parentId);
      const nodeParent = this.data.find((n) => n.id === newParentId);

      if (node && nodeParent && oldParentNode) {
        oldParentNode.children = oldParentNode.children.filter(
          (n) => n.id !== node.id
        );
        node.parentId = newParentId;
        this.getChildrenNodes();
      }
    });
  }

  removeNode(id) {
    runInAction(() => {
      const removeItem = (id) => {
        const node = this.data.find((n) => n.id === id);
        const oldParentNode = this.data.find((n) => n.id === node.parentId);

        if (oldParentNode) {
          oldParentNode.children = oldParentNode.children.filter(
            (n) => n.id !== node.id
          );
        }

        if (node.children) {
          node.children.forEach((n) => removeItem(n.id));
        }

        this.data = this.data.filter((n) => n.id !== id);
      };

      removeItem(id);
      this.getChildrenNodes();
    });
  }

  refreshData() {
    this.get_library();
  }

  getNodes(obj) {
    return obj.labels.map((label, i) => ({
      label,
      id: obj.entityLongIds[i],
      parentId: obj.parentEntityLongIds[i],
    }));
  }

  get tree() {
    return this.createTree2(this.data);
  }

  createTree2(array = []) {
    const map = new Map();

    for (const item of array) {
      if (map.has(item.parentId)) map.get(item.parentId).push(item);
      else map.set(item.parentId, [item]);
    }

    return map.get(-1);
  }

  getChildrenNodes() {
    const map = new Map();

    for (const item of this.data) {
      if (map.has(item.parentId)) {
        map.get(item.parentId).push(item);
      } else {
        map.set(item.parentId, [item]);
      }
    }

    for (const [parentId, items] of map) {
      for (const item of items) {
        item.children = map.get(item.id) || [];
      }
    }
  }

  async get_library() {
    try {
      const response = await fetch(
       // "https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62"
        "/data-dnd-all.json"
      );
      const data = await response.json();
      const temp = JSON.parse(data.files["view.json"].content)[
        "entityLabelPages"
      ][0];
      const nodes = this.getNodes(temp);

      runInAction(() => {
        this.data = nodes;
        this.getChildrenNodes();
      });
    } catch (e) {
      console.error("Ошибка при загрузке библиотеки:", e);
    }
  }
}

export default new Library();

