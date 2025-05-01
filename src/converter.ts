export function convertPxToRem(text: string, basePx: number): string {
    return text.replace(/(\d*\.?\d+)px/g, (_, pxValue) => {
      const remValue = (parseFloat(pxValue) / basePx).toFixed(4);
      return `${remValue}rem`;
    });
  }  