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

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.syncBodyScroll();
  }

  private lockedScrollY = 0;

  // Locks page scroll while the drawer is open. `overflow: hidden` alone
  // doesn't reliably block scrolling on iOS Safari, so the body is pinned in
  // place with `position: fixed` and restored to its exact scroll position
  // on close — otherwise scrolling the page behind the drawer triggers the
  // mobile browser's address bar to hide, desyncing the fixed drawer height
  // mid-gesture.
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
    document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected onLinkClick(event: MouseEvent, link: NavLink): void {
    this.closeMenu();
    if (!link.href.startsWith('#')) {
      return;
    }
    event.preventDefault();
    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
