import React from 'react'
import Banner from '../component/Banner'
import List from '../component/List'

function Movies() {
    // banner image data start
  const image =[
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg",
    "https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg",
    "https://png.pngtree.com/background/20210709/original/pngtree-movie-film-background-banner-design-picture-image_612258.jpg"
  ]
  // banner image data start
    const listDataBollywood={
        listHeading :"Bollywood" ,
        list:[{
          img:"https://i.pinimg.com/originals/f6/35/fd/f635fda7eac6e9315006ecfba15db2b6.jpg",
          title:"Pathan",
          type:"Action"
        },
        {
          img:"https://media.gettyimages.com/id/458467163/photo/the-first-avenger-movie-poster.jpg?s=612x612&w=gi&k=20&c=Fc9E7HSJmEiviWNqmLsoXGgwOdpN8fv3qZ0fem6__rM=",
          title:"Pathan",
          type:"Action"
        },
        {
          img:"https://i.pinimg.com/736x/a3/55/83/a3558350a8f77d97d7ead34811cc1265.jpg",
          title:"Pathan",
          type:"Action"
        },
        {
          img:"https://c8.alamy.com/comp/BGMMYM/avatar-year-2009-director-james-cameron-movie-poster-usa-BGMMYM.jpg",
          title:"Pathan",
          type:"Action"
        },
        ],
    }
  return (
    <div class="movies">
       <List
        listData={listDataBollywood}
       />
       <Banner
       image ={image}
       />
    </div>
  )
}

export default Movies