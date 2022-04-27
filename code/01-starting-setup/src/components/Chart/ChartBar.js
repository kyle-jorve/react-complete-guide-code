import './ChartBar.css';

function ChartBar(data) {
	let barFillHeight = '0%';

	if (data.maxVal > 0) {
		barFillHeight = `${Math.round((data.value / data.maxVal) * 100)}%`;
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>

			<div className="chart-bar__label">{data.label}</div>
		</div>
	);
}

export default ChartBar;
