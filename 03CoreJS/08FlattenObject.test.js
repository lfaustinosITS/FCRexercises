const { flattenFunctional, flattenImperative } = require('./08FlattenObject');

describe('flattenFunctional', () => {
    it('should flatten an object correctly under normal conditions', () => {
        const oldObj = {
            name: 'Sara',
            gender: 'Female',
            address: {
                location: {
                    city: 'SF',
                    state: 'CA'
                },
                preferredLocation: {
                    city: 'SF',
                    state: ['CA', 'MN']
                },
                other: undefined
            }
        };

        const flattenedObj = flattenFunctional(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: 'Sara',
            oldObj_gender: 'Female',
            oldObj_address_location_city: 'SF',
            oldObj_address_location_state: 'CA',
            oldObj_address_preferredLocation_city: 'SF',
            oldObj_address_preferredLocation_state: ['CA', 'MN'],
            oldObj_address_other: undefined
        });
    });

    it('should handle empty nested objects', () => {
        const oldObj = {
            name: 'Sara',
            address: {}
        };

        const flattenedObj = flattenFunctional(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: 'Sara'
        });
    });

    it('should handle null or undefined values', () => {
        const oldObj = {
            name: null,
            address: undefined
        };

        const flattenedObj = flattenFunctional(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: null,
            oldObj_address: undefined
        });
    });

    it('should handle errors when not providing an object', () => {
        const flattenedObj = flattenFunctional(undefined, 'oldObj');

        expect(flattenedObj).toEqual({});
    });
});

describe('flattenImperative', () => {
    it('should flatten an object correctly under normal conditions', () => {
        const oldObj = {
            name: 'Sara',
            gender: 'Female',
            address: {
                location: {
                    city: 'SF',
                    state: 'CA'
                },
                preferredLocation: {
                    city: 'SF',
                    state: ['CA', 'MN']
                },
                other: undefined
            }
        };

        const flattenedObj = flattenImperative(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: 'Sara',
            oldObj_gender: 'Female',
            oldObj_address_location_city: 'SF',
            oldObj_address_location_state: 'CA',
            oldObj_address_preferredLocation_city: 'SF',
            oldObj_address_preferredLocation_state: ['CA', 'MN'],
            oldObj_address_other: undefined
        });
    });

    it('should handle empty nested objects', () => {
        const oldObj = {
            name: 'Sara',
            address: {}
        };

        const flattenedObj = flattenImperative(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: 'Sara'
        });
    });

    it('should handle null or undefined values', () => {
        const oldObj = {
            name: null,
            address: undefined
        };

        const flattenedObj = flattenImperative(oldObj, 'oldObj');

        expect(flattenedObj).toEqual({
            oldObj_name: null,
            oldObj_address: undefined
        });
    });

    it('should handle errors when not providing an object', () => {
        const flattenedObj = flattenFunctional(undefined, 'oldObj');

        expect(flattenedObj).toEqual({});
    });
});

