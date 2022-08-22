import Cookies from 'universal-cookie'

const getCookieArray = (name: string): string[] => {
   let cartCookie: string = new Cookies().get(name)

   if(!cartCookie) return []

   const arr: string[] = cartCookie
                        .slice(cartCookie.indexOf('['), cartCookie.indexOf(']') + 1)
                        .split('')
                        .filter(x => /[A-Za-z0-9,]/.test(x))
                        .join('')
                        .split(',')

   return arr[0] ? arr : []
}

export default getCookieArray