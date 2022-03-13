import {createFeatureSelector, createReducer, on} from '@ngrx/store';
import {retrieveVersionGroups, retrieveVersions} from './version.actions';
import {Version} from '../version-list/version.model';


export const initialVersionState: Record<string, Version[]> = {};
export const initialVersionGroupState: string[] = [];

export const versionReducer = createReducer(
  initialVersionState,
  on(retrieveVersions, (state, { versions }) => versions)
);

export const versionGroupReducer = createReducer(
  initialVersionGroupState,
  on(retrieveVersionGroups, (state, { versionGroups }) => versionGroups)
);

export enum FeatureList {
  versions = 'versions',
  versionGroups = 'versionGroups'
}

export const selectVersions = createFeatureSelector<Record<string, Version[]>>(FeatureList.versions);
export const selectVersionGroups = createFeatureSelector<string[]>(FeatureList.versionGroups);

export interface AppState {
  versions: Record<string, Version[]>;
  versionGroups: string[];
  collection: ReadonlyArray<string>;
}

