export interface INews {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly phone: string;
  readonly img: string;
}

export interface ISomeItemProps extends INews {
  onPress(): void;
}
