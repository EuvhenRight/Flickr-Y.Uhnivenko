export function ColorText(elementId: string, text: string) {
	const colors = [
		'#FF6347', // Tomato
		'#32CD32', // Lime Green
		'#1E90FF', // Dodger Blue
		'#FF69B4', // Hot Pink
		'#FFA500', // Orange
		'#00CED1', // Dark Turquoise
		'#00FF7F', // Spring Green
		'#BA55D3', // Medium Orchid
		'#FF4500', // Orange Red
		'#4169E1', // Royal Blue
	]
	//DIFFERENT COLORS FOR DIFFERENT LETTERS
	const element = document.getElementById(elementId)
	if (!element) return null
	element.innerHTML = text
		.split('')
		.map((letter, index) => {
			const color = colors[index % colors.length]
			return `<span style="color: ${color};">${letter}</span>`
		})
		.join('')
}
