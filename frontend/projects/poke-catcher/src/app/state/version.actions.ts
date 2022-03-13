import {createAction, props} from '@ngrx/store';
import {Version} from '../version-list/version.model';

export const retrieveVersions = createAction('[Version List/API] Retrieve Success', props<{versions: Record<string, Version[]>}>());
export const retrieveVersionGroups = createAction('[Version Group/API] Retrieve Success', props<{versionGroups: string[]}>());
