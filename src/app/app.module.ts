import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule, TooltipModule } from '@swimlane/ngx-charts';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent, TooltipComponent } from './components';
import { ListComponent } from './components/list/list.component';
import { TooltipDirective } from './directives/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ListComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxChartsModule,
    NgChartsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    TooltipModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
