import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../core/angular-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    DashboardWelcomeComponent,
    ChatBotComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule, DashboardRoutingModule
  ],
  exports: [
    DashboardComponent, ToolbarComponent
  ]
})
export class DashboardModule { }
