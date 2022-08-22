import React from 'react'
import { CommentType } from '../../../interfaces/ProductInterface'
import Comment from './Comment'

const CommentSection = ({ comments }: { comments: CommentType[] }) => {
   return (
      <section className="comment-section">

         {
            comments.map(x => (
               <Comment 
                  key={ x.author.id }
                  author={ x.author }
                  rate={ x.rate }
                  text={ x.text }
                  postedDate={ x.postedDate }
               />
            ))
         }

      </section>
   )
}

export default CommentSection