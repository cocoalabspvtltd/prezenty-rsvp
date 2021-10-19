import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ListGiftVouchersComponent } from 'app/pages/list-gift-vouchers/list-gift-vouchers.component';
import { VoucherDetailsComponent } from 'app/pages/voucher-details/voucher-details.component';
import { PaymentAddressComponent } from 'app/pages/payment-address/payment-address.component';
import { AddVideoComponent } from 'app/pages/add-video/add-video.component';
import { ListUsersComponent } from 'app/pages/list-users/list-users.component';
import { ChatBoxComponent } from 'app/pages/chat-box/chat-box.component';
import { RegisterEmailComponent } from 'app/pages/register-email/register-email.component';
import { GroupChatComponent } from 'app/pages/group-chat/group-chat.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'list-gift-vouchers',      component: ListGiftVouchersComponent },
    { path: 'voucher-details/:id',      component: VoucherDetailsComponent },
    { path: 'payment/:id',           component: PaymentAddressComponent },
    { path: 'sent-video',           component: AddVideoComponent },
    { path: 'users',           component: ListUsersComponent },
    { path: 'chat/:id',           component: ChatBoxComponent },
    { path: 'chat',           component: ChatBoxComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'register',        component: RegisterEmailComponent },
    { path: 'group-chat',        component: GroupChatComponent },




];
