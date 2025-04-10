const form=document.querySelector('form')

form.addEventListener('submit',function(e)
{
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  const bmiresult=document.querySelector('#bmiresult')
    
  if(height==='' || height<0 || isNaN(height) )
  {
    results.innerHTML=`please enter valid height${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight))
{
  results.innerHTML=`please enter valid weight
  ${weight}`;
  
}
else{
  const bmi=(weight /((height*height) /10000)).toFixed(2);





  //show result
  results.innerHTML=`<span>${bmi}</span>`


  if(bmi<18.6)
  {
    bmiresult.innerHTML=`Under Weight: ${bmi}`;
  }
  else if(bmi<24.9 || bmi>18.6)
  {
    bmiresult.innerHTML=`Normal Range: ${bmi}`;
  }
  else{
    bmiresult.innerHTML=`Overweight: ${bmi}`;
  }


}

})