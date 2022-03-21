const nanoid = require('nanoid');

const createPetModel = db => {
    return {
        findMany(filter){
            return db.get('pets')
                .filter(filter)
                .orderBy([ 'createdAt' ], [ 'desc' ])
                .value();
        },

        findOne(filter){
            return db.get('pets')
                .find(filter)
                .value();
        },

        create(pet){
            const newPet = {id: nanoid(), createdAt: new Date.now(), ...pet};

            db.get('pets')
                .push(newPet)
                .write();

            return newPet;
        }
    }
}

module.exports = createPetModel;