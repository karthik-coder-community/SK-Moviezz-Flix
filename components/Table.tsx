import { CheckIcon } from '@heroicons/react/outline'
// import { Product } from '@stripe/firestore-stripe-payments'

// interface Props {
//   products: Product[]
//   selectedPlan: Product | null
// }

function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              ₹ 199 
            </td>
            <td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              ₹ 699
            </td>
            <td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              ₹ 399
            </td>
                      <td className="tableDataTitle">Monthly price</td>

        </tr>
        <tr className="tableRow">
          
            <td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              360 px
            </td>
            <td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              720 px
            </td><td
              className='tableDataFeature text-[#E50914] text-[gray]'>
              1080 px
            </td>
                      <td className="tableDataTitle">Video quality</td>

          
        </tr>
        <tr className="tableRow">
          {/* <td className="tableDataTitle">Resolution</td> */}
          <td
              className='tableDataFeature text-[#E50914] text-[gray]' >
              360 X 240
            </td><td
              className='tableDataFeature text-[#E50914] text-[gray]' >
             720 X 1040
            </td>
            <td
              className='tableDataFeature text-[#E50914] text-[gray]' >
              1080 X 2040
            </td>
                      <td className="tableDataTitle">Resolution</td>

        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
         
            <td
              className='tableDataFeature text-[gray]'>
             
                <CheckIcon className="inline-block h-8 w-8" />
             
            </td>
        
        </tr>
        
      </tbody>
      
    </table>
  )
}

export default Table