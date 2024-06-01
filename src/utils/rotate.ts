const offsets: { [key: number]: { [key: number]: any[][] } } = {
  0: {
    1: [
      [180, 1, 1, true],
      [180, 1, -1, true],
      [180, 1, 1, false],
      [180, -1, 1, false],
    ],
    2: [
      [90, 1, 1, false],
      [90, -1, -1, false],
      [90, 1, -1, false],
      [90, -1, 1, false],
    ],
    3: [
      [90, -1, 1, false],
      [90, 1, -1, false],
      [90, 1, 1, false],
      [90, -1, -1, false],
    ],
  },
  1: {
    2: [
      [90, 1, -1, false],
      [90, -1, 1, false],
      [90, -1, -1, false],
      [90, 1, 1, false],
    ],
    3: [
      [90, 1, -1, false],
      [90, -1, 1, false],
      [90, -1, -1, false],
      [90, 1, 1, false],
    ],
  },
  2: {
    1: [
      [90, -1, 1, false],
      [90, 1, -1, false],
      [90, 1, 1, false],
      [90, -1, -1, false],
    ],
    3: [
      [180, -1, 1, false],
      [180, 1, 1, false],
      [180, 1, 1, true],
      [180, 1, -1, true],
    ],
  },
  3: {
    1: [
      [90, 1, 1, false],
      [90, -1, -1, false],
      [90, 1, -1, false],
      [90, -1, 1, false],
    ],
    2: [
      [180, 1, 1, false],
      [180, -1, 1, false],
      [180, 1, -1, true],
      [180, 1, 1, true],
    ],
  },
};

const rotateToTranslate = (
  boxSize: number,
  angle: number,
  k1: number,
  k2: number,
  isVertical: boolean
): [tx: number, ty: number] => {
  const gap = boxSize / 2;
  const halfGap = gap / 2;
  switch (angle) {
    case 90:
      return [k1 * (boxSize - halfGap), k2 * (boxSize - halfGap)];
    case 180:
      return isVertical ? [0, k2 * (boxSize + gap)] : [k1 * (boxSize + gap), 0];
    default:
      return [0, 0];
  }
};

const getTranslate = (
  boxSize: number,
  prevIndex: number,
  selectedIndex: number,
  item: number
): string => {
  let tx: number = 0;
  let ty: number = 0;
  if (selectedIndex === 0) return "translate(0)";
  const offset: any = offsets[prevIndex][selectedIndex][item];
  [tx, ty] = rotateToTranslate(
    boxSize,
    offset[0],
    offset[1],
    offset[2],
    offset[3]
  );

  return `translate(${tx}px, ${ty}px)`;
};

export default getTranslate;
