function showMore() {
    var moreSection = document.getElementById("moreSection");
    moreSection.style.display = "block";
    window.scrollTo({ top: moreSection.offsetTop, behavior: 'smooth' });
  }
  