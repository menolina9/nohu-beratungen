<script>
  import FloatingNavbar from '$lib/components/FloatingNavbar.svelte';
	import '../app.css';
</script>

<FloatingNavbar className="" navItems={[
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
]} />

<main class="min-h-screen">
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>