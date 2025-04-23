// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Animação em botões
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.transition = 'transform 0.2s ease-in-out';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  // Atualização dinâmica do range (tempo de jogo)
  const range = document.querySelector('#tempo');
  if (range) {
    const formText = range.nextElementSibling;
    const label = {
      1: '⏱️ Até 5h (Rápido)',
      2: '⏱️ Até 20h (Médio)',
      3: '⏱️ Mais de 20h (Longo)'
    };
    formText.innerHTML = label[range.value];
    range.addEventListener('input', () => {
      formText.innerHTML = label[range.value];
    });
  }

  // Validação com spinner e redirecionamento
  const form = document.querySelector('#formPreferencias');
  const spinner = document.querySelector('#spinner');
  const btnTexto = document.querySelector('#btnTexto');

  if (form) {
    form.addEventListener('submit', (e) => {
      const idade = parseInt(document.getElementById('idade').value);

      if (!form.checkValidity() || idade < 10) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      e.preventDefault(); // Interrompe envio direto para usar redirecionamento

      // Exibe carregamento
      btnTexto.textContent = "Carregando...";
      spinner.classList.remove('d-none');

      // Redireciona após um pequeno tempo
      setTimeout(() => {
        alert('Cadastro realizado com sucesso! 🎮 Vamos te mostrar suas recomendações.');
        window.location.href = "recomendacoes.html";
      }, 1500);
    });
  }

  // Sombra nos cards ao focar (responsivo e acessível)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-glow');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-glow');
    });
  });
});
