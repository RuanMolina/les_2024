import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './components/admin/client-management/client-management.component';
import { OrderManagementComponent } from './components/admin/order-management/order-management.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { OrderConfirmationPageComponent } from './components/order-confirmation-page/order-confirmation-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { ShoppingCartPageComponent } from './components/shopping-cart-page/shopping-cart-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SwiperProductCardComponent } from './shared/swiper-product-card/swiper-product-card.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { OrdersComponent } from './components/user/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { GeneroPipe } from './pipe/genero.pipe';
import { DataPipe } from './pipe/data.pipe';
import { AtivoPipe } from './pipe/ativo.pipe';
import { ConfirmationDialogComponent } from './shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { DialogUpdateUserComponent } from './components/admin/user-management/dialog-update-user/dialog-update-user.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TelefonePipe } from './pipe/telefone.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { DialogNewAdressComponent } from './components/user/profile/dialog/dialog-new-adress/dialog-new-adress.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogNewCardComponent } from './components/user/profile/dialog/dialog-new-card/dialog-new-card.component';
/*MATERIAL*/




// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SearchpageComponent,
    ProductPageComponent,
    SwiperProductCardComponent,
    ShoppingCartPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    OrderConfirmationPageComponent,
    ProductManagementComponent,
    OrderManagementComponent,
    ClientManagementComponent,
    DashboardComponent,
    OrdersComponent,
    UserManagementComponent,
    ProfileComponent,
    GeneroPipe,
    DataPipe,
    AtivoPipe,
    ConfirmationDialogComponent,
    DialogUpdateUserComponent,
    TelefonePipe,
    CpfPipe,
    DialogNewAdressComponent,
    DialogNewCardComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTreeModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatSelectModule,
    NgChartsModule,
    HttpClientModule,
    MatDialogModule,
    NgxMaskDirective,
    MatAutocompleteModule,
    MatProgressSpinnerModule






  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },provideNgxMask()],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
