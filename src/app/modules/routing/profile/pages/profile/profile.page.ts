import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'lo-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public fullName$: Observable<string> = this.authService.fullName$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
