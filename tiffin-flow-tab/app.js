// TiffinFlow Tablet Interactive Controller
document.addEventListener('DOMContentLoaded', () => {
  // Chip button toggles (Veg/Non-Veg/Jain, Meal slots)
  document.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      if (parent) {
        parent.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  // Modal open/close controls
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-open-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = trigger.closest('.tablet-modal-overlay');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Category filter tabs on Weekly Menu
  const categoryFilters = document.querySelectorAll('.menu-filter-btn');
  const mealCards = document.querySelectorAll('.food-card[data-category]');
  
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      
      mealCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Interactive Day switching in Build-Week planner
  const dayTabs = document.querySelectorAll('.day-nav-btn');
  const dayCards = document.querySelectorAll('.day-plan-card');
  
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetDay = tab.getAttribute('data-day');
      
      dayCards.forEach(card => {
        if (targetDay === 'all' || card.getAttribute('data-day') === targetDay) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Star rating controls in Reviews
  document.querySelectorAll('.star-rating-box').forEach(box => {
    const stars = box.querySelectorAll('.star-item');
    stars.forEach((star, idx) => {
      star.addEventListener('click', () => {
        stars.forEach((s, sIdx) => {
          if (sIdx <= idx) {
            s.classList.add('filled');
          } else {
            s.classList.remove('filled');
          }
        });
      });
    });
  });
});
