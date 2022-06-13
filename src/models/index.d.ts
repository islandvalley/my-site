import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArticlesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Articles {
  readonly id: string;
  readonly title: string;
  readonly datetime: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Articles, ArticlesMetaData>);
  static copyOf(source: Articles, mutator: (draft: MutableModel<Articles, ArticlesMetaData>) => MutableModel<Articles, ArticlesMetaData> | void): Articles;
}