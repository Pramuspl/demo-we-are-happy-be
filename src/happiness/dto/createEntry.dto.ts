const enum Moods {
  BAD,
  NEUTRAL,
  GOOD,
}

export class CreateEntryDTO {
  readonly date: Date;
  readonly value: Moods;
}
