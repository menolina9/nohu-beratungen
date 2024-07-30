<script>
	import { Motion } from 'svelte-motion';

  /** @type {string} */
	export let text;

	/** @type {string} */
	export let newLineWord = "<br>";

	/** @type {number} */
	export let durationPerWord;

  /** @type {string | undefined} */
	export let className = undefined;

	console.log(text.split(' '))

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

<div class={className}>
	<div class="mt-4">
		<div class="text-2xl leading-snug tracking-wide">
			<Motion let:motion custom={0} {variants} initial="hidden" animate={'visible'}>
				<div use:motion>
					{#each text.split(' ') as word, idx}
					<Motion let:motion {variants} custom={idx + 1} initial="hidden" animate={'visible'}>
						<span use:motion class="text-inherit">
							{#if word===newLineWord}
							<br>
							{:else}
							{word}{' '}
							{/if}
						</span>
					</Motion>
					{/each}
			</Motion>
		</div>
	</div>
</div>