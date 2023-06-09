import user from './assets/image/user.svg'
import report from './assets/image/report.svg'
import delivery from './assets/image/delivery.svg'

import customer1 from './assets/image/customer/1.svg'
import customer2 from './assets/image/customer/2.svg'
import customer3 from './assets/image/customer/3.svg'

export const plan = [
    { title: 'Basic Plan', validility: '1-Month', price: '15,000', description: 'Ideal for individuals who require a simple refill service. Subscribers can request up to 4 medications, twice a month.' },
    { title: 'Premium Plan', validility: '1-Month', price: '40,000', description: 'Ideal for individuals who require a more advanced refill service. Subscribers can request up to 6 medications, twice a month.' },
    { title: 'Executive Plan', validility: '1-Month', price: '100,000', description: 'Ideal for individuals who require the most advanced refill service. Subscribers can request up to 8 medications, twice a month.' },
]

export const started = [
    { image: user, title: 'Sign Up and activate your account' },
    { image: report, title: 'Update your profile and health records' },
    { image: delivery, title: 'Make a one-time purchase or subscribe to a monthly plan and get all you medications delivered on time to your doorstep' },
]

export const customer = [
    { rating: 3, image: customer1, name: 'Timileyin', quote: "I am really happy with the service I received. The process was easy and straightforward, and my medication arrived on time." },
    { rating: 5, image: customer2, name: 'Alisha', quote: "The quality of the drugs is great and they are helping me manage my health condition effectively. Thank you so much for your excellent service." },
    { rating: 1, image: customer3, name: 'James', quote: "The quality of the drugs is great and they are helping me manage my health condition effectively. Thank you so much for your excellent service." },
    { rating: 3, image: customer1, name: 'Timileyin', quote: "I am really happy with the service I received. The process was easy and straightforward, and my medication arrived on time." },
    { rating: 5, image: customer2, name: 'Alisha', quote: "The quality of the drugs is great and they are helping me manage my health condition effectively. Thank you so much for your excellent service." },
    { rating: 1, image: customer3, name: 'James', quote: "The quality of the drugs is great and they are helping me manage my health condition effectively. Thank you so much for your excellent service." },
]
