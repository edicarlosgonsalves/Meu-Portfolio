// Menu mobile

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Atualiza o ano automaticamente no rodapé
document.querySelector("#year").textContent = new Date().getFullYear();

// CONFIGURAÇÃO: coloca teu e-mail profissional entre as aspas.
// Exemplo: const emailContato = "edicarlos@email.com";
const emailContato = "edicarlosgonsalves630@gmail.com";

const copyContact = document.querySelector("#copyContact");
const contactHint = document.querySelector("#contactHint");

copyContact.addEventListener("click", async () => {
  if (!emailContato || !emailContato.includes("@")) {
    contactHint.textContent = "Edite script.js e adicione teu e-mail na variável emailContato.";
    return;
  }

  try {
    await navigator.clipboard.writeText(emailContato);
    contactHint.textContent = "E-mail copiado: " + emailContato;
  } catch {
    // Fallback para navegadores sem acesso à Clipboard API
    const campo = document.createElement("textarea");
    campo.value = emailContato;
    campo.setAttribute("readonly", "");
    campo.style.position = "absolute";
    campo.style.left = "-9999px";
    document.body.appendChild(campo);
    campo.select();
    const copiado = document.execCommand("copy");
    campo.remove();
    contactHint.textContent = copiado
      ? "E-mail copiado: " + emailContato
      : "Não foi possível copiar. E-mail: " + emailContato;
  }
});

// ATENÇÃO: antes de publicar, atualize o link do código da Nike no index.html
// para o endereço real do repositório específico desse projeto.
