/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T1 extends AllType, T2 extends AllType> 
(top:Pick<T1, keyof AllType>,
 bottom:Pick<T2, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}



// one more edition 

// export {};


//  type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// type TopType = Pick<AllType, "name" | 'color'>
// type BottomType = Pick<AllType, "position" | 'weight'>
// function compare(top: TopType, bottom: BottomType): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }