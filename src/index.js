// Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'
import Order from './components/order'

const iceCreamScoops = ['vanilla', 'mint'];

ReactDom.render(
  <Order
    cone: true
    scoops: {iceCreamScoops}
    orderInfo: {{
      customerName: "Sophia"
      orderedAt: 24
    }}
  />,
  document.getElementById('root')
);
