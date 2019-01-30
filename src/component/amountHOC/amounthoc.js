import React from 'react'
import './amounthoc.css'
const  amounthoc=()=>{
  return (
    <div className="second_level clearfix">
      <div className="col-md-12 pad0">
      <div className="col-md-4 pad0 net_balance">
			Net Bank Balance
            <br/>
            <span className="net_balance_amt">5,75,354.00</span>
		</div>
        <div className="col-md-8 text-right action_btn">
					<button type="button" className="primary-btn primary-red mar_rgt5">Link Bank Account</button>
					<button type="button" className="secondary-btn secondary-red mar_rgt5">Add Manual Account</button>
					<button type="button" className="secondary-btn secondary-red mar_rgt5">More &nbsp;<i className="dropdown_Arrow"></i></button>
				</div>
      </div>
    </div>  
  )
}

export default amounthoc;