<script>
  import { onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  /** @type {HTMLElement}*/
  let beamContainer;

  /** @type {number} */
  let height = 0;

  /** @type {number} */
  let scrollProgress = 0;

  /** @type {import("svelte/motion").Tweened<number>} */
  let scrollProgressTween = tweened(scrollProgress, { duration: 1000, easing: cubicOut });

  onMount(() => {
    if (typeof window !== 'undefined') {
      height = beamContainer.scrollHeight;
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
  })

  $: scrollProgressTween.set(scrollProgress);

  let ticking = false;
	function handleScroll() {
		if (!ticking) {
			if (typeof window !== 'undefined') {
        height = beamContainer.scrollHeight;
				window.requestAnimationFrame(() => {
					scrollProgress = (window.scrollY + (window.innerHeight / 2)) / document.body.offsetHeight;
					ticking = false;
				});
				ticking = true;
			}
		}
	}
</script>

<div class="relative px-4 mx-2 h-full">
  <svg class="beam absolute top-0 left-0 z-0 stroke-slate-600 opacity-20" width="29" height="{height}" viewBox="0 0 29 {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 L0 256 L28 320 L28 {height}" />
  </svg>

  <svg class="beam active absolute top-0 left-0 z-10 opacity-70" width="29" height="{height}" viewBox="0 0 29 {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: var(--gradient-start);" />
        <stop offset="50%" style="stop-color: var(--gradient-via);" />
        <stop offset="100%" style="stop-color: var(--gradient-end);" />
      </linearGradient>
    </defs>
    <path d="M0 0 L0 256 L28 320 L28 {height}" stroke-dasharray="{height}" stroke-dashoffset="{height - ($scrollProgressTween * height)}"/>
  </svg>
  
  <div bind:this={beamContainer}>
    <slot />
  </div>
</div>

<style>
  .beam {
    stroke-width: 6;
    stroke-linejoin: round;
  }

  .beam.active {
    stroke: url(#beamGradient);
  }
</style>
