import React, { Component } from 'react'
import Investdata from './Investdata/investdata';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from '../Loader/loader';
import {fetchData} from '../../Store/Action/postAction';
import Hoc from '../../HOC/hoc';
import InnerHeader from '../InnerHeader/InnerHeader';

 class Dashboad extends Component {
    state={
      open:false,
    }

    componentDidMount(){
        const post={
            "UserGUID" : "E826D69B-637F-44DF-9E4D-346DFFD73B40"
        }
        
        this.props.fetchData(post);
    }
    togglethreedot=(prevState)=>{
      this.setState({open:!prevState.open});
    }
    
   


  render() {
    //console.log('sujeet..'+this.props.posts.Response.BankDetails.BankBalance);
    let investdata= <Loader/>;

    if((this.props.posts).length!==0){
      let bankdata= this.props.posts.Response.BankDetails;
      investdata=  <Investdata icon="bank_acc_icon" nameac="Bank Account" bankcount={bankdata.BankBalanceCount} allbankac={bankdata.AllBankAccountData}  openthree={this.togglethreedot} bankbal={bankdata.BankBalance} >
             {this.state.open &&(
              <div className="view_more_dropdown" style={{display:'block'}}>
                <ul className="dotBankAccountBalance">
                        <li><span >Link Bank A/c</span></li>
                        <li><span className="classIframe" data-iframekey="bank" data-iframetitle="Add Manual Account">Add Manual Bank A/c</span></li>
                        <li><span >Edit Bank</span></li>
                        <li><span >Delete Bank</span></li>
                    </ul>
                      </div>
              )}
                   
      </Investdata>
    }

    let carddata= <Loader/>;

    if((this.props.posts).length!==0){
      let bankdata=  this.props.posts.Response.CardDetails;
      carddata=  <Investdata icon="creditcard_acc_icon" nameac="Card Details" bankcount={bankdata.CardBalanceCount} allbankac={bankdata.AllCardBalanceData}  openthree={this.togglethreedot} bankbal={bankdata.CardBalance} >
             {this.state.open &&(
              <div className="view_more_dropdown" style={{display:'block'}}>
                <ul className="dotBankAccountBalance">
                        <li><span >Link Bank A/c</span></li>
                        <li><span className="classIframe" data-iframekey="bank" data-iframetitle="Add Manual Account">Add Manual Bank A/c</span></li>
                        <li><span >Edit Bank</span></li>
                        <li><span >Delete Bank</span></li>
                    </ul>
                      </div>
              )}
                   
      </Investdata>
    }

    return (
      <Hoc>
        <InnerHeader/>
        <div className="col-md-3">
            {investdata}
        </div>
        <div className="col-md-3">
            {carddata}
        </div>
       
      </Hoc>
    )
  }
}

const mapStateToProps=state=>({
    posts:state.posts.alldata
 });

export default connect(mapStateToProps,{fetchData})(Dashboad);
