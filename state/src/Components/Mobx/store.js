import { makeAutoObservable, runInAction } from "mobx";

export class firstStore {
  count = 0;
  list = [];
  state = "init";
  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  async fetchPosts() {
    this.list = [];
    this.state = "pending";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();

      runInAction(() => {
        this.list = result;
        this.state = "done";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}
