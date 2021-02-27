export class CoreFreMenuItem {
   
	public createdBy: String;
	public createdDate: number;
    public decription: String;
    public full_path: String;
    public screen_id: String;
    public tags: String;
    public menu_id: number;
    public id: String;


    constructor(createdBy: String, createdDate: number, decription: String, full_path: String, screen_id: String,
        tags: String, menu_id: number, id: String) {
            this.createdBy = createdBy;
            this.createdDate = createdDate;
            this.decription = decription;
            this.full_path = full_path;
            this.screen_id = screen_id;
            this.tags = tags;
            this.menu_id = menu_id;
            this.id = id;
        }
}