import React ,{useState} from 'react'
import allpostimg1 from'../image/allpostimg1.jpeg'
import allpostimg2 from '../image/allpostimg2.jpeg';
import allpostimg3 from '../image/allpostimg3.jpeg'
import handwithpen from '../image/handwithpen.png'
import person1 from '../image/person1.jpeg'
export default function Allpost() {
    const [activeLink, setActiveLink] = useState('allpost'); 
    const handleLinkClick = (link) => {
      setActiveLink(link); 
    };
  return (
    <div className='container'>
    <div className='row justify-content-around'>
        <ul class="list-group list-group-horizontal col-md-7 col-lg-7 col-12">
            <li class={`list-group-item border-0 ${activeLink=="allpost"?"border-bottom font-weight-bold":""}`}  onClick={() => handleLinkClick('allpost')}>All Posts(34)</li>
            <li class={`list-group-item border-0 ${activeLink=="article"?"border-bottom font-weight-bold":""}`}  onClick={() => handleLinkClick('article')}>Article</li>
            <li class={`list-group-item border-0 ${activeLink=="event"?"border-bottom font-weight-bold":""}`}  onClick={() => handleLinkClick('event')}>Event</li>
            <li class={`list-group-item border-0 ${activeLink=="education"?"border-bottom font-weight-bold":""}`}  onClick={() => handleLinkClick('education')}>Education</li>
            <li class={`list-group-item border-0 ${activeLink=="job"?"border-bottom font-weight-bold":""}`}  onClick={() => handleLinkClick('job')}>Job</li>
        </ul>

        <div className='d-flex cl-md-5 col-lg-5 col-12'>
            <div class="dropdown ">
            <button class="bg-secondary  border-0 mt-1 pb-1 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Write a Post
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">1</a>
                <a class="dropdown-item" href="#">2</a>
                <a class="dropdown-item" href="#">3</a>
            </div>
            </div>
            <button className='border-0 px-1 py-0 bg-primary mx-2 mt-1 text-white' style={{height:"28px"}}><i class="fa-solid   fa-people-group"></i>Join Group</button>
        </div>
     </div>
     <div className='row py-3'>
       
        <div className='col-md-8 col-lg-8 col-12'>
          {activeLink=="allpost" &&(
            <>
            <div class="card border-0 rounded-0 col-md-10 col-lg-10 col-12 mb-2" >
                <img class="card-img-top" style={{height:"150px"}} src={allpostimg1} alt="Card image cap"/>
                <div class="card-body">
                <div class="d-flex justify-content-between card-title"><div className='d-flex'><img src={handwithpen} style={{width:"20px"}} alt='handwithpen'/><p className='mt-2'>Article</p></div><p>...</p></div>
                <h4 class="font-weight-bold">What if famous brands had regular fonts ? meet regularaBrands!</h4>
                <p class="card-text"><small class="text-muted">I've  worked in UX for the better part of the decade. From now on ,I plan to relive.</small></p>
                <p className='card-text d-flex justify-content-between'>
                    <div className='d-flex'><img className='rounded-pill pr-1' src={person1} style={{width:"30px",height:"30px"}} alt="person1 img"/><p className='pt-1 mx-2'>sarthak kamra</p></div>
                    <div className='d-flex'><p><i class="fs-5 fa-regular fa-eye pt-1" style={{width:"20px"}}></i> 1.4k views</p> <span className='mx-2 bd-secondary pt-1'><i class="fa-solid fa-share-nodes"></i></span></div>
                </p>
               </div>   
            </div>
            <div class="card border-0 rounded-0 col-md-10 col-lg-10 col-12 mb-2" >
                <img class="card-img-top" style={{height:"150px"}} src={allpostimg1} alt="Card image cap"/>
                <div class="card-body">
                <div class="d-flex justify-content-between card-title"><div className='d-flex'><img src={handwithpen} style={{width:"20px"}} alt='handwithpen'/><p className='mt-2'>Article</p></div><p>...</p></div>
                <h4 class="font-weight-bold">What if famous brands had regular fonts ? meet regularaBrands!</h4>
                <p class="card-text"><small class="text-muted">I've  worked in UX for the better part of the decade. From now on ,I plan to relive.</small></p>
                <p className='card-text d-flex justify-content-between'>
                    <div className='d-flex'><img className='rounded-pill pr-1' src={person1} style={{width:"30px",height:"30px"}} alt="person1 img"/><p className='pt-1 mx-2'>sarthak kamra</p></div>
                    <div className='d-flex'><p><i class="fs-5 fa-regular fa-eye pt-1" style={{width:"20px"}}></i> 1.4k views</p> <span className='mx-2 bd-secondary pt-1'><i class="fa-solid fa-share-nodes"></i></span></div>
                </p>
               </div>   
            </div>
            <div class="card border-0 rounded-0 col-md-10 col-lg-10 col-12 mb-2" >
                <img class="card-img-top" style={{height:"150px"}} src={allpostimg2} alt="Card image cap"/>
                <div class="card-body">
                <div class="d-flex justify-content-between card-title"><div className='d-flex'><img src={handwithpen} style={{width:"20px"}} alt='handwithpen'/><p className='mt-2'>Article</p></div><p>...</p></div>
                <h4 class="font-weight-bold">What if famous brands had regular fonts ? meet regularaBrands!</h4>
                <p class="card-text"><small class="text-muted">I've  worked in UX for the better part of the decade. From now on ,I plan to relive.</small></p>
                <p className='card-text d-flex justify-content-between'>
                    <div className='d-flex'><img className='rounded-pill pr-1' src={person1} style={{width:"30px",height:"30px"}} alt="person1 img"/><p className='pt-1 mx-2'>sarthak kamra</p></div>
                    <div className='d-flex'><p><i class="fs-5 fa-regular fa-eye pt-1" style={{width:"20px"}}></i> 1.4k views</p> <span className='mx-2 bd-secondary pt-1'><i class="fa-solid fa-share-nodes"></i></span></div>
                </p>
               </div>   
            </div>
            <div class="card border-0 rounded-0 col-md-10 col-lg-10 col-12 mb-2" >
                <img class="card-img-top" style={{height:"150px"}} src={allpostimg3} alt="Card image cap"/>
                <div class="card-body">
                <div class="d-flex justify-content-between card-title"><div className='d-flex'><img src={handwithpen} style={{width:"20px"}} alt='handwithpen'/><p className='mt-2'>Article</p></div><p>...</p></div>
                <h4 class="font-weight-bold">What if famous brands had regular fonts ? meet regularaBrands!</h4>
                <p class="card-text"><small class="text-muted">I've  worked in UX for the better part of the decade. From now on ,I plan to relive.</small></p>
                <p className='card-text d-flex justify-content-between'>
                    <div className='d-flex'><img className='rounded-pill pr-1' src={person1} style={{width:"30px",height:"30px"}} alt="person1 img"/><p className='pt-1 mx-2'>sarthak kamra</p></div>
                    <div className='d-flex'><p><i class="fs-5 fa-regular fa-eye pt-1" style={{width:"20px"}}></i> 1.4k views</p> <span className='mx-2 bd-secondary pt-1'><i class="fa-solid fa-share-nodes"></i></span></div>
                </p>
               </div>   
            </div>
            </>
          )}
           {activeLink=="article" &&(<h4>This is article content</h4>)}
        {activeLink=="event" &&(<h4>This is Event content</h4>)}
        {activeLink=="education" &&(<h4>This is Education content</h4>)}
        {activeLink=="job" &&(<h4>This is Job content</h4>)}
        </div>
        
       
        <div className='col-md-4 col-lg-4 col-12'>
{/* right side code needs to add */}
        <div class="input-group">
            <div class="input-group-append">
            <button class="btn bg-transparent border-bottom rounded-0" type="button">
            <i class="fa fa-search text-dark"></i>
            </button>
            </div>
            <input type="text" class="form-control border-0 border-bottom" placeholder="Enter the Location"/>
            <div class="input-group-append">
            <button class="btn bg-transparent border-bottom rounded-0" type="button">
            <i class="fa-solid fa-pen"></i>
            </button>
            </div>
        </div>
        <div>
            <p className='font-weight-light'><i class="fa-solid fa-circle-exclamation"></i> Your location will help us serve better and extend a personalised experience</p>
        </div>
        </div>

     </div>
     
    </div>
  )
}
