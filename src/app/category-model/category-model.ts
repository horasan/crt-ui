export class Category {
    public id: number ;
    public name: String;
    public uiOrder: number;

    constructor(id: number, name: String, uiOrder: number) {
            this.id = id;
            this.name = name;
            this.uiOrder = uiOrder;
        }
}