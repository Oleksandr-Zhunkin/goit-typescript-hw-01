type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopObj = Pick<AllType, "name" | "color">;

type BottomObj = Pick<AllType, "position" | "weight">;

function compare(top: TopObj, bottom: BottomObj): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// second solution
// function compare<
//   TTop extends Pick<AllType, "name" | "color">,
//   TBottom extends Pick<AllType, "position" | "weight">
// >(top: TTop, bottom: TBottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }
