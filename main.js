function changeTheme(that) {
  const themeName = that.getAttribute('themeName');
  const previewImage = document.getElementById('previewImage');
  const themeStatus = document.getElementById('themeStatus');

  document.body.className = themeName;

  that.parentElement.childNodes.forEach((child) => {
    if (child.classList?.contains('theme-btn--active')) {
      child.classList.remove('theme-btn--active');
    }
  });
  that.classList.add('theme-btn--active');

  let previewImgSrc = null;
  switch (themeName) {
    case 'silver-theme':
      previewImage.src = 'assets/preview-silver.png';
      themeStatus.textContent = 'انتخاب شده: Silver';
      previewImgSrc = 'assets/preview-silver.png';
      break;
    case 'dark-theme':
      previewImage.src = 'assets/preview-dark.png';
      themeStatus.textContent = 'انتخاب شده: Dark';
      previewImgSrc = 'assets/preview-dark.png';
      break;
    case 'butter-theme':
      previewImage.src = 'assets/preview-butter.png';
      themeStatus.textContent = 'انتخاب شده: Butter';
      previewImgSrc = 'assets/preview-butter.png';
      break;
    default:
      previewImage.src = 'assets/preview-light.png';
      themeStatus.textContent = 'انتخاب شده: Light';
      previewImgSrc = 'assets/preview-light.png';
  }

  const featImgs = document.getElementsByClassName('feat-img');
  for (let featImg of featImgs) {
    featImg.src = previewImgSrc;
  }
}
