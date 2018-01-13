window.onload=function()
{
  var Doctor=document.getElementById("doctor");
  var httpRequest;
  httpRequest = new XMLHttpRequest();
  var apiKey='a8bac0a29d74626fee4d1be056ec304f';
var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey;
  httpRequest.onreadystatechange=getRequest;
  httpRequest.open('GET',resource_url,true);
  httpRequest.send();
  function getRequest()
  {
    if(this.readyState==4&&this.status==200)
    {
        console.log("in ")

    var word;
    for(x in result)
  {  word+= result[x];}
  Doctor.innerHTML=word;

  }

  }

}
