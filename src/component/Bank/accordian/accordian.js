import React,{Component} from 'react'
import './accordian.css';

class  accordian extends Component{
    state={
        open: false,
        headingClassName: '',
        className: '',
        Label: 'label-close',
        icon: 'plus',
        index:"-1"
     
    }
    onAccordianClick=(data)=>{
        console.log(data);
        this.setState(prev => ({
			index: prev.index === data ? "-1" : data
		}));
        this.expand(data);
    
    }
    expand=(id)=>{
       let addclass = null;
        if(this.state.index===id){
            addclass= 'in';
        }
        return addclass;
    }
    getTransData=(data,tagname)=>{
      
        return data.map((curr)=>{

            if((tagname===curr.AccountType)||(tagname==='All') || (tagname==='')){

               
                let sp = curr.AccountDetails
                 let res = sp.split("-");
            return(
                <div className="transaction_table">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                        <div className={`panel-heading `}>
                                 <div className="panel-title">
                                     <div className="collapsed clearfix">
                                          <div className="col-md-1 text-center">
                                              <span onClick={(e)=>this.onAccordianClick(curr.key)} className={`${this.expand(curr.key)==='in'?'minus':'plus'} icons_common`}></span>
                                          </div>
                                          <div className="col-md-1"><span className="kotak_bank"></span></div>
                                          <div className="col-md-3">Bank Name<br/><span className="trans_hd_red">{res[0]}</span></div>
                                          <div className="col-md-1">Account Type<br/><span className="trans_hd_grey">{curr.AccountType}</span></div>
                                          <div className="col-md-2">Account Number<br/><span className="trans_hd_grey">{res[1]}</span></div>
                                          <div className="col-md-1">Balance<br/><span className="trans_hd_red bal">48487478</span></div>
                                          <div className="col-md-1">Status<br/><span className="trans_hd_grey">Active</span></div>
                                          <div className="col-md-2 text-right">
                                              <div className="icons_common refresh mar_rgt15 top7"></div>
                                              <div className="icons_common edit mar_rgt15"></div>
                                              <div className="icons_common delete"></div>
                                          </div>
                                          <div className="clearfix"></div>
              
              
                                     </div> 
                                     {/* end collapsed */}
                                 </div>
                                 {/* end title */}

                             </div> 
                             <div className={`panel-collapse collapse ${this.expand(curr.key)}`} >
                                 <div className="panel-body">
                                     <table className="table">
                                         <thead>
                                         <tr className="table-heading">
                                              <td className="heading-style widcol1-2">&nbsp;</td>
                                              <td className="heading-style widcol3">Date</td>
                                              <td className="heading-style widcol4">Description</td>
                                              <td className="heading-style widcol5">Category</td>
                                              <td className="heading-style text-right padrt40">Amount (Rs.)</td>
                                              
                                          </tr>
                                         </thead>
                                          <tbody className="table-xl-border">
                                            {this.descDetail(curr.keyval)}
                                        
                                          <tr className="equality-td">
                                          <td colspan="5" className="equality-td  text-right padrt40 ">
                                          <span className="view_all_trans">View all transactions <i className="long_arrow_right"></i>
                                          </span></td>
                                          </tr>
                                          </tbody>
                                     </table>
                                 </div> 
                             </div>
                        </div>
                    </div>
                 </div>   
                //this.descDetail(curr.keyval)
                
            ) 
                
            }
            // end if condition
            else{
                return null;
            }
           

            
                
            
            
        })
    }
    descDetail=(desc)=>{
        //console.log("l="+desc.length);
        if(desc.length===0){
                    
            return(<p>NO DATA</p>);
       
      
        }else{
            return desc.map((keydata,index)=>{
                 return( <tr className="equality-td" key={"suejey"+index}>
                        <td className="equality-td widcol1-2">&nbsp;</td>
                        <td className="equality-td widcol3">{keydata.trandate}</td>
                        <td className="equality-td widcol4">{keydata.description}</td>
                        <td className="equality-td widcol5">
                            {keydata.category}
                        </td>
                        <td className="equality-td  text-right padrt40 ">{keydata.amount}</td>
                    </tr>)
                
              
            })
        }
         
    }

  

    render(){
      let retCount = 0;
      let datadis= null;
       if(this.props.transationDetail){
            let propsData= this.props.transationDetail;
            if(propsData.TranDataFetchedStatus===1){

                datadis= this.getTransData(propsData.TranDataFetched,this.props.banktype);
                console.log("null="+typeof(datadis));

                
                for (var key in datadis) {
                    console.log('inside='+datadis[key]);
                    if(datadis[key]!==null){
                        retCount=1;
                    }
                }
                if(retCount===0){
                    datadis='no Data';
                }
            }
            else{
                console.log('no');
            }
       }
      
        
      
       
         
      
        return (
            <React.Fragment>
            {datadis}
                  
          
           </React.Fragment>
          )
    }
  
}

export default accordian;
