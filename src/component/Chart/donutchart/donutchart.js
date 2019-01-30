import React,{Component} from 'react'
import './donutchart.css';
import Chart from 'react-google-charts';

class  donutchart extends Component {
    render(){
        var chartData = [['Currency Name', 'Currency Rate']]
         if(this.props.donatchart){
           
            this.props.donatchart.map(curr=>{

                return(
                //    console.log(curr.AccountDetails+"="+ curr.CurrentBalance)
                   chartData.push([curr.AccountDetails,parseInt(curr.CurrentBalance)])
                  
                )
            })
            //console.log(chartData)
         }
        return (
            <React.Fragment>
           
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: '',
                    pieHole: 0.4,
                    pieSliceBorderColor: 'none',
                    colors: ['#c7222a', '#94191f', '#611014', '#33090b'],
                    chartArea:{
                        left:30,
                        top:20,
                        width:'80%',
                        height:'80%', 
                        borderColor:'#000',
                        backgroundColor:{fill:'Ivory', stroke:'black',strokeWidth:90}
                    },
                pieSliceText: "none",
                tooltip: {
                    trigger: "none",
                },
                legend: {
                    position: "right", 
                    textStyle: {color: '#a6aaac', fontSize: 13, fontName: 'PFEncoreSansPro-Regular'},
                    alignment: "center",
        
                },
        
        
        
                }}
                rootProps={{ 'data-testid': '1' }}
            />
             </React.Fragment>
          )
         
    }
   
 
}

export default donutchart;
