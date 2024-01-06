(function{
    use FileSystemDirectoryHandle;
}
function select(element) {
    return document.querySelector(element);
  }
  
  function onscroll(element, callback) {
    element.addEventListener('scroll', callback);
  }
  
let skillsContent = select('.skills-content');
  if (skillsContent) {
    onscroll(document, function() {
      let progressBars = select('.progress .progress-bar', true);
      let windowHeight = window.innerHeight;
      let skillsContentTop = skillsContent.getBoundingClientRect().top;

      if (skillsContentTop < windowHeight) {
        progressBars.forEach((progressBar) => {
          let width = progressBar.getAttribute('data-progress');
          progressBar.style.width = width + '%';
        });
      }
    });
  }