console.log(
    'This script populates some test categories and items to your database.' +
    'Specified database as argument - e.g.: node populateDB "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/musical-instrument?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Item = require("./models/item");

const categories = [];
const items = [];

// Connect to mongodb
const mongoose = require("mongoose");
const item = require("./models/item");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createCategories();
    await createItems();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function categoryCreate(name, description) {
    categoryDetail = {
        name: name,
        description: description
    }

    const category = new Category(categoryDetail);
    await category.save();
    categories.push(category);
    console.log(`Added category: ${name}`);
}

async function createCategories() {
    console.log("Adding categories");
    await Promise.all([
    categoryCreate(
        "Percussion",
        "The percussion musical instruments are played by striking or scraping them using a beater. Scraping or rubbing can also be the other way of playing this instrument. These instruments are often played with music to provide beat like the snare drums, cymbals, bass drums, and so on.",
    ),
    categoryCreate(
        "Stringed",
        "A string instrument is a musical instrument that produces sound by means of vibrating strings. The most common string instruments in the string family are guitar, electric bass, violin, viola, cello, double bass, banjo, mandolin, ukulele, and harp.",
    ),
    categoryCreate(
        "Keyboard",
        "Keyboard instruments are any instruments played by depressing levers, buttons, or keys to produce sound. The most common of these instruments are the piano and organ, but there’s a wide variety keyboard instruments in existence.",
    ),
    categoryCreate(
        "Wind",
        "A wind instrument is a musical instrument that you blow into in order to produce sounds, such as a flute, a clarinet, or a recorder."
    ),
    categoryCreate(
        "Electronic",
        "An electronic instrument is any musical instrument that produces or modifies sounds by electric, and usually electronic, means."
    ),
    ]);
}

async function itemCreate(name, description, category, price, number_in_stock) {
    itemDetail = {
        name: name,
        description: description,
        category: category,
        price: price,
        number_in_stock: number_in_stock
    }

    const item = new Item(itemDetail);
    await item.save();
    items.push(item);
    console.log(`Added item: ${name}`);
}

async function createItems() {
    console.log("Adding items");
    await Promise.all([
    itemCreate(
        "Xylophone",
        "The xylophone is a musical instrument in the percussion family that consists of wooden bars struck by mallets.",
        categories[0],
        "₱1,179",
        200,
    ),
    itemCreate(
        "Guitar",
        "A stringed instrument with a flat body, a long neck with frets, and usually six strings that are played with the fingers or with a pick.",
        categories[1],
        "₱5,199",
        18,
    ),
    itemCreate(
        "Piano",
        "The piano is a keyboard instrument that produces sound by striking strings with hammers, characterized by its large range and ability to play chords freely.",
        categories[2],
        "₱10,999",
        6,
    ),
    ]);
}