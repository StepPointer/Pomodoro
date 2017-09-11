import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isFocusingMode: boolean = true;
  private isPaused: boolean = true;
  private wasPlayed: boolean = false;
  private minutes: any  = '25';
  private seconds: any  = '00';
  private ticks:  any;
  private cdr:  any;
  private interval: any;

  constructor(public navCtrl: NavController, cdr: ChangeDetectorRef) {
    this.cdr = cdr;
  }

  startOrPause()  {
    if(!this.wasPlayed) {
      this.setTicks();
    }
    if(this.isPaused) {
      this.startCounter();
      this.isPaused = false;
      this.wasPlayed = true;
    } else {
      this.pauseCounter();
      this.isPaused = true;
    }
  }

  setTicks() {
    this.ticks = this.minutes * 60 + this.seconds * 1;
    this.cdr.detectChanges();
  }

  startCounter() {
    if(!this.wasPlayed) {
      this.ticks--;
    }
    this.interval = setInterval(t => {
      if (this.ticks > 0) {
        this.seconds = this.ticks--;
        this.minutes = Math.floor((((this.seconds % 3153600) % 86400) % 3600) / 60);
        this.minutes = (this.minutes <= 9) ? '0' + this.minutes : this.minutes;
        this.seconds = Math.floor(((this.seconds % 3153600) % 86400) % 3600) % 60;
        this.seconds = (this.seconds <= 9) ? '0' + this.seconds : this.seconds;
        this.cdr.detectChanges();
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseCounter(){
    clearInterval(this.interval);
  }

  refreshTimer(){
    this.wasPlayed = false;
    if(this.isFocusingMode) {
      this.minutes = '25'; // userparams for focus mode
    }
    if(!this.isFocusingMode) {
      this.minutes = '05'; // userparams for relax mode
    }
    this.seconds = '00';
    this.setTicks();
  }

  changeMode(){
    this.isFocusingMode?  this.isFocusingMode = false : this.isFocusingMode = true ;
    this.refreshTimer();
  }
}
