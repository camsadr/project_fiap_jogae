document.addEventListener('DOMContentLoaded', () => {
    // ⬇️ Validação do formulário de cadastro (em cada página com modal)
    const formCadastro = document.querySelector('#formCadastro');
    if (formCadastro) {
      formCadastro.addEventListener('submit', (e) => {
        const idade = parseInt(document.getElementById('idade').value);
        if (!formCadastro.checkValidity() || idade < 10) {
          e.preventDefault();
          e.stopPropagation();
          formCadastro.classList.add('was-validated');
        } else {
          alert('Cadastro enviado com sucesso! 🎮');
        }
      });
    }
  
    // ⬇️ Microanimação nos botões
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
  
    // ⬇️ Range de tempo (somente nas páginas que tiverem o campo)
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
  
    // ⬇️ Spinner no botão de preferências (formulário separado)
    const form = document.querySelector('#formPreferencias');
    const spinner = document.querySelector('#spinner');
    const btnTexto = document.querySelector('#btnTexto');
  
    if (form && spinner && btnTexto) {
      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
          form.classList.add('was-validated');
        } else {
          btnTexto.textContent = 'Carregando...';
          spinner.classList.remove('d-none');
        }
      });
    }
  
    // ⬇️ Sombra nos cards ao focar (em todas as páginas com .card)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-lg');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-lg');
      });
    });
  });
  