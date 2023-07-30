export interface BookResponse {
  kind: string;
  totalItems: number;
  items?: ItemsEntity;
}

export interface Book {
    volumeInfo: VolumeInfo;
    id: string;
}

export interface ItemsEntity {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[] | null;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers?: IndustryIdentifiersEntity[] | null;
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories?: string[] | null;
  averageRating?: number | null;
  ratingsCount?: number | null;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  panelizationSummary?: PanelizationSummary | null;
  subtitle?: string | null;
}
export interface IndustryIdentifiersEntity {
  type: string;
  identifier: string;
}
export interface ReadingModes {
  text: boolean;
  image: boolean;
}
export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: ListPriceOrRetailPrice | null;
  retailPrice?: ListPriceOrRetailPrice1 | null;
  buyLink?: string | null;
  offers?: OffersEntity[] | null;
}
export interface ListPriceOrRetailPrice {
  amount: number;
  currencyCode: string;
}
export interface ListPriceOrRetailPrice1 {
  amount: number;
  currencyCode: string;
}
export interface OffersEntity {
  finskyOfferType: number;
  listPrice: ListPriceOrRetailPrice2;
  retailPrice: ListPriceOrRetailPrice2;
  giftable: boolean;
}
export interface ListPriceOrRetailPrice2 {
  amountInMicros: number;
  currencyCode: string;
}
export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: EpubOrPdf;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}
export interface EpubOrPdf {
  isAvailable: boolean;
}
export interface Pdf {
  isAvailable: boolean;
  acsTokenLink?: string | null;
}
export interface SearchInfo {
  textSnippet: string;
}
