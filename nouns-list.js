const nouns = [
    "bush",
    "shovel",
    "cave",
    "mouth",
    "shell",
    "tear",
    "razor",
    "nest",
    "pad",
    "fear",
    "prize",
    "power",
    "pocket",
    "cane",
    "pump",
    "mask",
    "junk",
    "kiss",
    "photo",
    "shower",
    "slide",
    "freedom"
];

// 1. Create a function `handleItem()` that accepts the (JS-created) array `item` (the noun) as a parameter.
let words = '';
const list = document.querySelector('.nouns')
nouns.forEach(function(item) {

    if (item === nouns[nouns.length - 2]) {
        words = words + item[0].toUpperCase() + item.slice(1) + ' and ';
    } else if (item === nouns[nouns.length - 1]) {
        words = words + item[0].toUpperCase() + item.slice(1) + '.';
    } else {
        words = words + item[0].toUpperCase() + item.slice(1) + ', ';
    }
})
list.textContent = words
    // 2. Inside `handleItem()`, use `.innerHTML` and the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
    //    - the first character of each noun is capitalized;
    //    - each noun is separated by a comma;
    //    - the last noun is separated by the word `and`.


// 3. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.