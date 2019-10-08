function deshabilitar(clase, name){
  var radios = document.getElementsByClassName(`${clase}`);
  for (var i=0;i<radios.length;i++){
    radios[i].disabled = true;
  }
  var radiosname = document.getElementsByName(`${name}`);
  for (var i=0;i<radiosname.length;i++){
    radiosname[i].disabled = true;
  }
}
