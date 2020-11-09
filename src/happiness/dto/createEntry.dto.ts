const enum Moods {
  BAD,
  NEUTRAL,
  GOOD,
}

export class CreateEntryDTO {
  readonly date: string;
  readonly value: Moods;
}
