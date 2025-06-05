import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { UudisedComponent } from './uudised/uudised.component';
import { MeistComponent } from './meist/meist.component';
import { LisaUudisComponent } from './lisa-uudis/lisa-uudis.component';

export const routes: Routes = [
    {path: "", component: AvalehtComponent},
    {path: "kontakt", component: KontaktComponent},
    {path: "meist", component: MeistComponent},
    {path: "uudised", component: UudisedComponent},
    {path: "lisa-uudis", component:LisaUudisComponent}
];
