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
import { YksAutoComponent } from './yks/yks-auto/yks-auto.component';
import { YksHindComponent } from './yks/yks-hind/yks-hind.component';
import { YksKasutajaComponent } from './yks/yks-kasutaja/yks-kasutaja.component';
import { YksTootajaComponent } from './yks/yks-tootaja/yks-tootaja.component';
import { YksToodeComponent } from './yks/yks-toode/yks-toode.component';
import { MuudaAutoComponent } from './muuda/muuda-auto/muuda-auto.component';
import { MuudaHindComponent } from './muuda/muuda-hind/muuda-hind.component';
import { MuudaKasutajaComponent } from './muuda/muuda-kasutaja/muuda-kasutaja.component';
import { MuudaTootajaComponent } from './muuda/muuda-tootaja/muuda-tootaja.component';
import { MuudaToodeComponent } from './muuda/muuda-toode/muuda-toode.component';
import { MuudaEsindusComponent } from './muuda/muuda-esindus/muuda-esindus.component';
import { YksEsindusComponent } from './yks/yks-esindus/yks-esindus.component';
import { Tarnija1Component } from './tarnijad/tarnija1/tarnija1.component';
import { Tarnija2Component } from './tarnijad/tarnija2/tarnija2.component';
import { Tarnija3Component } from './tarnijad/tarnija3/tarnija3.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { ProfiilComponent } from './auth/profiil/profiil.component';
import { Login2Component } from './auth/login2/login2.component';
import { Login3Component } from './auth/login3/login3.component';
import { LoginHomeComponent } from './auth/login-home/login-home.component';

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
    
    {path: "auto/:mark", component: YksAutoComponent},
    {path: "hind/:index", component: YksHindComponent},
    {path: "kasutaja/:email", component: YksKasutajaComponent},
    {path: "tootaja", component: YksTootajaComponent},
    {path: "toode", component: YksToodeComponent},
    {path: "esindus", component: YksEsindusComponent},

    {path: "muuda-auto/:index", component: MuudaAutoComponent},
    {path: "muuda-hind/:index", component: MuudaHindComponent},
    {path: "muuda-kasutaja/:index", component: MuudaKasutajaComponent},
    {path: "muuda-tootaja/:index", component: MuudaTootajaComponent},
    {path: "muuda-toode/:index", component: MuudaToodeComponent},
    {path: "muuda-esindus/:index", component: MuudaEsindusComponent},

    {path: "halda-autod", component: HaldaAutodComponent},
    {path: "halda-hinnad", component: HaldaHinnadComponent},
    {path: "halda-kasutajad", component: HaldaKasutajadComponent},
    {path: "halda-tootajad", component: HaldaTootajadComponent},
    {path: "halda-tooted", component: HaldaTootedComponent},
    {path: "halda-esindused", component: HaldaEsindusedComponent},

    {path: "tarnija1", component: Tarnija1Component},
    {path: "tarnija2", component: Tarnija2Component},
    {path: "tarnija3", component: Tarnija3Component},    

    {path: "contact-us", component: ContactUsComponent},

    {path: "kaart", component: LeafletMapComponent},

    {path: "login-home", component:LoginHomeComponent},
    {path: "login", component:LoginComponent},
    {path: "login2", component:Login2Component},
    {path: "login3", component:Login3Component},
    {path: "signup", component:SingupComponent},
    {path: "profiil", component: ProfiilComponent},

    {path: "**", component: NotFoundComponent}
];
