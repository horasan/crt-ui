export class MenuItem {
    
    public id: String;
    public name: String;
    public path: String;
    public tags: String;
    public description: String;
    
    constructor(id: String, name: String, path: String, tags: String, description: String) {
            this.id = id;
            this.name = name;
            this.path = path;
            this.tags = tags;
            this.description = description;
        }
}