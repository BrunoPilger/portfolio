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
  protected readonly jobs: Job[] = [
    {
      company: 'Sky Informática',
      role: 'Suporte Técnico',
      period: 'Atual',
      description: [
        'Atualmente atuo prestando suporte técnico para um sistema utilizado por cartórios em todo o Rio Grande do Sul. Meu trabalho envolve atendimento aos usuários, análise de problemas, compreensão das regras de negócio do Registro de Imóveis e desenvolvimento de consultas SQL para criação e adaptação de relatórios conforme as necessidades dos clientes.',
      ],
    },
    {
      company: 'Gradual Soluções',
      role: 'Suporte Técnico • Desenvolvimento Web',
      period: '2021 – 2025',
      description: [
        'Iniciei atuando no suporte técnico de um ERP voltado para indústrias metalúrgicas, adquirindo conhecimento sobre tributação, processos empresariais e regras de negócio.',
        'Posteriormente passei a integrar o desenvolvimento da versão web do sistema, participando da construção do Front-end com HTML, CSS, JavaScript, Angular e TypeScript. Após concluir a implementação das interfaces, evoluí para o desenvolvimento de funcionalidades, validações, integrações entre telas, consultas SQL e implementação completa de módulos seguindo as regras do sistema legado.',
        'Uma das experiências mais enriquecedoras desse período foi participar da migração de um sistema legado para a versão web. Meu trabalho consistia em compreender o funcionamento de cada módulo existente, identificar suas regras de negócio e recriar toda a experiência na nova aplicação, implementando desde a interface até as integrações com banco de dados.',
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
