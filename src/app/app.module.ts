import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListGiftVouchersComponent } from './pages/list-gift-vouchers/list-gift-vouchers.component';
import { VoucherDetailsComponent } from './pages/voucher-details/voucher-details.component';
import { PaymentAddressComponent } from './pages/payment-address/payment-address.component';
import { AddVideoComponent } from './pages/add-video/add-video.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { ChatBoxComponent } from './pages/chat-box/chat-box.component';
import { RegisterEmailComponent } from './pages/register-email/register-email.component';
import { GroupChatComponent } from './pages/group-chat/group-chat.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    ListGiftVouchersComponent,
    VoucherDetailsComponent,
    PaymentAddressComponent,
    AddVideoComponent,
    ListUsersComponent,
    ChatBoxComponent,
    RegisterEmailComponent,
    GroupChatComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
