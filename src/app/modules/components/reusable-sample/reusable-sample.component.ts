// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from "@angular/forms"
// import { of } from "rxjs"
// import { map, startWith, delay, switchMap } from "rxjs/operators"

// import { Identifiable } from "src/app/shared/models/Identifiable.model"

// import { pokemons, swCharacters } from "./data"

// @Component({
//   selector: 'app-reusable-sample',
//   templateUrl: './reusable-sample.component.html',
//   styleUrls: ['./reusable-sample.component.css']
// })
// export class ReusableSampleComponent implements OnInit {
//   form = new FormGroup({
//     pokemon: new FormControl(),
//     swCharacter: new FormControl(),

//     pokemons$ = this.form.get("pokemon").valueChanges.pipe(
//       startWith(null),
//       switchMap((name) => {
//         if (typeof name === "string") {
//           return of(pokemons).pipe(
//             delay(800),
//             map((response) =>
//               response.filter((p) => p.label.toUpperCase().includes(name))
//             )
//           )
//         }
//         return of([])
//       })
//     )
//     swCharacters$ = this.form.get("swCharacter").valueChanges.pipe(
//       startWith(null),
//       switchMap((name) => {
//         if (typeof name === "string") {
//           return of(swCharacters).pipe(
//             delay(800),
//             map((response) =>
//               response.filter((p) => p.label.toUpperCase().includes(name))
//             )
//           )
//         }
//         return of([])
//       })
//     )

//   constructor() { }

//   ngOnInit(): void {
//   }
//   submit() {
//     console.log(this.form.value)
//   }

// }
