// const async = require("hbs/lib/async");

const submitBtn=document.getElementById('submitBtn');
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_val=document.getElementById('temp_val');
const datahide=document.querySelector('.middle_layer');



const getInfo = async(event)=>{
    event.preventDefault(); 
    let cityVal=cityname.value;
    if(cityVal === ""){
        city_name.innerText =`plese write the city name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=908141c9817effdb47e0a0b3ceb011f0`
            const response=await fetch(url);
            const data=await response.json();
            //  console.log(data); 
            const arrdata=[data];
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country} `;
            temp_val.innerText=arrdata[0].main.temp;  
            
            const tempMood=arrdata[0].weather[0].main;
            if(tempMood == "clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
            }
        datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText =`plese write the city name properly`;
            datahide.classList.add('data_hide');

        }

    }
}

submitBtn.addEventListener('click',getInfo);