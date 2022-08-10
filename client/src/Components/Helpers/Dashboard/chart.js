import React from 'react';
import Chart from 'react-apexcharts';
import { useGlobalContext } from '../../../Context/GlobalContext';



function ApexChart () {

  const { incompleteTickets, completeTickets } = useGlobalContext();

		const state = {
            // series: [9, 6],
            series: [completeTickets.length, incompleteTickets.length],
            options: {
                colors: ['#388e3c', '#f44336'],
              chart: {
                type: 'donut',
              },
                labels: ['Complete', 'Incomplete'],
                title: {
                    text: "Ticket Completion",
                    align: 'left',
                    style: {
                      color: '#FFFFFF', 
                      fontWeight: 'bold'  
                    }
                  },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom',
                  }
                }
              }]
            }
        }

		return (
			<div id='chart'>
				<Chart
					options={state.options}
					series={state.series}
					type='donut'
					// height={500}
                    width={450}
				/>
			</div>
		);
	}


export default ApexChart;

















// import React from 'react';
// import Chart from 'react-apexcharts';
// import { useGlobalContext } from '../../../Context/GlobalContext';

// // function IncompleteTickets(){
// //   const { incompleteTickets } = useGlobalContext();
// // }

// class ApexChart extends React.Component {
// 	constructor(props) {
// 		super(props);

// // function CompleteCount(){
// //   const { completeTickets } = useGlobalContext();
// // }

// 		this.state = {
          

//             // series: [9, 6],
//             series: [6, 4],
//             options: {
//                 colors: ['#388e3c', '#f44336'],
//               chart: {
//                 type: 'donut',
//               },
//                 labels: ['Completed', 'Incompleted'],
//                 title: {
//                     text: "Ticket Completion",
//                     align: 'left',
//                     style: {
//                       color: '#FFFFFF', 
//                       fontWeight: 'bold'  
//                     }
//                   },
//               responsive: [{
//                 breakpoint: 480,
//                 options: {
//                   chart: {
//                     width: 300
//                   },
//                   legend: {
//                     position: 'bottom',
//                   }
//                 }
//               }]
//             }
//         }
//     }

    
// 	render() {
// 		return (
// 			<div id='chart'>
// 				<Chart
// 					options={this.state.options}
// 					series={this.state.series}
// 					type='donut'
// 					// height={500}
//                     width={450}
// 				/>
// 			</div>
// 		);
// 	}
// }
// export default ApexChart;