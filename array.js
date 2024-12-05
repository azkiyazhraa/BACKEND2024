const fruits = ["Banana", "Mango", "Durian"];

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
};

const main = () => {
    index();
    store("Apple");
    index();
};

main();