import React, { Component } from 'react'
import {connect} from 'react-redux';
import Hoc from '../../HOC/hoc';
import InnerHeader from '../InnerHeader/InnerHeader';
import AmountSec from '../amountHOC/amounthoc';
import DonutChart from '../Chart/donutchart/donutchart';
import LineChart from '../Chart/linechart/linechart';
import Accordian from './accordian/accordian';

import './bank.css';

 class Bank extends Component {

state={
  bankType:"",
  bankDetail:{},
}
  onclicktypeAc=(e)=>{
    let gettypeAc = e.target.getAttribute("data-type");
    //console.log(gettypeAc);
    this.setState({bankType:gettypeAc})
  }

  bankDetail=(data)=>{
    let acbal=['ac','balance'];

    data.map((curr)=>{
      let sp = curr.AccountDetails;
      let spar= sp.split("-");
      console.log(spar);
      return(
        console.log(spar[1]+"=="+curr.CurrentBalance)
      )
    })
   console.log(data);
  }



  render() {
    
      let bankdata ='LOading...';
        if(( this.props.posts.Response.BankDetails)!==0)
        {
           bankdata= this.props.posts.Response.BankDetails;
           this.bankDetail(this.props.posts.Response.BankDetails.AllBankAccountData);

        

        }
      let tansationAccordian='null';
      if(( this.props.posts.Response.TransactionDetails).length!==0)
        {
          tansationAccordian=  <Accordian banktype={this.state.bankType}  transationDetail={this.props.posts.Response.TransactionDetails}/>
          }

    
    return (
      <Hoc>
      <InnerHeader/>
      <AmountSec/>
       <div className="charts_main_wrapper clearfix">
         <div className="col-md-12 pad0">
           <div className="col-md-6 padrt15">
             <div className="white_bg">
               <div className="chart_head">
                <div className="col-md-5">Account Balances</div>
                <div className="col-md-7 text-right pad0">Arrange by:
								<select className="arrange_by_dropdown">
									<option value="BankAccount">Bank Account</option>
									<option value="ICICI">ICICI Bank</option>
								</select>
							</div>
                <div className="clearfix"></div>
                
               </div>
               <div className="charts">
                <DonutChart donatchart={bankdata.AllBankAccountData}/>
               </div>
             </div>
           </div>
           {/* end div left side */}
           <div className="col-md-6 padrt15">
             <div className="white_bg">
               <div className="chart_head">
                <div className="col-md-5">Account Balance History</div>
                <div className="col-md-7 text-right pad0">
                <span>1M</span> &nbsp;  <span className="active">3M</span> &nbsp; <span>6M</span> &nbsp; <span>1Y</span>
							</div> 
                <div className="clearfix"></div>
                
               </div>
               <div className="charts">
                <LineChart/>
               </div>
             </div>
           </div>
          {/* Right side div end */}
         </div>
       </div> 
        <div style={{clear:'both'}}></div>
        <div className="transaction_table">
          <div className="col-md-12 padd0">
            <div className="chart_head pad0 brdr0">
              <div className="col-md-5 pad0">Bank Accounts ({parseInt(bankdata.AllBankAccountData.length)})</div>
              <div className="col-md-7 text-right pad0">
              <span  onClick={this.onclicktypeAc} className={`${(this.state.bankType===''|| this.state.bankType==='All')?'active':null}`} data-type="All">All</span>
               &nbsp; <span  onClick={this.onclicktypeAc} className={`${this.state.bankType==='savings'?'active':null}`} data-type="savings">Savings</span>
               &nbsp; 
                <span onClick={this.onclicktypeAc} className={`${this.state.bankType==='current'?'active':null}`} data-type="current"> Current</span>
              </div>
              <div className="clearfix"></div>
          </div>
         
          {tansationAccordian}
          </div>
        </div>

        
      </Hoc>
    )
  }
}
 
const mapStateToProps=state=>({
    posts:state.posts.alldata
 });



export default connect(mapStateToProps)(Bank);
