let a=100;
v=0
function setup() {
  // put setup code here
  createCanvas(400,200);

}

function draw() {
  // put drawing code here
  background(255,20,146);


  strokeWeight(1)
  line (200,0,200,250)
  strokeWeight(5)
  
  //gambar sebelum
  //warna putih
  ellipse(100,100,100,100)

  //gambar telinga
  ellipse (50,50,50,50)
  ellipse (150,50,50,50)

  //gambar mata 
  ellipse(87,85,15,35)
  ellipse(87,90,4,15)
  ellipse(113,85,15,35)
  ellipse(113,90,4,15)

  //gambar hidung
  ellipse (100,100,10,8)
  line(100,100,100,100)

  //gambar mulut
  ellipse(100,120,20,10)
  
  //gambar gerak
  ellipse(300,100,100,100)

  //gambar telinga
  ellipse (250,50,50,50)
  ellipse (350,50,50,50)

  //gambar mata
  var a1 = 90 + 5*Math.sin(radians(360)/30*v);
  v += 1
  ellipse(285,85,15,35)
  ellipse(285,a1,4,15)
  ellipse(310,85,15,35)
  ellipse(310,a1,4,15)

  //gambar hidung
  ellipse (298,100,10,8)
  line (298,100,298,100)

  //gambar mulut
  var a = 300 + 5*Math.sin(radians(360)/30*v);
  v += 1
  ellipse(a,120,20,10)
}