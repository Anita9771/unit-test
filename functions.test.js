const functions = require('./functions');

test('returns sum', () => {
    expect(functions.sum(1, 1)).toBe(2);
})

test('adds 1 + 1 NOT equals 3', () => {
    expect(functions.sum(1, 1)).not.toBe(3);
})

test('returns null', () => {
    expect(functions.isNull()).toBeNull();
})

test('returns value of parameter for falsy values', () => {
    expect(functions.valueCheck(null)).toBeFalsy();
})

test('returns value of parameter for truthy values', () => {
    expect(functions.valueCheck(2)).toBeTruthy();
})

test('returns user object', () => {
    expect(functions.createUser()).toEqual({ 
                firstName :'Anita',
                lastName : 'Idemudia'
    });
})

test('checks if I is present', () => {
    expect(('India')).toMatch(functions.regex());
})

// toContain

// With Async data
test('checks fetched user name', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser()
            expect(data.name).toEqual("Leanne Graham")
})