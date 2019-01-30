import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './investdata.css'
;

 class investdata extends Component {
    mouseOverbank=()=>{
        this.refs.bankoverlay.style.display = 'block';
    };
    mouseLeavesbank=() =>{
        this.refs.bankoverlay.style.display = 'none';
    };
    render(){
        let bankac=this.props.allbankac.map(curr=>{
            return(
                <li key={this.props.allbankac.indexOf(curr)}>
                <div className="wid40">{curr.AccountDetails}</div>
                <div className="wid50"><i className="fa fa-rupee"></i>{curr.CurrentBalance}</div>
                 </li>  
            )
           
        })
        return (
            <div className="bubble_div">
               <Link to={{pathname:'/Bank'}}>
                    <h1 className="heading_1" onMouseEnter={this.mouseOverbank} onMouseLeave={this.mouseLeavesbank}>{this.props.nameac} <span className="BankAccountBalanceCount">({this.props.bankcount})</span></h1>

                        <div className="bubble_tooltip" ref="bankoverlay" style={{display:"none"}}>
                            <div className="arrow_box1"></div>
                            <div className="tooltip_hd">
                                <div className="wid40"><span className="BankAccountBalanceCount">({this.props.bankcount})</span>{this.props.nameac}</div>
                                <div className="wid50"><i className="fa fa-rupee"></i><span className="BankAccountBalance"></span></div>
                            </div>
                            <ol id="BankAccountBalanceList">
                               {bankac}
        
        
                            </ol>
                        </div>

                    </Link>
                    <i className={`${this.props.icon} bubble_icons`}></i>
                    <div className="bubble_amt"><i className="fa fa-rupee fnt16"></i><span className="BankAccountBalance">{this.props.bankbal}</span></div>
                    <div className="view_more_bubble_dt" onClick={this.props.openthree} onFocus={this.props.openthree}>
                                       <span className="dots small"></span>
                                       <span className="dots small"></span>
                                       <span className="dots small"></span>
                    </div>
                    {this.props.children}
            </div>
          )
    } 
  
}

export default investdata;