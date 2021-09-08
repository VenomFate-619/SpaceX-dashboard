export interface Launchpad {
  images: {
    large: string[];
  };
  name: string;
  full_name: string;
  type: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  landing_attempts: number;
  landing_successes: number;
  wikipedia:string;
  details: string;
}