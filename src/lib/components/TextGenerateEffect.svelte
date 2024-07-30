<script>
    import { cn } from '$lib/utils/cn';
    import { inview } from 'svelte-inview';
	import { Motion } from 'svelte-motion';

	/** 
	 * @typedef TextSegment
	 * @property {string} text
	 * @property {boolean} [newLine]
	 * @property {string} className
	*/

	/** @type {TextSegment[]} */
	export let segments;

	/** @type {number} */
	export let durationPerWord;

  /** @type {string | undefined} */
	export let className = undefined;

	/** @type {TextSegment[]}*/
	// Flat segment array that every word has its own segment, inheriting other properties from the text segment.
	const wordSegments = segments.flatMap(
		block => block.text.split(' ')
			.map(word => ({ text: word, className: block.className, newLine: block.newLine})))

	/** @type {string} */
	let animationState = "hidden";

	const variants = {
		visible: (/** @type {number} */ i) => ({
			opacity: 1,
			transition: {
				delay: i * (durationPerWord / 4),
				duration: durationPerWord
			}
		}),
		hidden: { opacity: 0 }
	};
</script>

<div         
	use:inview
	on:change={(/** @type {any} */ e) => {
		if (e.detail.inView) {
			animationState = "visible";
		} else {
			animationState = "hidden";
		}
	}}
	class={className}>
	<div class="text-2xl leading-snug tracking-wide">
		<Motion let:motion custom={0} {variants} initial="hidden" animate={'visible'}>
			<div use:motion>
				{#each wordSegments as word, idx}
				<Motion let:motion {variants} custom={idx + 1} initial="hidden" animate={animationState}>
					<span use:motion class={cn("text-inherit", word.className)}>
						{word.text}{' '}
						{#if word.newLine}
						<br>
						{/if}
					</span>
				</Motion>
				{/each}
		</Motion>
	</div>
</div>