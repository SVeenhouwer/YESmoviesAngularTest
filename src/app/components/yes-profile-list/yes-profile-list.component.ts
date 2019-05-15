import { Component, OnInit } from '@angular/core';
import { YesProfile } from 'src/app/model/yes-profile';
import { YesProfileService } from 'src/app/services/yes-profile.service';

@Component({
  selector: 'app-yes-profile-list',
  templateUrl: './yes-profile-list.component.html',
  styleUrls: ['./yes-profile-list.component.css']
})
export class YesProfileListComponent implements OnInit {

  private yesProfiles: YesProfile[];

  constructor(private yesProfileService: YesProfileService) { }

  ngOnInit() {
    this.yesProfileService.list().subscribe(data => {
      this.yesProfiles = data;
    })
  }

}
