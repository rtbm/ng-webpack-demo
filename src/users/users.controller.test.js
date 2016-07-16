describe('Users Controller', () => {
  const user = {
    id: 1,
    name: 'John',
    surname: 'Doe',
    date_of_birth: 'Thu Jan 01 1981 00:01:00 GMT+0100 (CET)',
    mobile_number: '666777888',
    address: 'Poznan, Dluga 2',
  };

  const users = [user];

  let $controller;
  let $scope;
  let mockedUsersService;

  beforeEach(angular.mock.module('users.controllers'));

  beforeEach(angular.mock.module($provide => {
    mockedUsersService = {
      fetch: () => ({ then: () => users }),
      findAll: () => ({ then: () => users }),
      find: () => ({ then: () => user }),
      edit: () => ({ then: () => user }),
      remove: () => ({ then: () => user }),
    };

    spyOn(mockedUsersService, 'fetch').and.callThrough();
    spyOn(mockedUsersService, 'findAll').and.callThrough();
    spyOn(mockedUsersService, 'find').and.callThrough();
    spyOn(mockedUsersService, 'edit').and.callThrough();
    spyOn(mockedUsersService, 'remove').and.callThrough();

    $provide.value('usersService', mockedUsersService);
  }));

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_('usersController', { $scope });
  }));

  it('should not fail and provide controller', done => {
    expect($controller).toBeDefined();
    done();
  });

  it('should be called on construct', done => {
    expect(mockedUsersService.fetch).toHaveBeenCalled();
    done();
  });

  it('should have `edit` method', done => {
    expect($controller.edit).toBeDefined();
    done();
  });

  it('should query usersService on `edit action`', done => {
    $controller.edit(user);
    expect(mockedUsersService.edit).toHaveBeenCalledWith(user);
    done();
  });

  it('should have `editSelected` method', done => {
    expect($controller.editSelected).toBeDefined();
    done();
  });

  it('should query `usersService editSelected` on `edit selected action`', done => {
    $controller.users = users;
    $controller.users[0]._isSelected = true;
    $controller.editSelected();
    expect(mockedUsersService.edit).toHaveBeenCalledWith(users[0]);
    done();
  });

  it('should have `remove` method', done => {
    expect($controller.remove).toBeDefined();
    done();
  });

  it('should query `usersService remove` on `remove action`', done => {
    $controller.remove(user);
    expect(mockedUsersService.remove).toHaveBeenCalledWith(user);
    done();
  });

  it('should remove user from list', done => {
    $controller.users = users;
    $controller._remove(users[0]);
    expect($controller.users[0]).toBeUndefined();
    done();
  });
});
