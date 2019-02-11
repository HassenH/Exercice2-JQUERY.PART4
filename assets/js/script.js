$(function(){
  $('#Moyenne').click(function(){
     //On stocke la regex pour faire une note 10 ou 10;75 ...
    // ParseFloat Nombre a virgule parseINT Nombre entier
    var noteRegex = /^([0-9]{1,2})([\.,]{1}[0-9]{1,2}){0,1}$/;
    // On stocke dans des variables la valeur récupérée des input. Grâce à number, on met les strings en nombres.
    var noteOne = $('#firstNote').val();
    var noteTwo = $('#secondNote').val();
    var noteThree = $('#thirdNote').val();
    var noteFour = $('#fourthNote').val();
    var noteFive = $('#fifthNote').val();
    console.log(noteOne);

    if(noteOne.match(noteRegex) && noteTwo.match(noteRegex) && noteThree.match(noteRegex) && noteFour.match(noteRegex) && noteFive.match(noteRegex)){
      //On fait la moyenne par rapport aux 5 notes.
      var average = (parseFloat(noteOne) + parseFloat(noteTwo) + parseFloat(noteThree) + parseFloat(noteFour) + parseFloat(noteFive)) / 5;
      if(average >=0 && average <10) {
        alert('Moyenne : ' + average + '\nAppréciations : \nEn dessous de la moyenne.');
      }else if(average >=10 && average <13) {
        alert('Moyenne : ' + average + '\nAppréciations : \nMoyen.');
      }else if(average >=13 && average <16) {
        alert('Moyenne : ' + average + '\nAppréciations : \nBien.');
      }else if(average >=16 && average <20) {
        alert('Moyenne : ' + average + '\nAppréciations : \nTrès bien.');
      }else if(average === 20) {
        alert('Excellent !');
      }
    }else{
      alert('Veuillez entrer des notes valides svp.')
    }
  });
});
