import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    RippleModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items = [
    { label: 'Quem Somos',
      icon: 'pi pi-fw pi-building' 
    },
    { label: 'Serviços',
      icon: 'pi pi-fw pi-briefcase',
      items: [ // Subitens para o dropdown
        {
          label: 'Análise de Água',
          routerLink: '/analiseDeAgua'
        },
        {
          label: 'Análise de Alimentos',
          routerLink: '/analiseDeAlimentos'
        },
        {
          label: 'Análise de Solo',
          routerLink: '/analiseDeSolo'
        }
      ] 
    },
    { label: 'Contato',
      icon: 'pi pi-fw pi-phone' 
    },
    { label: 'Estrutura',
      icon: 'pi pi-fw pi-verified' 
    }
  ];
}
