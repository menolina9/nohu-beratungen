<script>
	import { Motion, AnimatePresence, useViewportScroll } from 'svelte-motion';
	import { cn } from '$lib/utils/cn.js';
  import Flower from '$lib/components/Flower.svelte';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';

  /** 
   * @typedef {Object} NavItem
   * @property {string} name
   * @property {string} href
  */

  /** @type {NavItem[]}*/
	export let navItems;

  /** @type {string} */
  export let className;

  /** @type {import("svelte-motion").ScrollMotionValues} */
	const { scrollYProgress } = useViewportScroll();

  /** @type {boolean} */
	let visible = true;

	$: $scrollYProgress, updateDirection();

	function updateDirection() {
    if (scrollYProgress.get() === 0) {
      visible = true;
    } else if (scrollYProgress.get() > 0.05) {
      const direction = $scrollYProgress - scrollYProgress.getPrevious();
			if (direction < 0) {
				visible = true;
			} else {
				visible = false;
			}
    } else {
      visible = false;
    }
	}

	/** @type {boolean} */
	let expanded = true;
</script>

<AnimatePresence show={true}>
	<Motion
		let:motion
		initial={{
			opacity: 1,
			y: -100
		}}
		animate={{
			y: visible ? 0 : -100,
			opacity: visible ? 1 : 0
		}}
		transition={{
			duration: 0.2
		}}
	>
		<nav
			use:motion
			class={cn(
        "fixed nav-bar top-2 right-2 flex flex-row items-center gap-4 z-50 py-2 px-4 rounded-3xl border-2 border-slate-400 bg-slate-100 bg-opacity-70 transition-all duration-700",
        className)} class:expanded={expanded}>
			<button on:click={() => expanded = !expanded}>
				<Flower repeatAnimation={true} class="w-8"></Flower>
			</button>

			{#each navItems as navItem}
			<a on:click={() => expanded = !expanded}
				aria-current={$page.url.pathname === navItem.href ? "page" : undefined} 
				href={navItem.href} 
				class="nav-item w-28 text-lg font-semibold text-center">
				<div class="nav-item-inner rounded-lg bg-slate-100 py-2">
					{navItem.name}
				</div>
			</a>
			{/each}

		</nav>
	</Motion>
</AnimatePresence>

<style>
  .nav-bar {
		-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
		box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    @media screen and (max-width: 640px) {
			@apply flex-col h-12 overflow-hidden;
      width: 90%;
      left: 50%;
      translate: -50%;
    }
  }
	.nav-bar::-webkit-scrollbar {
		display: none; /* Chrome, Safari and Opera */
	}
	.nav-bar.expanded {
		@media screen and (max-width: 640px) {
			@apply h-96 overflow-y-scroll;
    }
	}

	.nav-item {
		@apply rounded-2xl relative;
		padding: 2px;
		border: 5px solid transparent;
		background-image: linear-gradient(to bottom right, rgba(0,0,0,1), rgba(0,0,0,0.6));
		background-origin: border-box;
		background-clip: padding-box, border-box;
		transition: all ease 1s;

		@media screen and (max-width: 640px) {
			@apply w-full;
		}
	}
	.nav-item[aria-current='page'] {
		background-image: linear-gradient(to bottom right, var(--gradient-start), var(--gradient-via), var(--gradient-end));
		background-size: 200% 200%;
		animation: gradient-animation 10s ease infinite;
	}
	.nav-item:hover {
		background-image: linear-gradient(to bottom right, var(--gradient-start), var(--gradient-via), var(--gradient-end));
		background-size: 200% 200%;
		animation: gradient-animation 10s ease infinite;
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>