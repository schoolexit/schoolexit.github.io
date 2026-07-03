  function searchContent() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      const paragraphs = document.querySelectorAll('#content h3');
      
      paragraphs.forEach(paragraph => {
          paragraph.innerHTML = paragraph.textContent;
      });

      paragraphs.forEach(paragraph => {
          const text = paragraph.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
              const regex = new RegExp(`(${searchTerm})`, 'gi');
              paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<span class="highlight">$1</span>');
          }
      });
  }

  function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");   

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";   

  }

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
