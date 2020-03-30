var firebaseConfig = {
    apiKey: "AIzaSyDRr9U06MctY9xQLuE9NGK9W7qmUYVwU8A",
    authDomain: "prospection-f6714.firebaseapp.com",
    databaseURL: "https://prospection-f6714.firebaseio.com",
    projectId: "prospection-f6714",
    storageBucket: "prospection-f6714.appspot.com",
    messagingSenderId: "286139179871",
    appId: "1:286139179871:web:802886236480de28a7ccea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var data = firebase.database().ref('prospection');
  
      $("#submit").click(function(){
        var name = $("#name").val();
        var adr = $("#adr").val();
        var phone = $("#phone").val();
  
    var newmessage=data.push()
    newmessage.set({
      name:name,
      adr:adr,
      phone:phone
    })
  })
  $("#valider").click(function(){
  var Concurrence = $("#Concurrence").val();
  var contrat = $("#contrat").val();
  var loyer = $("#loyer").val();
  var surface = $("#surface").val();
  var newmessage=data.push()
    newmessage.set({
      Concurrence:Concurrence,
      contrat:contrat,
      loyer:loyer,
      surface:surface

    })
})