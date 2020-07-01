import { Chapter } from './chapter.model';


export class Subtitle {
  constructor(
    public name: string,
    public chapters?: Chapter[]
  ) {}
}

