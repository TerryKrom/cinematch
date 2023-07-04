let genres = document.querySelectorAll('.genre');
let selectedGenres = [];
let matchQuery = [];

genres.forEach(element => {
  element.addEventListener("click", function() {
    element.classList.toggle('selected');
    const genre = element.textContent.trim();

    if (selectedGenres.includes(genre)) {
      const index = selectedGenres.indexOf(genre);
      if (index > -1) {
        selectedGenres.splice(index, 1);
      }
    } else {
      selectedGenres.push(genre);
    }

    console.log(selectedGenres);
  });
});
let age = document.querySelectorAll('.age');
let selectedAge = '';

age.forEach(element => {
    element.addEventListener("click", function() {
        // Remove a classe 'selected' de todos os elementos de idade
        age.forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
        selectedAge = element.textContent.trim();
        console.log(selectedAge);
    });
});
