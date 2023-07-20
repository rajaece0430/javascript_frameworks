import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatus = false;
  serverAdded = "Server is not added !";
  serverName = "";

  constructor() { 
    // setTimeout(() => {
    //   this.serverStatus = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverAdded = "Server is added with server Name : "+this.serverName;
  }

  onChangeTextEdit(event : Event){
      //console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
      // if(this.serverName != ""){
      //   this.serverStatus = true;
      // }else{
      //   this.serverStatus = false;
      // }
  }
}
