const { authenticate } = require('@feathersjs/authentication').hooks;
import { addUserId } from '../../hooks/userId.hook';

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [addUserId()],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
