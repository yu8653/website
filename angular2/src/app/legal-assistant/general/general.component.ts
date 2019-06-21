import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Judge } from '../judge';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  fileToUpload: File = null;
	isUpload : boolean=false;
	isActive : boolean=false;
  isDetail :boolean=false;
	isSearch :boolean = false;
	isComplete2:boolean=false;
	nowpage :Number = 0;
	myjudge : Judge[];
	nowjudge:Judge;
	rate:Number;
	myrate:Number;
  mysearch:string;
	constructor(private api:ApiService) { }

	ngOnInit() { }

	
	Search(){
    this.isSearch=true;
    this.api.Search(this.mysearch).subscribe(data=>{
      let temp = data;
      this.myjudge = temp.result;
      this.myjudge=temp.result;
			this.rate = temp.rate;
			this.myrate =this.rate.toFixed(3)
      this.nowpage = 1;
			this.isSearch=false;
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
