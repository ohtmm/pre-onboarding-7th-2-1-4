import { atom } from "recoil";
import { fetchData } from "./api/api";

const carsAtomDefault = fetchData();

export const carsAtom = atom({
  key: "cars",
  default: carsAtomDefault
});

export const segmentAtom = atom({
  key: "carsSegment",
  default: ""
});
