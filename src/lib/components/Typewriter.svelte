<script>
	import { cn } from '$lib/utils/cn';
  import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	/**
	 * @typedef Word
	 * @property {string} word
	 * @property {string} [className]
	*/

	/** 
	 * @typedef Text
	 * @property {Word[]} words
	*/

	/** @type {Text[]} */
	export let texts;

	/** @type {number} */
	export let duration;

	/** @type {string | undefined} */
	export let className = undefined;
	/** @type {string | undefined} */
	export let cursorClassName = undefined;

	/** @type {"hidden" | "pause" | "visible"} */
	let animationState = "hidden";

	/** @type {Text} */
	let animatedText = {
		words: [{word: ""}],
	};

	/** @type {number} */
	let animatedTextIdx = 0;

	onMount(() => {
		setInterval(() => {
			switch (animationState) {
				case "hidden":
					if (animatedTextIdx >= texts.length) {
						animatedTextIdx = 0;
					}
					
					animatedText = texts[animatedTextIdx];

					animatedTextIdx++;
					animationState = "visible";
					break;
				case "visible":
					animationState = "pause";
					break;	
				case "pause":
					animationState = "hidden";
					break;
			}
		}, duration * 1000)
	})

	const variants = {
		visible: {
			width: "fit-content",
		},
		pause: {
			width: "fit-content",
		},
		hidden: { 
			width: 0 
		}
	};
</script>

<div class={cn('my-6 flex flex-row items-center space-x-1', className)}>
	<Motion
		let:motion
		initial={{
			width: 0
		}}
		variants={variants}
		animate={animationState}
		transition={{
			duration: duration,
			ease: 'linear',
			delay: 0
		}}
	>
		<div use:motion class="py-2 overflow-hidden">
			<div
				class="text-xs font-bold sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl"
				style="white-space: nowrap;">
				<p>
					{#each animatedText.words as word}
						<span class="{word.className}">{word.word}{' '}</span>
					{/each}
				</p>
			</div>
		</div>
	</Motion>
	<Motion
		let:motion
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1
		}}
		transition={{
			duration: 0.8,

			repeat: Infinity,
			repeatType: 'reverse'
		}}>
		<span
			use:motion
			class={cn("h-4 w-[4px] bg-black sm:h-6 xl:h-12", cursorClassName)}
		></span>
	</Motion>
</div>
