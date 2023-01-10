import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sushi } from './sushi';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sushi = [
      { id: 2, name: 'Maki', description: "En japonés, la palabra maki significa “rollo”. El maki sushi es un rollo de alga nori relleno de arroz y distintos ingredientes como pescado, marisco o verduras. Estos deliciosos rollitos son muy populares y permiten poner mucha imaginación a sus rellenos.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-69.jpg" },

      { id: 3, name: 'Uramaki', description: "Sushi enrollado, la capa externa es de arroz sushi y la interna es de alga nori. La palabra japonesa “Ura” significa al revés, por eso los ingredientes se colocan en otro orden. Se corta en porciones para disfrutarse de un bocado.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-72.jpg?w=826" },

      { id: 4, name: 'Nigiri', description: "Es la versión tradicional del sushi japonés. Es una pequeña porción de arroz con una forma alargada y cubierta de pescado, por lo general crudo. El arroz no debe mojarse en salsa de soya, únicamente el pescado para intensificar su sabor.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-71.jpg?w=826" },

      { id: 5, name: 'Gunkan', description: "Gunkan significa buque acorazado porque está inspirado en su forma, el alga nori reproduce la forma de la cubierta de un barco y fue inventado en 1941 en el restaurante Ginza Kyubey.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-52.jpg" },
      { id: 6, name: 'Inari', description: "Los inari son delgadas láminas de tofu frito (abura-age) en abundante aceite. El nombre viene de los santuarios Inari, donde el zorro tiene un puesto de honor.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-67.jpg?w=826" },

      { id: 7, name: 'Oshi', description: "El oshi sushi es una variedad más de sushi, el cual se obtiene prensando los distintos ingredientes que lo conforman para obtener finalmente una preparación rectangular que al cortarlo parecen pequeños bocados dulces.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-68.jpg?w=826" },

      { id: 8, name: 'Temaki', description: "Esta versión tiene forma de cono y puedes comerlo con la mano, como si fuera un taco porque el alga nori sirve para contener todos los ingredientes. En japonés “Te” significa mano y en conjunto con “Maki” puede traducirse a estar enrollado a mano.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-69.jpg" },

      { id: 9, name: 'Uwu', description: "La secuencia de caracteres uwu es un emoticono que se emplea para expresar felicidad o ternura.", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-72.jpg?w=826" },
      {id: 10, name: 'Dorayaki', description: "adofmaofmaiwjrmniasmdmaiwr", img: "https://img.freepik.com/premium-vector/sushi-illustration-flat-minimalist_192351-71.jpg?w=826"}
    ];
    return {sushi};
  }
  
  genId(sushi: Sushi[]): number {
    return sushi.length > 0 ? Math.max(...sushi.map(sushi => sushi.id)) + 1 : 11;
  }

}
