// Função para alternar o menu
function toggleMenu() {
  const menu = document.querySelector('.menu'); // Seleciona o menu
  menu.classList.toggle('active'); // Alterna a classe 'active'
}

let currentIndex = 0;

function showTestimonial(index) {
  const wrapper = document.querySelector(".testimonial-wrapper");
  const dots = document.querySelectorAll(".dot");

  wrapper.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  currentIndex = index;
}

function nextTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  if (currentIndex < testimonials.length - 1) {
    showTestimonial(currentIndex + 1);
  } else {
    showTestimonial(0);
  }
}

function prevTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  if (currentIndex > 0) {
    showTestimonial(currentIndex - 1);
  } else {
    showTestimonial(testimonials.length - 1);
  }
}

// Suporte ao deslizar no celular
const wrapper = document.querySelector(".testimonial-wrapper");
let startX = 0;

wrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

wrapper.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    nextTestimonial();
  } else if (startX < endX - 50) {
    prevTestimonial();
  }
});
