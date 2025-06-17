import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { KinkekaardidComponent } from './kinkekaardid/kinkekaardid.component';
import { EsindusedComponent } from './arrays/esindused/esindused.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeadedComponent } from './seaded/seaded.component';
import { KalkulaatorComponent } from './kalkulaator/kalkulaator.component';
import { TootedComponent } from './arrays/tooted/tooted.component';
import { KasutajadComponent } from './arrays/kasutajad/kasutajad.component';
import { HinnadComponent } from './arrays/hinnad/hinnad.component';
import { AutodComponent } from './arrays/autod/autod.component';
import { HomeComponent } from './arrays/home/home.component';
import { TootajadComponent } from './arrays/tootajad/tootajad.component';
import { HaldaHomeComponent } from './halda/halda-home/halda-home.component';
import { HaldaAutodComponent } from './halda/halda-autod/halda-autod.component';
import { HaldaHinnadComponent } from './halda/halda-hinnad/halda-hinnad.component';
import { HaldaKasutajadComponent } from './halda/halda-kasutajad/halda-kasutajad.component';
import { HaldaTootajadComponent } from './halda/halda-tootajad/halda-tootajad.component';
import { HaldaTootedComponent } from './halda/halda-tooted/halda-tooted.component';
import { HaldaEsindusedComponent } from './halda/halda-esindused/halda-esindused.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';

export const routes: Routes = [
    {path: "", component: AvalehtComponent},
    {path: "ostukorv", component: OstukorvComponent},
    {path: "kinkekaardid", component: KinkekaardidComponent},
    {path: "esindused", component: EsindusedComponent},
    {path: "lisa-toode", component: LisaToodeComponent},
    {path: "seaded", component: SeadedComponent},
    {path: "kalkulaator", component: KalkulaatorComponent},
    {path: "arrays-home", component: HomeComponent},
    {path: "autod", component: AutodComponent},
    {path: "hinnad", component: HinnadComponent},
    {path: "kasutajad", component: KasutajadComponent},
    {path: "tootajad", component: TootajadComponent},
    {path: "tooted", component: TootedComponent},
    {path: "halda-home", component: HaldaHomeComponent},
    {path: "halda-esindused", component: HaldaEsindusedComponent},
    {path: "halda-autod", component: HaldaAutodComponent},
    {path: "halda-hinnad", component: HaldaHinnadComponent},
    {path: "halda-kasutajad", component: HaldaKasutajadComponent},
    {path: "halda-tootajad", component: HaldaTootajadComponent},
    {path: "halda-tooted", component: HaldaTootedComponent},
    {path: "contact-us", component: ContactUsComponent},
    {path: "login", component:LoginComponent},
    {path: "signup", component:SingupComponent},
    {path: "**", component: NotFoundComponent}
];
