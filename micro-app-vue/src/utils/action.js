function emptyAction() {}
class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };
  setActions(actions) {
    this.actions = actions;
  }
  onGlobalStateChange() {
    return this.actions.onGlobalStateChange(...arguments);
  }
  setGlobalState() {
    return this.actions.setGlobalState(...arguments);
  }
}

const actions = new Actions();
export default actions;
