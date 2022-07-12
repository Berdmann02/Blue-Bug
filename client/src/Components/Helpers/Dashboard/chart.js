// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Completed Tickets', value: 50 },
//   { name: 'Incomplete Tickets', value: 50 },
// ];
// const COLORS = ['#ab0707', '#1da605'];
        

// export default class Example extends PureComponent {

//   render() {
//     return (
//     <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
//     <Pie
//       data={data}
//       cx={120}
//       cy={200}
//       innerRadius={60}
//       outerRadius={80}
//       fill="#8884d8"
//       paddingAngle={5}
//       dataKey="value"
//     >
//       {data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       ))}
//     </Pie>
//   </PieChart>
// )
// }
//   }















// import React from 'react';
// import { ChartDonut } from '@patternfly/react-charts';

// function Chart() {

// const Ticket = () => (
//   <div style={{ height: '275px', width: '300px', color: '#FFFFFF' }}>
//     <ChartDonut
//       ariaDesc="Average number of pets"
//       ariaTitle="Donut chart example"
//       constrainToVisibleArea
//       data={[{ x: 'Complete Tickets', y: 55 }, { x: 'Incomplete Tickets', y: 45 }]}
//       donutOrientation="top"
//       height={275}
//       labels={({ datum }) => `${datum.x}: ${datum.y}%`}
//       legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }]}
//       legendPosition="bottom"
//       legendWidth={225}
//       padding={{
//         bottom: 65, // Adjusted to accommodate legend
//         left: 20,
//         right: 20,
//         top: 20
//       }}
//       subTitle="Pets"
//       title="100"
//       width={300}
//     />
//   </div>
// )


//     return (
//         <Ticket />
//     )}

// export default Chart;










import React from 'react';
import Chart from 'react-apexcharts';

class ApexChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
          

            series: [9, 6],
            options: {
                // colors:['#1da605', '#ab0707'],
                // colors: ['#75bc1c', '#bc1c25' ],
                colors: ['#388e3c', '#f44336'],
              chart: {
                type: 'donut',
              },
                labels: ['Completed', 'Incompleted'],
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
    }


	render() {
		return (
			<div id='chart'>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type='donut'
					// height={500}
                    width={450}
				/>
			</div>
		);
	}
}
export default ApexChart;