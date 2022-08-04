import { Component, OnInit } from "@angular/core";
import Nurbs from "nurbs";
import * as fromJSON from "../assets/19-regression.result.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  json = fromJSON;




  ngOnInit(): void {
    console.log(this.json.linear);
    this.testNurbs()


  }

  testNurbs(){

    let points: number[][] = [];
    // this.json.linear[0].vertices.forEach((v, i, a) => {
    //   ?????
    //   points.push(coord);
    // })

    console.log(points);


    let curve = new Nurbs({
        points: points,
        degree: this.json.linear[0].curve_order,
        knots: this.json.linear[0].knots,
        boundary: 'closed',
      });

        console.log(curve.domain)

        // console.log(curve.evaluate([], 2))

  }
}
