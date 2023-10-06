import type { Common, Utils } from '../../types';
import type { Result } from './result';
import type * as Params from './params';

export type UploadFile = (
  uid: Common.UID.Schema,
  entity: Record<string, unknown>,
  files: Record<string, unknown>
) => Promise<void>;

export interface DocumentService {
  uploadFiles: UploadFile;

  // TODO: Split in 2 different signatures for both single types & collection types
  findMany<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<
      TContentTypeUID,
      | 'fields'
      | 'filters'
      | '_q'
      | 'pagination:offset'
      | 'sort'
      | 'populate'
      | 'publicationState'
      | 'plugin'
    >
  >(
    uid: TContentTypeUID,
    params?: TParams
  ): Promise<
    Utils.Expression.MatchFirst<
      [
        [Common.UID.IsCollectionType<TContentTypeUID>, Result<TContentTypeUID, TParams>[]],
        // Is this true for documents?
        [Common.UID.IsSingleType<TContentTypeUID>, Result<TContentTypeUID, TParams> | null]
      ],
      (Result<TContentTypeUID, TParams> | null) | Result<TContentTypeUID, TParams>[]
    >
  >;

  findFirst<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<
      TContentTypeUID,
      'fields' | 'filters' | '_q' | 'sort' | 'populate' | 'publicationState' | 'plugin'
    >
  >(
    uid: TContentTypeUID,
    params?: TParams
  ): Promise<Result<TContentTypeUID, TParams> | null>;

  findOne<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<TContentTypeUID, 'fields' | 'populate' | 'filters' | 'sort'>
  >(
    uid: TContentTypeUID,
    documentId: Params.Attribute.ID,
    params?: TParams
  ): Promise<Result<TContentTypeUID, TParams> | null>;

  delete<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<TContentTypeUID, 'fields' | 'populate'>
  >(
    uid: TContentTypeUID,
    documentId: Params.Attribute.ID,
    params?: TParams
  ): Promise<Result<TContentTypeUID, TParams> | null>;

  // TODO: Make data param required
  create<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<TContentTypeUID, 'data' | 'files' | 'fields' | 'populate'>
  >(
    uid: TContentTypeUID,
    params: TParams
  ): Promise<Result<TContentTypeUID, TParams>>;

  update<
    TContentTypeUID extends Common.UID.ContentType,
    TParams extends Params.Pick<TContentTypeUID, 'data:partial' | 'files' | 'fields' | 'populate'>
  >(
    uid: TContentTypeUID,
    documentId: Params.Attribute.ID,
    params?: TParams
  ): Promise<Result<TContentTypeUID, TParams> | null>;
}