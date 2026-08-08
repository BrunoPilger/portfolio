import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experiencia {
  // Mais recente primeiro. description: [] = ainda sem texto escrito.
  protected readonly jobs: Job[] = [
    {
      company: 'Unimed Vale do Caí',
      role: 'Desenvolvedor Júnior',
      period: 'Atual',
      description: [],
    },
    {
      company: 'Sky Informática',
      role: 'Suporte Técnico',
      period: '2025 – 2026',
      description: [
        'Atuei prestando suporte técnico para um sistema utilizado por cartórios em todo o Rio Grande do Sul. Meu trabalho envolvia atendimento aos usuários, análise de problemas, compreensão das regras de negócio do Registro de Imóveis e desenvolvimento de consultas SQL para criação e adaptação de relatórios conforme as necessidades dos clientes.',
      ],
    },
    {
      company: 'Gradual Soluções',
      role: 'Suporte Técnico • Desenvolvimento Web',
      period: '2021 – 2025',
      description: [
        'Iniciei minha trajetória na empresa atuando no suporte técnico de um ERP voltado para indústrias metalúrgicas, adquirindo conhecimento sobre tributação, processos empresariais e regras de negócio.',
        'Posteriormente, passei a integrar o desenvolvimento da versão web do sistema, participando da migração de módulos do sistema legado para a nova aplicação. Atuei desde a construção das interfaces com HTML, CSS, JavaScript, Angular e TypeScript até a implementação de funcionalidades, validações, integrações entre telas e consultas SQL.',
        'Um dos principais desafios foi compreender o funcionamento dos módulos existentes, identificar suas regras de negócio e recriá-los na aplicação web, incluindo a comunicação com o banco de dados e a implementação dos processos necessários para cada funcionalidade.',
      ],
    },
    {
      company: 'TV Mon HD',
      role: 'Editor de Vídeo e Operador de Exibição',
      period: '2020 – 2021',
      description: [
        'Minha primeira experiência profissional em tecnologia. Atuei na edição de vídeos, operação da programação da emissora e suporte às transmissões ao vivo, desenvolvendo organização, atenção aos detalhes e capacidade de trabalhar sob pressão.',
      ],
    },
  ];
}
