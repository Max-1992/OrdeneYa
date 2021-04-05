const uuid = require('uuid');

class IdGenerator {

    #lib

    constructor(uuid) {
        this.#lib = uuid;
    };

    generate() {
        const id = this.#lib.v4();
        return id;
    }
}

module.exports = new IdGenerator(uuid);