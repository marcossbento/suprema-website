import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items = [
    { 
      label: 'Quem Somos',
      icon: 'pi pi-fw pi-building' 
    },
    { 
      label: 'Serviços',
      icon: 'pi pi-fw pi-briefcase',
      items: [ // Subitens para o dropdown
        {
          label: 'Análise de Água',
          routerLink: '/analise-de-agua'
        },
        {
          label: 'Análise de Alimentos',
          routerLink: '/analise-de-alimentos'
        },
        {
          label: 'Análise de Solo',
          routerLink: '/analise-de-solo'
        },
        {
          label: 'Efluentes',
          routerLink: '/efluentes'
        },
        {
          label: 'Cosméticos',
          routerLink: '/cosmeticos'
        },
        {
          label: 'Amostragem',
          routerLink: '/amostragem'
        },
        {
          label: 'Limpeza e Higienização de Reservatórios e Caminhoes',
          routerLink: '/limpeza'
        },
        {
          label: 'Outros Serviços',
          routerLink: '/outros-servicos'
        }
      ] 
    },
    { 
      label: 'Contato',
      icon: 'pi pi-fw pi-phone' 
    },
    { 
      label: 'Estrutura',
      icon: 'pi pi-fw pi-verified' 
    }
  ];
}
