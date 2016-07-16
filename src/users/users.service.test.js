const config = require('../config');

describe('Users Service', () => {
  const user = {
    id: 2,
    name: 'Foo',
    surname: 'Bar',
  };

  let service;
  let mockedHttp;
  let mockedQ;

  beforeEach(() => angular.mock.module('users.services'));

  beforeEach(angular.mock.module($provide => {
    mockedHttp = {
      get: () => ({ then: () => ({}) }),
      post: () => ({ then: () => ({}) }),
    };

    mockedQ = {
      defer: () => ({ promise: '' }),
      then: () => {},
    };

    spyOn(mockedHttp, 'get').and.callThrough();
    spyOn(mockedHttp, 'post').and.callThrough();

    $provide.value('$http', mockedHttp);
    $provide.value('$q', mockedQ);
  }));

  beforeEach(angular.mock.inject($injector => {
    service = $injector.get('usersService');
  }));

  it('should have `fetch` method ', done => {
    expect(service.fetch).toBeDefined();
    done();
  });

  it('should call $http GET on /fetch', done => {
    service.fetch();
    expect(mockedHttp.get).toHaveBeenCalledWith(config.usersEndpoint);
    done();
  });

  it('should have `findAll` method ', done => {
    expect(service.findAll).toBeDefined();
    done();
  });

  it('should call $http GET on /findall with proper values', done => {
    service.findAll([1, 2, 3, 4]);
    expect(mockedHttp.get).toHaveBeenCalledWith(`${config.api}findall`, { usersIds: [1, 2, 3, 4] });
    done();
  });

  it('should have `find` method ', done => {
    expect(service.find).toBeDefined();
    done();
  });

  it('should call $http GET on /find with proper values', done => {
    service.find(1);
    expect(mockedHttp.get).toHaveBeenCalledWith(`${config.api}find`, { id: 1 });
    done();
  });

  it('should have `edit` method ', done => {
    expect(service.edit).toBeDefined();
    done();
  });

  it('should call $http POST on /edit/:userId with proper values', done => {
    service.edit(user);
    expect(mockedHttp.post).toHaveBeenCalledWith(`${config.api}edit/2`, user);
    done();
  });

  it('should have `remove` method ', done => {
    expect(service.remove).toBeDefined();
    done();
  });

  it('should call $http POST on /remove/:userId with proper values', done => {
    service.remove(user);
    expect(mockedHttp.post).toHaveBeenCalledWith(`${config.api}remove/2`);
    done();
  });
});
