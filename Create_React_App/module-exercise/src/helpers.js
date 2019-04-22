function choice(items) {
    let randNum = Math.floor(Math.random() * items.length) + 1;

    return items[randNum];
}

function remove(items, item) {
    if(items.includes(item)){
        return items.splice(items.indexOf(item), 1);
    } else {
        return undefined;
    }
}

export {choice, remove};