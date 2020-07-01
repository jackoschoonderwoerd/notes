import { Subtitle } from './subtitle.model';
import { Chapter } from './chapter.model';


export class Title {
  constructor(
    public title: string,
    public subtitles: Subtitle[]
  ) {}
}
