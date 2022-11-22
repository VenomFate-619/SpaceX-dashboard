export interface Payloads {
  name: string;
  type: string;
  reused: boolean;
  customers: string[];
  norad_ids: [];
  nationalities: string[];
  manufacturers: [];
  id: string;
  discriminator: "payload";
  orbit: string
}