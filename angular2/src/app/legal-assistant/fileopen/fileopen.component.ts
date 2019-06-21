import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Judge } from '../judge';
@Component({
  selector: 'app-fileopen',
  templateUrl: './fileopen.component.html',
  styleUrls: ['./fileopen.component.css']
})
export class FileopenComponent implements OnInit {
	fileToUpload: File = null;
	isUpload : boolean=false;
	isActive : boolean=false;
	isActive2 : boolean=false;
	isDetail :boolean=false;
	isComplete:boolean=true;
	isComplete2:boolean=false;
	nowpage :Number = 0;
	myjudge : Judge[];
	nowjudge:Judge;
	rate:Number;
	myrate:string;
	constructor(private api:ApiService) { }

	ngOnInit() { }

	upload(){
		console.log("Upload Works!");
	}
	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0);
	}
	uploadFileToActivity() {
		this.api.postFile(this.fileToUpload).subscribe(data => {
		  let temp = data;
		  this.isActive = true;
		  console.log(data);
		  if(temp.upstate=='true'){
			  this.isUpload = true;
		  }
		  else{
			  this.isUpload = false;
		  }
		});
	}
	uploadFileToActivity2() {
		this.isComplete=false;
		this.api.postFile2().subscribe(data => {
		  let temp = data;
			this.myjudge=temp.result;
			this.rate = temp.rate;
			this.myrate =this.rate.toFixed(3)
			this.nowpage = 1;
			this.isComplete=true;
			this.isComplete2=true;
		});
	}
	SeeDetails(now:Number){
		this.isDetail = true;
		this.nowjudge = this.myjudge[now];
	}
	Backpage(){
		this.isDetail = false;
	}
	pagechange(pagenum:Number){
		let num = new Number(this.nowpage);
		this.nowpage = num+pagenum;
		if(this.nowpage<=0){
			this.nowpage=1;
		}
		else{
			this.api.page(this.nowpage).subscribe(data=>{
				let temp = data;
				this.myjudge = temp.result;
			});
		}
	}

}

