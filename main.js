let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor:"<span style='color: #FF8FB1;'>|</span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FF8FB1;"> Desarrollo sitios web e imparto cursos de róboticaf. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
