// ======= شريط الأخبار =======
const newsItems = [
  { text: "إعلان: ............", url: "#news" },
  { text: "تكريم متطوعي الحملة الشتوية لدعم الأشخاص بدون مأوى.", url: "#news" },
  { text: "فتح باب التسجيلات ة.", url: "#services" },
  { text: "بلاغ: أوقات العمل في الصيف من الأحد إلى الخميس 8:00-16:30.", url: "#contact" }
];

function initTicker() {
  const list = document.querySelector('.ticker-list');
  if (!list) return;
  function render(items) {
    list.innerHTML = '';
    [...items, ...items].forEach(item => {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.text;
      a.className = 'badge';
      const li = document.createElement('span');
      li.style.marginInlineEnd = '2rem';
      li.appendChild(a);
      list.appendChild(li);
    });
  }
  render(newsItems);
}
document.addEventListener('DOMContentLoaded', initTicker);

// ======= السلايدر =======
function initSlider() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  if (slides.length === 0) return;
  let idx = 0;
  slides[idx].classList.add('active');
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
}
document.addEventListener('DOMContentLoaded', initSlider);

// ======= إرسال نموذج الاتصال (عرضي) =======
// هذه الدالة تُظهر مثال إرسال دون باك-إند فعلي.
// يمكنك استبدال fetch بعنوان API خاص بكم أو بدمج خدمة بريد.
function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // مثال: إرسال عبر mailto كحل مؤقت
    const subject = encodeURIComponent('اتصال من موقع المديرية');
    const body = encodeURIComponent(
      `الاسم: ${data.name}\nالهاتف: ${data.phone}\nالبريد: ${data.email}\nالموضوع: ${data.topic}\n\nالرسالة:\n${data.message}`
    );
    window.location.href = `mailto:contact@dsas-annaba.dz?subject=${subject}&body=${body}`;

    // بديل: إرسال إلى API
    // await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
  });
}
document.addEventListener('DOMContentLoaded', initContactForm);
