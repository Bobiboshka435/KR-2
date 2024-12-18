export default class StorageManager {
  constructor(key) {
    this.storageKey = key;
  }

  save(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
  }

  add(item) {
    const items = this.get();
    const newItem = { ...item, id: Date.now() };
    items.push(newItem);
    this.save(items);
    return newItem;
  }

  remove(id) {
    const items = this.get().filter((item) => item.id !== id);
    this.save(items);
  }

  update(id, updatedData) {
    const items = this.get().map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    this.save(items);
  }
}
