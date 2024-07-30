<script>
	import { cn } from '$lib/utils/cn';
	import { Motion } from 'svelte-motion';

	/** 
	 * @typedef Word
	 * @property {string} text
	 * @property {string} className
	*/

	/** @type {Word[]} */
	export let words;
	/** @type {string | undefined} */
	export let className = undefined;
	/** @type {string | undefined} */
	export let cursorClassName = undefined;
</script>

<div class={cn('my-6 flex space-x-1', className)}>
	<Motion
		let:motion
		initial={{
			width: "0%"
		}}
		animate={{
			width: "fit-content"
		}}
		transition={{
			duration: 2,
			ease: 'linear',
			delay: 1
		}}
	>
		<div use:motion class="overflow-hidden">
			<div
				class="lg:text:3xl text-xs font-bold sm:text-base md:text-xl xl:text-5xl"
				style="white-space: nowrap;"
			>
				<div>
					{#each words as word}
						<div class="inline-block">
							{#each word.text as char}
								<span class={word.className}>
									{char}
								</span>
							{/each}
							&nbsp;
						</div>
					{/each}
				</div>
				{' '}
			</div>
			{' '}
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
		}}
	>
		<span
			use:motion
			class={cn("block h-4 w-[4px] bg-black rounded-sm sm:h-6 xl:h-12", cursorClassName)}
		></span>
	</Motion>
</div>