import { Links } from "./Links";
import { Failures } from "./Failures";
import { Cores } from "./Cores";
import { Rocket } from "./Rocket";
import { Ship } from "./Ship";
import { Payloads } from "./Payloads";
import { Launchpad } from "./Launchpad";

export interface Launches {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  };
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: string;
  tbd: boolean;
  net: boolean;
  window: number;
  rocket: Rocket;
  success: boolean;
  details: string;
  ships: Ship[];
  capsules: [];
  payloads: Payloads[];
  launchpad: Launchpad;
  auto_update: boolean;
  failures: Failures[];
  crew: [];
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: string;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Cores[];
  id: string;
}
