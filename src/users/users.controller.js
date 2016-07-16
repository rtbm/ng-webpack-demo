function usersController(usersService) {
  'ngInject';
  this.users = [];

  usersService.fetch().then(users => { this.users = users; });

  this.edit = (user) => {
    usersService.edit(user).then(() => {});
  };

  this.editSelected = () => {
    const users = this.users.filter(user => user._isSelected === true);
    angular.forEach(users, user => {
      usersService.edit(user).then(() => {});
    });
  };

  this.remove = (user) => {
    usersService.remove(user).then(n => this._remove(n));
  };

  this._remove = (user) => {
    this.users = this.users.filter(n => n.id !== user.id);
  };
}

module.exports = usersController;
