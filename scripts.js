document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Отменяем отправку формы на сервер
      window.location.href = "/thanks.html"; // Перенаправляем на страницу "Спасибо"
    });
  });
});
