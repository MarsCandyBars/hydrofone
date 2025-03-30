import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private brownNoise = new Tone.Noise("brown").toDestination();
  private whiteNoise = new Tone.Noise("white").toDestination();
  private pinkNoise = new Tone.Noise("pink").toDestination();
  private osciNoise = new Tone.Oscillator("220", "square").toDestination();
  private isPlayingBrown: boolean = false;
  private isPlayingWhite: boolean = false;
  private isPlayingPink: boolean = false;
  private isPlayingOsci: boolean = false;

  playBrownNoise() {
    this.brownNoise.volume.value = -10;
    this.isPlayingBrown ? this.brownNoise.stop() : this.brownNoise.start();
    this.isPlayingBrown = !this.isPlayingBrown;
  }

  playWhiteNoise() {
    this.whiteNoise.volume.value = -20;
    this.isPlayingWhite ? this.whiteNoise.stop() : this.whiteNoise.start();
    this.isPlayingWhite = !this.isPlayingWhite;
  }

  playPinkNoise() {
    this.pinkNoise.volume.value = -10;
    this.isPlayingPink ? this.pinkNoise.stop() : this.pinkNoise.start();
    this.isPlayingPink = !this.isPlayingPink;
  }

  playOsciNoise() {
    this.osciNoise.volume.value = -38;
    this.isPlayingOsci ? this.osciNoise.stop() : this.osciNoise.start();
    this.isPlayingOsci = !this.isPlayingOsci;
  }
}
