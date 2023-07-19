import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  slide = [
    {
      title: "Lamborghini Revuelto",
      icon: "car-sport",
      img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png",
      class_section: "section-revuelto",
      class_title: "title-revuelto",
      class_icon: "icon-revuelto",
      description_first: "El Lamborghini Revuelto es un automóvil deportivo de alto rendimientofabricado por la reconocida marca italiana Lamborghini. Es un modeloemblemático que combina un diseño aerodinámico y agresivo con unrendimiento excepcional.",
      description_second: "El Revulto presenta líneas distintivas y una apariencia futurista qu|eevoca una sensación de velocidad y potencia. Su carrocería est|áconstruida con materiales livianos y de alta resistencia, como fibra d|ecarbono, para maximizar la velocidad y la eficiencia."
    },
    {
      title: "Lamborghini Urus",
      icon: "car-sport",
      img: "assets/images/urus.jpeg",
      class_section: "section-urus",
      class_title: "title-urus",
      class_icon: "icon-urus",
      description_first: " El Lamborghini Urus es un SUV de lujo fabricado por la prestigiosa marcaitaliana Lamborghini. Lanzado en 2018, el Urus combina la elegancia y elrendimiento deportivo característicos de Lamborghini con la practicidady versatilidad de un SUV.",
      description_second: "El diseño del Lamborghini Urus es imponente y agresivo, con líneasaerodinámicas y rasgos distintivos que reflejan su naturaleza deportiva.La carrocería presenta un perfil musculoso y aerodinámico, con detallesaerodinámicos integrados y una parrilla frontal de gran tamaño que leotorgan una apariencia poderosa y dominante",
    },
    {
      title: "Lamborghini Urus P",
      icon: "car-sport",
      img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2023/model_chooser/urus_performante_m.jpg",
      class_section: "section-urus-p",
      class_title: "title-urus-p",
      class_icon: "icon-urus-p",
      description_first: " El Lamborghini Urus es un SUV de lujo fabricado por la prestigiosa marcaitaliana Lamborghini. Lanzado en 2018, el Urus combina la elegancia y elrendimiento deportivo característicos de Lamborghini con la practicidady versatilidad de un SUV.",
      description_second: "El diseño del Lamborghini Urus es imponente y agresivo, con líneasaerodinámicas y rasgos distintivos que reflejan su naturaleza deportiva.La carrocería presenta un perfil musculoso y aerodinámico, con detallesaerodinámicos integrados y una parrilla frontal de gran tamaño que leotorgan una apariencia poderosa y dominante.",
    },
    {
      title: "Lamborghini Huracan",
      icon: "car-sport",
      img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/huracan_sterrato_m.png",
      class_section: "section-huracan-sterrato",
      class_title: "title-huracan",
      class_icon: "icon-huracan",
      description_first: "El Lamborghini Huracán Sterrato es una versión especial del popular superdeportivo Huracán de Lamborghini. Presentado como un concepto en 2019, el Sterrato combina la potencia y el rendimiento del Huracán con la capacidad todoterreno para ofrecer una experiencia de conducción emocionante en diferentes terrenos.",
      description_second: "El Huracán Sterrato se basa en el chasis del Huracán Evo, pero se ha modificado y elevado para mejorar su capacidad fuera de carretera. Cuenta con una mayor distancia al suelo, pasos de rueda ensanchados, protección adicional en la carrocería y neumáticos todo terreno más robustos.",
    },
    {
      title: "Lamborghini huracan STO",
      icon: "car-sport",
      img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_sto_m.jpg",
      class_section: "section-huracan-sto",
      class_title: "title-huracan-sto",
      class_icon: "icon-huracan-sto",
      description_first: "El Lamborghini Huracán STO (Super Trofeo Omologata) es un superdeportivo de alto rendimiento inspirado en los éxitos de Lamborghini en las carreras de GT3. Presentado en 2020, el Huracán STO ofrece una experiencia de conducción enfocada en la pista, combinando un diseño aerodinámico agresivo, un rendimiento excepcional y tecnología de vanguardia.",
      description_second: "El diseño del Huracán STO está inspirado en los autos de carreras, con una aerodinámica optimizada para maximizar el rendimiento en pista. Cuenta con un alerón trasero ajustable y un difusor trasero impresionante para generar una carga aerodinámica significativa y mejorar la estabilidad a altas velocidades. También presenta un capó delantero y un parachoques delantero rediseñados para mejorar el flujo de aire y la refrigeración.",
    },
    {
      title: "Lamborghini Green",
      icon: "car-sport",
      img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_tecnica_m.jpg",
      class_section: "section-huracan-green",
      class_title: "title-green",
      class_icon: "icon-huracan-green",
      description_first: "El Lamborghini Urus es un SUV de lujo fabricado por la prestigiosa marcaitaliana Lamborghini. Lanzado en 2018, el Urus combina la elegancia y elrendimiento deportivo característicos de Lamborghini con la practicidady versatilidad de un SUV.",
      description_second: "El diseño del Lamborghini Urus es imponente y agresivo, con líneasaerodinámicas y rasgos distintivos que reflejan su naturaleza deportiva.La carrocería presenta un perfil musculoso y aerodinámico, con detallesaerodinámicos integrados y una parrilla frontal de gran tamaño que leotorgan una apariencia poderosa y dominante.",
    },
  ]

  constructor(private route: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set("introShow", true)
    this.route.navigateByUrl("/menu/home")

  }

}
