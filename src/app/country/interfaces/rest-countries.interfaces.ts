interface RESTCountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Translations;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2018': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Translations {
  ara: Spa;
  bre: Spa;
  ces: Spa;
  cym: Spa;
  deu: Spa;
  est: Spa;
  fin: Spa;
  fra: Spa;
  hrv: Spa;
  hun: Spa;
  ind: Spa;
  ita: Spa;
  jpn: Spa;
  kor: Spa;
  nld: Spa;
  per: Spa;
  pol: Spa;
  por: Spa;
  rus: Spa;
  slk: Spa;
  spa: Spa;
  srp: Spa;
  swe: Spa;
  tur: Spa;
  urd: Spa;
  zho: Spa;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Languages {
  spa: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  MXN: MXN;
}

interface MXN {
  symbol: string;
  name: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  spa: Spa;
}

interface Spa {
  official: string;
  common: string;
}
