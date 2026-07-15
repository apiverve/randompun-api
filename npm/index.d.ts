declare module '@apiverve/randompun' {
  export interface randompunOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface randompunResponse {
    status: string;
    error: string | null;
    data: RandomPunData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface RandomPunData {
      category: null | string;
      rating:   number | null;
      pun:      null | string;
  }

  export default class randompunWrapper {
    constructor(options: randompunOptions);

    execute(callback: (error: any, data: randompunResponse | null) => void): Promise<randompunResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: randompunResponse | null) => void): Promise<randompunResponse>;
    execute(query?: Record<string, any>): Promise<randompunResponse>;
  }
}
