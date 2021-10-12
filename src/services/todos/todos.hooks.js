const { authenticate } = require("@feathersjs/authentication").hooks;
const addUserId = require("../../hooks/userId.hook");

module.exports = {
  before: {
    all: [authenticate("jwt"), accessControl()],
    find: [],
    get: [],
    create: [addUserId()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
