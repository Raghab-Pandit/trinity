import React from 'react'
import { TbXboxXFilled } from 'react-icons/tb';

const Reviews = ({visibility, cut, Product}) => {

    const today= Date.now();

    const reviewDate=   (date) => {
        const review= date.split('T')[0];
        const miliseconds= Date.parse(review);
        const diffTime= Math.abs(today - miliseconds);
        const minutes= Math.ceil(diffTime / (1000 * 60));
        const hours= Math.ceil(minutes / 60);
        const days= Math.ceil(hours / 24);
        const weeks= Math.ceil(days / 7);
        const months= Math.ceil(weeks / 4);

        if(minutes <60){
            return `${minutes} minutes ago`
        }
        else if(hours <24){
            return `${hours} hours ago`
        }
        else if(days <7){
            return `${days} days ago`
        }
        else if(weeks <4){
            return `${weeks} weeks ago`
        }
        else if(months <12){
            return `${months} months ago`
        }
        else{
            return `${Math.ceil(months / 12)} years ago`
        }
    }
  return (
    <>
        <div className={`bg-[#111827]/20 w-[95%] sm:w-[100%] h-full flex flex-col items-center justify-center sm:justify-start sm:items-end absolute ${visibility ? "visible" : "invisible"} transition-300 transition-all z-50`}>
            <div className="h-110 w-96 bg-[#222f4d] rounded-[15px] shadow-lg">
                <div className='flex items-center justify-between h-[10%] bg-white/80 px-2 rounded-t-[14px]'>
                    <h1 className='text-background font-bold'>Reviews</h1>
                    <div className='cursor-pointer bg-red-400 h-5 w-5 rounded-[50%]' onClick={()=> cut(false)}></div>
                </div>
        <div className='max-h-[90%] overflow-y-auto w-full p-6'>
            {Product?.reviews.length === 0 ? 
            <p className='text-white'>No reviews yet.</p> :
            Product?.reviews.map((review, index)=>(
                <div key={index} className='mb-2 w-full bg-white/75 p-4 rounded-lg hover:bg-white transition-300 transition-all cursor-default'>
                    <div className='flex items-center space-x-1'>
                        <p className='text-[#040F16] font-semibold text-[16px]'>{review.reviewerName}</p>
                        &nbsp;
                        <p className='text-[#040F16]/55 font-light text-[13px] cursor-default'>{reviewDate(review.date)}</p>
                    </div>
                    <p className='text-[#040F16]/55 font-light text-[13px] cursor-default hover:text-[#040F16] transition-300 transition-all'>{review.reviewerEmail.split('@')[0] + '@trinity.com'}:</p>
                    <p className='text-[#040F16] italic'>"{review.comment}"</p>
                </div>
            ))}
        </div>
            </div>
        </div>
    </>
  )
}

export default Reviews