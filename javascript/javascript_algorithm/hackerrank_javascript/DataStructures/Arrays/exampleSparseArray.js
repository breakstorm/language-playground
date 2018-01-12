function processData(input) {
    input = input.split('\n')
    var onlyNumber = input.filter(item => !isNaN(Number(item))).map(Number);
    var onlyStrings = input.filter(item => isNaN(Number(item)));
    var strings = onlyStrings.slice(0, onlyNumber[0]);
    var query = onlyStrings.slice(-onlyNumber[1]);
    query.map(item => {
        console.log(strings.filter(current => current === item).length);
    });
}

var test = '4\naba\nbaba\naba\nxzxb\n3\naba\nxzxb\nab';

processData(test);