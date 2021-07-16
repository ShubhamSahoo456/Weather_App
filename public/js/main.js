const search_btn =document.getElementById('search_btn');
const cityName =document.getElementById('cityName');
const output =document.getElementById('output');
const temp =document.getElementById('temp');
const data_show=document.getElementById('data_show');
const temp_status =document.getElementById('temp_status');
const dayshow= document.getElementById('day');
const dateshow =document.getElementById('date');


const day =()=>{
    let day_array=Array("Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday");
    let month_array=Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec");
    let date=new Date();
    let day_name=day_array[date.getDay()-1];
    let month_name=month_array[date.getMonth()];
    let date_no=date.getDate();
    dayshow.innerHTML=`${day_name}`;
    dateshow.innerHTML=`${month_name},${date_no}`;    
}


const changeclouds =(status)=>{
    console.log(status);
    if(status=="overcast clouds"){
        console.log(temp_status);
        temp_status.innerHTML=`<i class="fas fa-cloud-moon"></i>`;
    }else if(status=="rain"){
        temp_status.innerHTML=`<i class="fas fa-cloud-showers-heavy"></i>`;
    }else if(status=="thunderstorm"){
        temp_status.innerHTML=`<i class="fas fa-cloud-showers-heavy"></i>`;
    }else{
        temp_status.innerHTML=`<i class="fas fa-cloud"></i>`;
    }
}

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal =cityName.value;
    
    if(cityVal===""){
        output.innerText="plss enter city name";

    }else{
        try{
        let api= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=5e86b60d1aa7f4a4d01d02febf5461b0`;
        let data =await fetch(api);
        let jsondata =await data.json();
        let celciusdata=jsondata.main.temp;
        let celcius =celciusdata-273.15;
        let num=celcius.toFixed(2);
        data_show.classList.remove('data_hide');
        output.innerText=`${jsondata.name},${jsondata.sys.country}`
        temp.innerHTML=`${num}<sup>o</sup>C`;
        changeclouds(jsondata.weather[0].description);
        }catch(e){
            console.log(e);
            output.innerText=`plss enter city name properly`;
        }
    }
    
}


search_btn.addEventListener('click',getInfo);