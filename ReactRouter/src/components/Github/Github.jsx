import React, { useEffect, useState } from 'react'

function Github(){
    const [data,setData] = useState([]);
 useEffect(()=>{
   
    fetch('https://api.github.com/users/devesh-baghel').then(response=> response.json()).then( data =>{
        console.log(data);
        setData(data)
        
    })
 },[])

    return(

        <div className=' m-4 bg-gray-600 text-white p-4 text-3xl w-3xl text-center'>Github followers: {data.followers}
        <img className='w-xs' src ={data.avatar_url} alt='avatar'/>
        
        </div>
    )
}
export default Github