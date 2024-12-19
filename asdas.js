//1

const items = ["banana", "apple", "broccoli", "carrot", "blueberry", "spinach"];

const printItemsStartingWithB = (array) => {
    const result = [];
    for (const item of array) {
        if (item[0] === "b") {
            result.push(item);
        }
    }
    return result;
};

const vaisiaiIrDarzovesIsB = printItemsStartingWithB(items);
console.log(vaisiaiIrDarzovesIsB);

//2

const colors = ["raudona", "melyna", "zalia", "geltona", "violetine"];

const konvertuotiIDidziasiasRaides = (masyvas) => {
    const naujasMasyvas = [];
    for (const spalva of masyvas) {
        naujasMasyvas.push(spalva.toUpperCase());
    }
    return naujasMasyvas;
};

const didziosiosRaidesSpalvos = konvertuotiIDidziasiasRaides(colors);
console.log(didziosiosRaidesSpalvos);

//3

const miestas = {
    pavadinimas: "Vilnius",
    salis: "Lietuva",
    gyventojuSkaicius: 600000,
    gyventojuSkirtumasSuLietuva: function () {
        const lietuvosGyventojuSkaicius = 2800000;
        const skirtumas = this.gyventojuSkaicius - lietuvosGyventojuSkaicius;
        return skirtumas > 0 
            ? `Miestas turi ${skirtumas} daugiau gyventojų nei visa Lietuva.` 
            : `Miestas turi ${Math.abs(skirtumas)} mažiau gyventojų nei visa Lietuva.`;
    },
};

console.log(miestas.gyventojuSkirtumasSuLietuva());
