import ChartBar from './ChartBar';
import './Chart.css';

function Chart(data) {
	let maxVal = Math.max(...data.dataPoints.map(point => point.value));

	return (
		<div className="chart">
			{data.dataPoints.map(point => {
				return (
					<ChartBar
						key={point.label}
						value={point.value}
						maxVal={maxVal}
						label={point.label}
					/>
				);
			})}
		</div>
	);
}

export default Chart;
