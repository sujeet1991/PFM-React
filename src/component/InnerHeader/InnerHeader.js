import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './InnerHeader.css';

 class InnerHeader extends Component{
	Navclick=(event)=>{
		
	
	}
	 render(){
		
		return (
			<React.Fragment>
				<div className="tabs_menu">
				<div className="tab" role="tabpanel">
						<ul className="nav nav-tabs " role="tablist">
								<li role="presentation" className="abc" onClick=
								{this.Navclick}><Link to="/">Dashboard</Link></li>

								<li role="presentation" className="abc"  onClick=
								{this.Navclick}><Link to="/Bank">Bank</Link></li>

								<li role="presentation" className=""><a href="#investments" aria-controls="investments" role="tab" data-toggle="tab" aria-expanded="false">Investments</a></li>
								<li role="presentation" className=""><a href="#creditcards" aria-controls="creditcards" role="tab" data-toggle="tab" aria-expanded="false">Credit Cards</a></li>
								<li role="presentation" className=""><a href="#loans" aria-controls="loans" role="tab" data-toggle="tab" aria-expanded="false">Loans</a></li>
								<li role="presentation" className=""><a href="#insurance" aria-controls="insurance" role="tab" data-toggle="tab" aria-expanded="false">Insurance</a></li>
								<li role="presentation" className=""><a href="#gold" aria-controls="gold" role="tab" data-toggle="tab" aria-expanded="false">Gold</a></li>
								<li role="presentation" className=""><a href="#reward_points" aria-controls="reward_points" role="tab" data-toggle="tab" aria-expanded="false">Reward Points</a></li>
						</ul>
						<div className="icon_wrapper">
						<div className="icons_common refresh"></div>
						<div className="icons_common settings"></div>
						<div className="icons_common print"></div>
					</div>
				</div> 
	
			</div>
			</React.Fragment>
		)
	 }
  
}

export default InnerHeader;
