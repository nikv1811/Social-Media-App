import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any = null
  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService) {
    auth.getUser().subscribe((user )=>{
      console.log(user);
      this.email = user?.email
    })
  }

  async handleSignOut(){
    try {
      await this.auth.signOut()
      this.router.navigateByUrl('/signin')
      this.toastr.info("Log Out Success") 
      this.email = null
    } catch (error) {
      this.toastr.error("Error Signing Out")
    }
  }

  ngOnInit(): void {
  }



}
