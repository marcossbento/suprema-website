import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit {
  images: any[];

  constructor() {
    this.images = [
      { src: '../../assets/images/microscopio3.webp', alt: 'fotoSlider1', title: 'O laboratório N°1 em análises.', description: 'Somos especializados na prestação de serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade' },
      { src: '../../assets/images/heroWater.webp', alt: 'fotoSlider2', title: 'Atendimento completo da portaria Nº888', creditacaoImg: '../../assets/images/creditacao.webp', showCreditacao: true },
      { src: '../../assets/images/alimentosHero.webp', alt: 'fotoSlider3', title: 'Análise de Alimentos', description: 'In natura, processados e ultraprocessados' }
    ];
  }

  ngOnInit(): void {}
}
