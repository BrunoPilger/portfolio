import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Skill {
  name: string;
  category: string;
  learning?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skills: Skill[] = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Angular', category: 'Framework' },
    { name: 'C#', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'Java', category: 'Aprendendo', learning: true },
  ];
}
