export class CRTErrorResponse {
    public timeStamp: string;
	public message: string;
	public code: string;
	public status: number;

    constructor(timeStamp: string, message: string, code: string, status: number) {
            this.timeStamp = timeStamp;
            this.message = message;
            this.code = code;
            this.status = status;
        }
}