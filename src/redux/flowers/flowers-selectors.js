import { createSelector } from "@reduxjs/toolkit";

export const getFlowers = (state) => state.flowers.flowers;

export const getFlowersByType = createSelector([getFlowers], (flowers) => {
  return flowers.reduce((acc, flower) => {
    acc[flower.type] = acc[flower.type]
      ? [...acc[flower.type], flower]
      : [flower];
    return acc;
  }, {});
});
