/**
 * Fan layout for the hero cards.
 *
 * Source of truth = the pasted Figma CSS. The stage is treated as a
 * 1264 × 480 box (wide enough to contain the right-most "+4" card, whose
 * left edge sits at 1025.51px + 238.72px width). Each card's absolute
 * pixel position is converted to a percentage of that box so the whole
 * composition scales with its container while keeping the exact fan.
 *
 *   leftPx / 1264               -> left%
 *   (topPx - 538) / 480         -> top%   (538 = group top in the spec)
 *   238.72 / 1264 = 18.9%       -> card width
 *   card aspect = 238.72 : 336.77
 */

export type CardColor = "green" | "red" | "yellow" | "blue" | "black";

export interface FanCard {
  id: string;
  color: CardColor;
  /** left, as % of the stage width */
  left: number;
  /** top, as % of the stage height */
  top: number;
  /** resting rotation in degrees */
  rotate: number;
  /** base stacking order (left -> right = back -> front) */
  z: number;
}

export const CARD_ASPECT = 238.72 / 336.77; // width / height

export const FAN_CARDS: FanCard[] = [
  { id: "green", color: "green", left: 11.87, top: 0, rotate: 8.64, z: 1 },
  { id: "red", color: "red", left: 28.86, top: 15.12, rotate: 0, z: 2 },
  { id: "yellow", color: "yellow", left: 45.52, top: 2.51, rotate: 7.28, z: 3 },
  { id: "blue", color: "blue", left: 62.25, top: 10.15, rotate: -10.12, z: 4 },
  { id: "black", color: "black", left: 81.13, top: 8.48, rotate: 4.51, z: 5 },
];
