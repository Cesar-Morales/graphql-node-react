module.exports = {
    Query: {
        pets(_, {input}, {models}) {
            return models.Pet.findAll(input);
        },
        pet(_, {id}, {models}) {
            return models.Pet.findOne({id});
        },
        user(_, __, {models}) {
            return models.User.findOne();
        }
    },
    Mutation: {
        addPet(_, {input}, {models, user}) {
            const pet = models.Pet.create({...input, user: user.id});
            return pet
        }
    },
    User: {
        pets(user, _, {models}) {
            return models.Pet.findeMany({user: user.id});
        }
    },
    Pet: {
        owner(pet, _, {models}) {
            return models.User.findOne({ id: pet.owner });
        },
        img(pet) {
            return pet.type === 'DOG'
            ? 'https://placedog.net/300/300'
            : 'http://placekitten/300/300/'
        }
    }
}