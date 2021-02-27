export class HandyInfo {
    
    public info: String;
    public decription: String;
    public tags: String[];
    public id: String;

    
    
    constructor(info: String, decription: String, tags: String[], id: String) {
            this.info = info;
            this.decription = decription;
            this.tags = tags;
            this.id = id;
        }
}