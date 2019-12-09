import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public fileName: string = 'fileName1';
  public numberOfLines: number = 10;
  public fileUploadResult: string = 'File not is not sent yet!';
  allowFileUpload: boolean = false;
  previewUrl: boolean = true;
  fileSizeError: boolean = false;
  fileData: File = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];

    if (this.fileData.size / 1024 / 1024 > 1) {
      this.fileUploadResult = "File size is " + (this.fileData.size / 1024 / 1024).toFixed(2) + " MB. Max allowed file size is 1 MB. File cannot be uploaded!";
      this.fileSizeError = true;
      return;
    }
    else if (this.fileData.size == 0) {
      this.fileUploadResult = "File is empty. File cannot be uploaded!";
      this.fileSizeError = true;
      return;
    }
    else {
      this.fileSizeError = false;
      this.fileUploadResult = "";
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);

    console.log(this.fileData);

    var reader = new FileReader();
    reader.onload = () => {
      this.http.post('http://localhost:5000/competitionapi/v1/competition/raw', {
          "fileName": this.fileData.name,
          "rawFileContent": reader.result
        })
          .subscribe(res => {
            
            this.fileUploadResult = "File is uploaded successfully!";
          }, errorRes => {
            
              this.fileUploadResult = errorRes.error.message;
            }
      )

        
      };

    reader.readAsText(this.fileData);

  }

  ngOnInit() {
  }

}
