import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Skills } from './components/skills/skills';
import { Experiencia } from './components/experiencia/experiencia';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar, Sobre, Skills, Experiencia, Projetos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
