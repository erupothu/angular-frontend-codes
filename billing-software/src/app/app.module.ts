import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule} from '@angular/material/button';
// import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MyMaterialModuleModule } from './core/my-material-module.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

const appRoutes: Routes = [
  {path: 'view', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
  {path: '', component: LoginComponent},
]

// export function translateHttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, MyMaterialModuleModule,MatIconModule, RouterModule. 
    forRoot(appRoutes, { onSameUrlNavigation: 'reload' }), HttpClientModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: translateHttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
