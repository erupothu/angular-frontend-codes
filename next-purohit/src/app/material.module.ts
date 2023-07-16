import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        FlexLayoutModule
    ]
})
export class MaterialModule { }