const enum Values {
  BAD,
  NEUTRAL,
  GOOD,
}

export class CreateEntryDTO {
  readonly date: string;
  readonly user: string;
  readonly value: Values;
}
