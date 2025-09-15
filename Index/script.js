function toggleText() {
    const textDiv = document.getElementById('text');

    textDiv.classList.toggle('animando');
    void textDiv.offsetWidth;
    textDiv.classList.toggle("invisivel");
    textDiv.classList.toggle("visivel");

}
