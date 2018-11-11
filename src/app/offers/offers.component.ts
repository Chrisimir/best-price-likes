import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css", "../../assets/images/base64images.css"],
  animations: [
    trigger("mobileSpinAnimation", [
      state(
        "unspinned",
        style({
          transform: "translateX(-40vw) rotateY(-180deg)"
        })
      ),
      state(
        "spinned",
        style({
          transform: "rotateY(0deg)"
        })
      ),
      transition("unspinned <=> spinned", animate("500ms ease-in"))
    ]),
    trigger("showPrimaryText", [
      state(
        "unspinned",
        style({
          opacity: 0
        })
      ),
      state(
        "spinned",
        style({
          opacity: 1
        })
      ),
      transition("unspinned <=> spinned", animate("600ms ease-in"))
    ])
  ]
})
export class OffersComponent implements OnInit {
  // Phone flip animation
  state = "unspinned";
  private startPhoneAnimation() {
    setTimeout(() => {
      this.state = this.state === "unspinned" ? "spinned" : "unspinned";
    }, 1000);
  }

  constructor() {}

  ngOnInit() {
    this.startPhoneAnimation();
  }
}
