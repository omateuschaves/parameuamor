// Lógica de prompts para senhas
window.addEventListener('DOMContentLoaded', () => {
  const senha1 = prompt('Senha misteriosa (dica: familia)');
  if (senha1 !== 'bugudinha') {
    document.body.innerHTML = '<p style="text-align:center; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; color:#333; font-size:1.25rem;">Acesso negado.</p>';
    return;
  }
  const senha2 = prompt('Segunda senha (dica: comida favorita da casal)');
  if (senha2 !== 'japa') {
    document.body.innerHTML = '<p style="text-align:center; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; color:#333; font-size:1.25rem;">Acesso negado.</p>';
    return;
  }
  // Se ambas corretas, exibe o card
  createCard();
});
