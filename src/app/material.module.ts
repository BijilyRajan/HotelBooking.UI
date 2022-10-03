import { NgModule } from "@angular/core";

import {MatToolbarModule,} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule }  from '@angular/material/icon';
import { MatListModule }  from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports:[
        MatToolbarModule, 
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatExpansionModule,
        MatCardModule
    ],
    exports:[
        MatToolbarModule, 
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatExpansionModule,
        MatCardModule
    ]
})

export class MaterialModule{}