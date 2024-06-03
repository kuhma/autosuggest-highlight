declare module "autosuggest-highlight/match" {
  /**
   * Calculates the characters to highlight in `text` based on `query`. Optional options can be provided.
   */
  export default function match(
    text: string,
    query: string,
    options?: {
      /** Search inside words (false by default) */
      insideWords: boolean;

      /** Find all matches of each word in `query` (false by default) */
      findAllOccurrences: boolean;

      /** Require each word of `query` to be found in `text` or else returns an empty set (false by default) */
      requireMatchAll: boolean;
    }
  ): number[] | number[][];
}

declare module "autosuggest-highlight/parse" {
  /**
   *  Breaks the given `text` to parts based on `matches`.
   */
  export default function parse(
    text: string,
    matches: number[] | number[][]
  ): Array<{ text: string; highlight: boolean }>;
}
