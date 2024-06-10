class UIManager {

    
    constructor() {
        //function randomClicked() {
        //    console.log("Random Creatures Generated");
        //}

        this.radio = createRadio();
        this.radio.option("Change Color");
        this.radio.option("Grow Snowman");
        createDiv()
        this.radio.option("New");
        this.radio.option("Replace");
        //this.radio.selected("Change Color");
        //this.radio.changed(radioClicked);

        createP();
        
        let random = createButton("Random Creatures");
        random.mouseClicked(randomClicked);
        createSpan("&nbsp; &nbsp;");

        let ordered = createButton("Ordered Creatures");
        ordered.mouseClicked(orderClicked);
        createSpan("&nbsp; &nbsp;");

        let snowmen = createButton("Ordered Rows");
        snowmen.mouseClicked(rowsClicked);
    }

}
