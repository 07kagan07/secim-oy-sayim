import React, { useEffect, useState } from 'react'

const AdayCard = ({name,img}) => {
    const [vote, setVote] = useState(0)


    useEffect(() => {
        const localVote = localStorage.getItem(name)
        setVote(Number(localVote))
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])



    vote && localStorage.setItem(name,vote)

    function addVote(){
        setVote(vote+1)
        document.querySelector(`.${name}`).disabled=true;
        setTimeout(() => {
            document.querySelector(`.${name}`).disabled=false;
        }, 500);

    }


    function removeVote(){
        let sure = window.confirm('Emin misiniz?')
        if(sure===true){
            setVote(vote-1)
        }
    }

    
  return (
   <div className='  cardWrap col-6'>
        <div className="card">
    <h2 className='text-center'>{name}: {vote}</h2>
        <img  src={img} className="card-img-top" alt="cb aday" style={{height:"300px",objectFit:"contain"}}/>
        <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <div className='text-center'>
                <button  className={`${name} btn btn-primary w-100 my-5`} onClick={addVote}>Oy Ekle</button>
                <button  className="btn btn-danger opacity-75 " onClick={removeVote}>Oy Düşür</button>
            </div>
        </div>
        </div>
   </div>
  )
}

export default AdayCard