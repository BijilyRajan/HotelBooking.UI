import { NgModule } from "@angular/core";

import {MatToolbarModule,} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule }  from '@angular/material/icon';
import { MatListModule }  from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports:[
        MatToolbarModule, 
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ],
    exports:[
        MatToolbarModule, 
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule{}