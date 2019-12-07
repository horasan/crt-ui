import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public fileName: string= 'fileName1';
  public numberOfLines: number = 10;
  public fileUploadResult: string = 'File not is not sent yet!';
  allowFileUpload = false;


  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}

onSubmit() {
  const formData = new FormData();
    formData.append('file', this.fileData);
    
    //http://localhost:5000/competitionapi/v1/competition/raw
    
    
    //this.http.post('http://localhost:5000/competitionapi/v1/competition/raw', formData)
    /*this.http.post('http://localhost:5000/competitionapi/v1/competition/raw', {
      "fileName": "a",
      "rawFileContent": "b"
    })
      .subscribe(res => {
        console.log(res);
        //this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      })
    */
    
      console.log(this.fileData.name);
    

     var reader = new FileReader();
    reader.onload = () => {
      this.http.post('http://localhost:5000/competitionapi/v1/competition/raw', {
      "fileName": "a",
      "rawFileContent": reader.result
    })
      .subscribe(res => {
        console.log(res);
        //this.uploadedFilePath = res.data.filePath;
        //alert('SUCCESS !!');
        this.fileUploadResult = "File is sent successfully!";
      })
      
      console.log(reader.result);
    };
    reader.readAsText(this.fileData);
}





  ngOnInit() {
  }

}
