/**
 * Fan layout for the hero cards.
 *
 * Source of truth = the pasted Figma CSS, but positions are expressed as
 * percentages of the full 1440px design canvas (not just the card cluster),
 * then shifted so the cluster is centred horizontally at 50% of the stage.
 *
 *   stage aspect = 1440 / 470
 *   leftPx / 1440  (+0.9% centring shift)   -> left%
 *   (topPx - 538) / 470                      -> top%   (538 = group top)
 *   238.72 / 1440 = 16.58%                   -> card width
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
export const CARD_WIDTH_PCT = 16.58; // 238.72 / 1440

export const FAN_CARDS: FanCard[] = [
  { id: "green", color: "green", left: 11.31, top: 0, rotate: 8.64, z: 1 },
  { id: "red", color: "red", left: 26.23, top: 15.44, rotate: 0, z: 2 },
  { id: "yellow", color: "yellow", left: 40.86, top: 2.56, rotate: 7.28, z: 3 },
  { id: "blue", color: "blue", left: 55.54, top: 10.36, rotate: -10.12, z: 4 },
  { id: "black", color: "black", left: 72.11, top: 8.66, rotate: 4.51, z: 5 },
];
