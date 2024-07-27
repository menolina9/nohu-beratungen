<script>
	import { Motion, AnimatePresence, useViewportScroll } from 'svelte-motion';
	import { cn } from '$lib/utils/cn.js';
  import Flower from '$lib/components/Flower.svelte';

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
        "fixed nav-center top-2 right-2 flex flex-row items-center gap-4 z-50 py-2 px-4 rounded-3xl bg-slate-100 bg-opacity-70 border-2 border-slate-400",
        className)}>
      <Flower repeatAnimation={true} class="w-8"></Flower>
			{#each navItems as navItem}
				<a href={navItem.href} class="hover:bg-black hover:bg-opacity-10 transition-all duration-700 py-2 rounded-lg w-20 text-lg font-semibold text-center">
					{navItem.name}
				</a>
			{/each}
		</nav>
	</Motion>
</AnimatePresence>

<style>
  .nav-center {
    @media screen and (max-width: 600px) {
      width: 90%;
      left: 50%;
      translate: -50%;
    }
  }
</style>