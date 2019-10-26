import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      let movement = String(parseInt(rocketImage.style.bottom) + 10) + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed";
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px'
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Abort mission?");
    if (result) {
      this.message = "Mission aborted!";
      this.color = 'green';
      this.height = 0;
      rocketImage.style.bottom = '0px'
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right' && !(this.width >= 460000)) {
      let movement = String(parseInt(rocketImage.style.left) + 10) + 'px';
      rocketImage.style.left = movement;
      this.width += 10000;
      if (this.edgeWarning()) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    } else if (direction === 'left' && !(this.width <= 0)) {
      let movement = String(parseInt(rocketImage.style.left) - 10) + 'px';
      rocketImage.style.left = movement;
      this.width -= 10000;
      if (this.edgeWarning()) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    } else if (direction === 'up' && !(this.height >= 320000)) {
      let movement = String(parseInt(rocketImage.style.bottom) + 10) + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      if (this.edgeWarning()) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    } else if (direction === 'down' && !(this.height <= 0)) {
      let movement = String(parseInt(rocketImage.style.bottom) - 10) + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
      if (this.edgeWarning()) {
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    }
  }

  edgeWarning(): boolean {
    if (this.width <= 0 || this.width >= 460000 || this.height <= 0 || this.height >= 320000) {
      return true;
    }
    return false;
  }

}
