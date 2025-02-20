import { Route } from './RouteConfig';
import { VersionConfig } from './VersionConfig';

export interface FeatureMetadata {
  id: string;
  name: string;
  enabled: boolean;
  routes?: Route[];
  versions: VersionConfig[];
  activeVersion: string;
}
