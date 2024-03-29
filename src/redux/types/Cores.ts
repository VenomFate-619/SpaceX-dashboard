export interface Cores {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: { name: string; full_name: string; landing_success: boolean };
  discriminator: "core";
}