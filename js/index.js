$('document').ready(function() {
	var options = { videoId: 'KwtZ9so_wZI', start: 12 };
	$('#wrapper').tubular(options);

    $("#inputtel").mask("+375 (99) 999-99-99");
    
   
/*inputtel.onblur = function() {
  if (isNaN(this.value)) { // введено не число
    // показать ошибку
    this.className = "errortel";
    errortel.innerHTML = 'Введите числовое значение!'
  }
    
};

inputtel.onfocus = function() {
  if (this.className == 'errortel') { // сбросить состояние "ошибка", если оно есть
    this.className = "";
    errortel.innerHTML = "";
  }
};*/

    
/*inputname.onblur = function() {
  if (isNaN(this.value)) { // введено не число
    // показать ошибку
    this.className = "errorname";
    errorname.innerHTML = 'Введите ваше имя!'
  }
};

inputname.onfocus = function() {
  if (this.className == 'errorname') { // сбросить состояние "ошибка", если оно есть
    this.className = "";
    errorname.innerHTML = "";
  }
};*/
    


});