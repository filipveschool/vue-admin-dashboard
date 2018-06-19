export default {

  bind(el, binding) {
    const dropdownToggle = el.querySelector('.dropdown-toggle');
    const dropdownToggleInput = el.querySelector('.dropdown-toggle input');
    const dropdownMenu = el.querySelector('.dropdown-menu');
    const dropdownItem = el.querySelector('.dropdown-menu-content');
    const dropdownIon = el.querySelector('.ion');
    const closeOnMenuClick = binding.modifiers.closeOnMenuClick;
    const isBlocked = binding.modifiers.isBlocked;

    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault();
      const isShown = el.classList.contains('show');
      setTimeout(() => {
        if (isBlocked) {
          if (!isShown) {
            dropdownIon.classList.add('ion-ios-arrow-up');
            el.classList.toggle('show', !isShown);
            dropdownMenu.classList.toggle('show', !isShown);
          }
        } else {
          el.classList.toggle('show', !isShown);
          dropdownMenu.classList.toggle('show', !isShown);
        }
      });
    });

    el.removeShow = (event) => {
      if (event.target !== dropdownToggleInput) {
        if (dropdownIon) {
          if (dropdownIon.classList.contains('ion-ios-arrow-up')) {
            dropdownIon.classList.remove('ion-ios-arrow-up');
          }
        }
        el.classList.remove('show');
        dropdownMenu.classList.remove('show');
      }
    };

    window.addEventListener('click', el.removeShow);

    dropdownMenu.addEventListener('click', (evt) => {
      if (!closeOnMenuClick) {
        evt.stopPropagation();
      }
    });

    if (dropdownItem) {
      dropdownItem.addEventListener('click', () => {
        if (dropdownIon) {
          if (dropdownIon.classList.contains('ion-ios-arrow-up')) {
            dropdownIon.classList.remove('ion-ios-arrow-up');
          }
        }
        dropdownMenu.classList.remove('show');
        el.classList.remove('show');
      });
    }
  },
  unbind: (el) => {
    window.removeEventListener('click', el.removeShow);
  },
};
