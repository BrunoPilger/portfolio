import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type ContactField = 'email' | 'whatsapp';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  protected readonly copiedField = signal<ContactField | null>(null);

  protected async copy(value: string, field: ContactField): Promise<void> {
    const copied = await this.writeToClipboard(value);
    if (!copied) {
      return;
    }

    this.copiedField.set(field);
    setTimeout(() => {
      // Evita que um timeout antigo apague o "copiado" de um clique mais recente.
      if (this.copiedField() === field) {
        this.copiedField.set(null);
      }
    }, 1800);
  }

  private async writeToClipboard(value: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      return this.legacyCopy(value);
    }
  }

  // Fallback pra quando a Clipboard API não funciona (Safari antigo,
  // permissão negada, etc).
  private legacyCopy(value: string): boolean {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    let success = false;
    try {
      success = document.execCommand('copy');
    } catch {
      success = false;
    }

    document.body.removeChild(textarea);
    return success;
  }
}
