const { Logger } = require("../config")

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            /*== Promise based API ==*/
            const response = await this.model.create(data);
            return response;
        }
        catch (error) {
            Logger.error("Something went wrong in CRUD repo: create function");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }
        catch (error) {
            Logger.error("Something went wrong in CRUD repo: destroy function");
            throw error;
        }
    }


    async get(pk) {
        try {
            const response = await this.model.findByPk(pk);
            return response;
        }
        catch (error) {
            Logger.error("Something went wrong in CRUD repo: get function");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        }
        catch (error) {
            Logger.error("Something went wrong in CRUD repo: getAll function");
            throw error;
        }
    }


    async update(id, data) { // data => {column: value, .....}
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        }
        catch (error) {
            Logger.error("Something went wrong in CRUD repo: getAll function");
            throw error;
        }
    }
};


module.exports = CrudRepository;