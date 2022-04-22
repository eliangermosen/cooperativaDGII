import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Cuentas', url: '/cuenta', icon: 'wallet' },
    { title: 'Prestamos', url: '/prestamos', icon: 'cash' },
    { title: 'Inversiones', url: '/inversion', icon: 'pie-chart' },//por verificar o ese o diamond
    { title: 'Solicitudes', url: '/solicitud', icon: 'receipt' },
    { title: 'Descuentos', url: '/descuentos', icon: 'calculator' },
    { title: 'Noticias', url: '/noticia', icon: 'newspaper' },
    { title: 'Sugerencias', url: '/sugerencias', icon: 'folder' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' },
    { title: 'Tasas', url: '/tasas', icon: 'stats-chart' },
    { title: 'Videos', url: '/video', icon: 'film' },
    { title: 'Contactos', url: '/contacto', icon: 'mail' },
    { title: 'Configuración', url: '/configuracion', icon: 'cog' },
    { title: 'Cerrar Sesión', url: '/close', icon: 'log-out' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
