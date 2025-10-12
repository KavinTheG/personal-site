export interface TypewriterParams {
	delay?: number;
	speed?: number;
}

interface TextRange {
	textNode: Text;
	range: [number, number];
	text: string;
}

/**
 * Typewriter effect for text content inside an element.
 * Usage: <div transition:typewriter>...</div>
 */
export default function typewriter(
	node: HTMLElement,
	{ delay = 0, speed = 50 }: TypewriterParams = {}
) {
	const textNodes = getAllTextNodes(node);
	if (!textNodes.length) {
		throw new Error('This transition only works on elements with text nodes');
	}

	let totalLength = 0;
	const ranges: TextRange[] = textNodes.map((textNode) => {
		const text = textNode.textContent ?? '';
		const range: [number, number] = [totalLength, totalLength + text.length];
		totalLength += text.length;
		textNode.textContent = '';
		return { textNode, range, text };
	});

	let currentRangeIndex = 0;

	function getCurrentRange(i: number): TextRange {
		while (
			currentRangeIndex < ranges.length - 1 &&
			ranges[currentRangeIndex].range[1] < i
		) {
			const { textNode, text } = ranges[currentRangeIndex];
			textNode.textContent = text; // finish typing previous node
			currentRangeIndex++;
		}
		return ranges[currentRangeIndex];
	}

	const duration = totalLength * speed;

	return {
		delay,
		duration,
		tick: (t: number) => {
			const progress = Math.floor(totalLength * t);
			const { textNode, range, text } = getCurrentRange(progress);
			const [start, end] = range;
			const textLength = ((progress - start) / (end - start)) * text.length;
			textNode.textContent = text.slice(0, textLength);
		},
	};
}

function getAllTextNodes(node: Node): Text[] {
	if (node.nodeType === Node.TEXT_NODE) {
		return [node as Text];
	} else if (node.hasChildNodes()) {
		const list: Text[] = [];
		node.childNodes.forEach((child) => list.push(...getAllTextNodes(child)));
		return list;
	}
	return [];
}

