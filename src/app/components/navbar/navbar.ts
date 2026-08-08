import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
  download?: boolean;
}

interface SocialLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class Navbar {
  protected readonly links: NavLink[] = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  protected readonly socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bruno-pilger-200449200/' },
    { label: 'GitHub', href: 'https://github.com/BrunoPilger' },
  ];

  protected readonly isMenuOpen = signal(false);
  protected readonly isHidden = signal(false);

  private lastScrollY = 0;

  // Mantém visível durante o scroll do clique; só libera quando o scroll
  // parar de fato, não depois de um tempo fixo.
  private isNavigating = false;
  private settleTimer: ReturnType<typeof setTimeout> | null = null;

  private startNavScroll(): void {
    this.isNavigating = true;
    this.isHidden.set(false);
    this.armSettleTimer();
  }

  private armSettleTimer(): void {
    if (this.settleTimer !== null) {
      clearTimeout(this.settleTimer);
    }
    this.settleTimer = setTimeout(() => {
      this.isNavigating = false;
      this.lastScrollY = window.scrollY;
    }, 150);
  }

  // Esconde ao rolar pra baixo, mostra ao rolar pra cima. Ignora perto do
  // topo pra não sumir assim que a página carrega.
  protected onWindowScroll(): void {
    const currentY = window.scrollY;

    if (this.isNavigating) {
      this.isHidden.set(false);
      this.armSettleTimer();
    } else if (this.isMenuOpen() || currentY < 120) {
      this.isHidden.set(false);
    } else {
      this.isHidden.set(currentY > this.lastScrollY);
    }

    this.lastScrollY = currentY;
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.syncBodyScroll();
  }

  private lockedScrollY = 0;

  // `overflow: hidden` sozinho não trava o scroll no Safari iOS; por isso
  // fixo o body e restauro a posição exata ao fechar o menu.
  private syncBodyScroll(): void {
    const body = document.body.style;

    if (this.isMenuOpen()) {
      this.lockedScrollY = window.scrollY;
      body.position = 'fixed';
      body.top = `-${this.lockedScrollY}px`;
      body.left = '0';
      body.right = '0';
    } else {
      body.position = '';
      body.top = '';
      body.left = '';
      body.right = '';
      window.scrollTo(0, this.lockedScrollY);
    }
  }

  protected onHomeClick(event: MouseEvent): void {
    event.preventDefault();
    this.closeMenu();
    this.startNavScroll();
    document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected onLinkClick(event: MouseEvent, link: NavLink): void {
    this.closeMenu();
    if (!link.href.startsWith('#')) {
      return;
    }
    event.preventDefault();
    this.startNavScroll();
    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
