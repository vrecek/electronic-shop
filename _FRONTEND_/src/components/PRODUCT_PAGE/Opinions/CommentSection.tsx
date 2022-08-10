import React from 'react'
import Comment from './Comment'

const CommentSection = () => {
   return (
      <section className="comment-section">

         <Comment rate={ 4 } date='12.05.2022' text='Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet' username='vrecek' />
         <Comment rate={ 4 } date='12.05.2022' text='Lorem ipsum dolor sit amet' username='vrecek' />
         <Comment rate={ 4 } date='12.05.2022' text='Lorem ipsum dolor sit amet' username='vrecek' />
         <Comment rate={ 4 } date='12.05.2022' text='Lorem ipsum dolor sit amet' username='vrecek' />
         <Comment rate={ 4 } date='12.05.2022' text='Lorem ipsum dolor sit amet' username='vrecek' />

      </section>
   )
}

export default CommentSection