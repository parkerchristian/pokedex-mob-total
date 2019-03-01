const test = QUnit.test;

QUnit.module('filter array');

function filterArray(array, filterOptions) {
    return array.filter(item => {
        const hasType = !filterOptions.type || filterOptions.type === item.type;

        return hasType;
    });
}

test('filter an array based on blue', assert => {
    // arrange
    const array = [
        { type: 'blue', id: 1 },
        { type: 'green', id: 2 },
        { type: 'blue', id: 2 }
    ];
    
    const filterOptions = {
        type: 'blue'
    };

    const expected = [
        { type: 'blue', id: 1 },
        { type: 'blue', id: 2 }        
    ];

    // act
    const result = filterArray(array, filterOptions);

    // assert
    assert.deepEqual(result, expected);
});

test('return all items if no selection', assert => {
    // arrange
    const array = [
        { type: 'blue', id: 1 },
        { type: 'green', id: 2 },
        { type: 'blue', id: 2 }
    ];
    
    const filterOptions = {
        type: ''
    };

    const expected = [
        { type: 'blue', id: 1 },
        { type: 'green', id: 2 },
        { type: 'blue', id: 2 }      
    ];

    // act
    const result = filterArray(array, filterOptions);

    // assert
    assert.deepEqual(result, expected);
});