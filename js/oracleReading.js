function card(image){
  this.image=image;
}

var deck=[
  new card('FSOC-01'),
  new card('FSOC-02'),
  new card('FSOC-03'),
  new card('FSOC-04'),
  new card('FSOC-05'),
  new card('FSOC-06'),
  new card('FSOC-07'),
  new card('FSOC-08'),
  new card('FSOC-09'),
  new card('FSOC-10'),
  new card('FSOC-11'),
  new card('FSOC-12'),
  new card('FSOC-13'),
  new card('FSOC-14'),
  new card('FSOC-15'),
  new card('FSOC-16'),
  new card('FSOC-17'),
  new card('FSOC-18'),
  new card('FSOC-19'),
  new card('FSOC-20'),
  new card('FSOC-21'),
  new card('FSOC-22'),
  new card('FSOC-23'),
  new card('FSOC-24'),
  new card('FSOC-25'),
  new card('FSOC-26'),
  new card('FSOC-27'),
  new card('FSOC-28'),
  new card('FSOC-29'),
  new card('FSOC-30'),
  new card('FSOC-31'),
  new card('FSOC-32'),
  new card('FSOC-33'),
  new card('FSOC-34'),
  new card('FSOC-35'),
  new card('FSOC-36'),
  new card('FSOC-37'),
  new card('FSOC-38'),
  new card('FSOC-39'),
  new card('FSOC-40'),
  new card('FSOC-41'),
  new card('FSOC-42'),
  new card('FSOC-43'),
  new card('FSOC-44')
];

function getRandom(num){
  var randomNumber=
  Math.floor(Math.random()*num);
  return randomNumber;
}

document.getElementById("draw").onclick
= function(){
  var index=getRandom(44);
  var currentCard=deck[index];

  document.getElementById("display").
  innerHTML='<img src="images/' +
  currentCard.image + '.jpg">';
};