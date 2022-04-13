export type BrandOption = {
  id: string;
  displayName: string;
  displayImageUrl: string;
};

export type Brands = {
  id: string;
  headline: string;
  options: BrandOption[];
};

export interface Phone {
  brand: string;
  displayName: string;
  contentKey: string;
  price: string;
  pricePrefix: string;
  priceSuffix: string;
  internalMemoryGB: number[];
  dualSIM: any;
  screenSize: string;
  networkTechnology: string[];
  colorOptions: ColorOption[];
  imgUrl: string;
  link: string;
}

export interface ColorOption {
  name: string;
  hex: string;
}
