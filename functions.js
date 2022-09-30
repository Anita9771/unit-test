const axios = require('axios');

const functions = {
    sum: (param1, param2) => param1 + param2,
    isNull: () => null,
    valueCheck: (x) => (x),
    createUser: () => {
        const user = { 
            firstName :'Anita',
            lastName : 'Idemudia'
        }
        return user;
    },
    regex: () => (/I/i),
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => `${error}`)

}

module.exports = functions;