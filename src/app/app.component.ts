import { Component, OnInit } from '@angular/core';
import Nurbs from 'nurbs';
import fromJSON from '../assets/19-regression.result.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  json = fromJSON;

  points: number[][] = [];

  ngOnInit(): void {
    this.testNurbs();
  }

  testNurbs() {
    let splineX = this.json.linear[0];
    let splineY = this.json.linear[1];

    this.points = splineX.vertices.map((v, i) => [v, splineY.vertices[i]]);

    let curve = new Nurbs({
      points: this.points,
      degree: splineX.curve_order - 1,
      knots: [splineX.knots, splineY.knots],
    });

    console.log(curve.evaluate([], 2));

    let derivative = curve.evaluator(1);

    console.log(derivative([], 2));
  }
}
