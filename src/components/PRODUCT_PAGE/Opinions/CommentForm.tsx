import React from 'react'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import { PostCommentFetch } from '../../../interfaces/ProductPageInterfaces'
import { Inputs } from '../../../interfaces/ReusableInterfaces'
import Button from '../../Common/Button'
import CommentStars from './CommentStars'

const CommentForm = ({ userId, prodId }: { userId: string, prodId: string }) => {
   const [stars, setStars] = React.useState<number>(0)

   const createComment = (form: HTMLFormElement, user: string, date: string, text: string): void => {
      const commentsContainer = form.parentElement!.children[3]
      const totalCont = form.parentElement!.children[1]
      const txt = totalCont.textContent!
      totalCont.textContent = `Comments (${ parseInt(txt.slice(txt.indexOf('(') + 1, txt.indexOf(')'))) + 1 })`

      const article = document.createElement('article')
      const p = document.createElement('p')
      const h6_1 = document.createElement('h6')
      const h6_2 = document.createElement('h6')
      const div = document.createElement('div')

      article.className = 'comment'
      div.className = 'info'
      h6_1.className = 'date'

      p.textContent = text
      h6_1.textContent = date
      h6_2.textContent = user

      for(let i = 0; i < 5; i++) {
         const span = document.createElement('span')

         let fill: string = 'grey'
         if(i < stars) fill = 'gold'

         span.innerHTML = `<svg width="28" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.95263 3.78755C7.87026 3.61206 7.69387 3.5 7.50001 3.5C7.30615 3.5 7.12976 3.61206 7.04739 3.78755L6.07916 5.85035L3.92454 6.17933C3.73928 6.20761 3.58539 6.33713 3.52588 6.51485C3.46638 6.69257 3.51126 6.88864 3.64214 7.02278L5.2159 8.63573L4.84331 10.9195C4.81248 11.1085 4.89228 11.2985 5.04881 11.4087C5.20534 11.519 5.41111 11.5302 5.57868 11.4376L7.50001 10.3755L9.42134 11.4376C9.58892 11.5302 9.79468 11.519 9.95122 11.4087C10.1077 11.2985 10.1875 11.1085 10.1567 10.9195L9.78412 8.63573L11.3579 7.02278C11.4888 6.88864 11.5336 6.69257 11.4741 6.51485C11.4146 6.33713 11.2607 6.20761 11.0755 6.17933L8.92087 5.85035L7.95263 3.78755Z" fill='${ fill }'/> </svg>`

         div.appendChild(span)
      }
      
      div.appendChild(h6_1)
      div.appendChild(h6_2)

      article.appendChild(div)
      article.appendChild(p)

      commentsContainer.prepend(article)
   }

   const submitComment = async (e: React.FormEvent) => {
      e.preventDefault()
      
      const t = e.target as HTMLFormElement
      const [text] = Array.from(t.elements as Inputs).map(x => x.value)
      
      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerHeight',
         height: '25%',
         backgroundClr: 'rgba(250, 250, 250, .8)',
         borderRadius: '1em'
      })
      l.append(t)

      try {
         const data = await Fetches.mix<PostCommentFetch>(
            `${ process.env.REACT_APP_API_PRODUCT_POST_COMMENT }/${ prodId }/${ userId }`, 
            'PUT', 
            { 
               text,
               stars 
            }
         )
         createComment(t, data.json.user, data.json.date, text)

      }catch(err: any) {
         const ar: AppendResult = new AppendResult('h6', 'err-result')
         ar.setMessage = err.json.msg
         ar.appendTo(t, 2.5)
      
      }finally { l.remove() }
   }

   return (
      <form onSubmit={ submitComment }>

         <textarea spellCheck='false' placeholder='Write comment...'></textarea>

         <div className='wrap'>

            <Button text='Submit' />
            <CommentStars state={ setStars } />

         </div>

      </form>
   )
}

export default CommentForm