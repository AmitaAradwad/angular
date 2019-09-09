import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthorisedTopNavComponent } from "./layout/authorised/authorised-top-nav/authorised-top-nav.component";
import { AuthorisedSideNavTogglerComponent } from "./layout/authorised/authorised-side-nav-toggler/authorised-side-nav-toggler.component";
import { AuthorisedLayoutComponent } from "./layout/authorised/authorised-layout/authorised-layout.component";
import { AuthorisedSideNavComponent } from "./layout/authorised/authorised-side-nav/authorised-side-nav.component";
import { ProductsComponent } from "./products/products.component";
import { PageContentComponent } from "./page-content/page-content.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PiechartComponent } from "./piechart/piechart.component";
import { LinegraphComponent } from "./linegraph/linegraph.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthorisedTopNavComponent,
    AuthorisedSideNavTogglerComponent,
    AuthorisedLayoutComponent,
    AuthorisedSideNavComponent,
    ProductsComponent,
    PageContentComponent,
    BarChartComponent,
    PiechartComponent,
    LinegraphComponent,
    TableComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
