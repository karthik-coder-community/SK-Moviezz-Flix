import { CheckIcon } from '@heroicons/react/outline'
// import Logo from '../public/assets/Netflix_logo.svg'
import Logo from '../styles/Netflix_logo.svg'

import Image from 'next/image'
// import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Table from '../../components/Table'
import Script from 'next/script'
// import { loadCheckout } from '../lib/stripe'
// import Table from './Table'
// import Loader from './Loader'

// interface Props {
//   products: Product[]
// }P

function Plans() {
  const { logout,  } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState("0");

//   const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)

//   console.log(products)


  const basicPlan = () => {
    setSelectedPlan(199);
  };

  const premiumPlan = () => {
    setSelectedPlan(699);
  };

  const standardPlan = () => {
    setSelectedPlan(399);
  };


  const subscription = () => {
    if (selectedPlan === 0) {
      alert("please enter amount");
    } else {
      const options = {
        key: "rzp_test_O2tbqPLkoI2hv9",
        key_secret: "VI7DW7akkOlkYj6lDL7MeiEd",
        amount: selectedPlan * 100,
        currency: "INR",
        name: "Karthik Razor Pay (For small business)",
        description: "for testing",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "karthik",
          email: "karthik.soubramaniane@twilightsoftwares.com",
          contact: "7904080449",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "green",
        },
      };
  
      const pay = new Razorpay(options);
      pay.open();
    }
  };
  



  return (
    <div>
      <Head>
        <title>SK-Moviezz.. Flix</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>   
        
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
           </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/Plans">
          <Image
            src={Logo}
            alt="SK-Moviezz.. Flix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline hover:text-orange-600"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="mt-10 mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#d56a34]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#d56a34]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#d56a34]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-right md:w-3/5">
          <div className={`planBox ${selectedPlan === 199 ? 'opacity-100' : ''}`} onClick={basicPlan}>
        Basic
      </div>
      <div className={`planBox ${selectedPlan === 699 ? 'opacity-100' : ''}`} onClick={premiumPlan}>
        Premium
      </div>
      <div className={`planBox ${selectedPlan === 399 ? 'opacity-100' : ''}`} onClick={standardPlan}>
        Standard
      </div>
           
           
          </div>

          <Table/>
          <button className="mx-auto w-8/10 rounded bg-[#d56a34] py-4 text-xl shadow hover:bg=[#f6121d] md:w-[420px]" onClick={subscription}>
            Selected plan&nbsp; 
          {selectedPlan && <p> ₹ {selectedPlan}</p>}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Plans