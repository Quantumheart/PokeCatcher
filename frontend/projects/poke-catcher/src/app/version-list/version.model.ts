import {NamedAPIResource} from '../app.component';

export interface Version {
  id: number;
  /** The name for this resource */
  name: string;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** The version group this version belongs to */
  version_group: NamedAPIResource;
}

export interface Name {
  /** The localized name for an API resource in a specific language */
  name: string;
  /** The language this name is in */
  language: NamedAPIResource;
}
