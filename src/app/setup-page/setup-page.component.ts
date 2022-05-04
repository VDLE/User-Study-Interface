import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent{

  Experiment = "";
  Gender = "";
  DownloadLink : SafeUrl;
  FirstPair: string;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {  }

  onGenderChoice(gender: string){
    this.Gender = gender;
  }
  onExperimentChoice(choice: string){
    this.Experiment = choice;
  }

  onSubmit(form: NgForm): void {
    return;
  }

  onExperimentTransition(mode: number = 1, label: string = "Task 1 Start Date"){
    var mode = 1;
    var label = "Task 1 Start Date"
    this.FirstPair = uuidv4();
    var FileName = "http://127.0.0.1:5000/start/" + this.Experiment;
    this.http.get<any>(FileName).subscribe(data => {
      console.log(data);
    })     
  }


  onClick(form: NgForm): void {

    // Stop Experiment 
    this.http.get<any>("http://127.0.0.1:5000/stop").subscribe(data => {
      console.log(data);
    })  

    var json = JSON.stringify(form.value);
    var access = JSON.parse(json);

    //remember to add gender from here
    access.demographics.demographics.gender = this.Gender;
    
    json = JSON.stringify(access);
    var blob = new Blob([json], { type: 'text/json' });
    var url= window.URL.createObjectURL(blob);

    var uri = this.sanitizer.bypassSecurityTrustUrl(url);
    this.DownloadLink = uri;


    console.log(json);
    console.log(access);
  }




}
