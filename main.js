jQuery(function($){
  const form = $('.wendler-form');
  form.submit(function(event){
    event.preventDefault();
    const onerm = parseInt($('#onerepmax').val(), 10);
    const program = window.calculateWendler(onerm);
    for(let i=0; i < program.length; i++){
      buildWeek(i+1, program[i].sets);
    }
  });
}(jQuery))


function buildWeek(number, sets){
  const table = $("#week" + number).find("table")
  const tbody = table.find("tbody");
  const set = tbody.find("tr td:nth-of-type(2)")
  set.each((e, i) => i.innerHTML = sets[e]);
}
