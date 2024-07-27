<script>
  import Flower from "$lib/components/Flower.svelte";
	import ProfileImage from "$lib/images/profile-image.jpeg";
  import Typewriter from "$lib/components/ui/Typewriter/Typewriter.svelte";

</script>

<svelte:head>
	<title>Nora Hunziker</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col sm:flex-row gap-6 items-center p-6">
	<div class="w-full rounded-2xl overflow-hidden shadow-slate-950 profile-shadow">
		<img src="{ProfileImage}" alt="Profilbild" class="cursor-pointer hover:scale-110 transition-transform duration-1000" />
	</div>
	<div class="flex justify-center w-full">
		<div class="flex flex-col items-start select-none">
			<Flower class="w-16 sm:w-24 transition-all duration-700"></Flower>
			<h1 class="text-3xl sm:text-4xl xl:text-7xl ml-8 transition-all duration-300">Nora Hunziker</h1>
			<h2 class="text-lg sm:text-xl xl:text-3xl ml-8 transition-all duration-300">Beratungen</h2>
		</div>
	</div>
</section>

<section>

	<div class="my-96"></div>
	<Typewriter words={[
		{ text: "Hallo" },
		{ text: "Wello" },
		{ text: "SAALAMIII" },
	]} />

	<h1>
		<span class="welcome">
		</span>


		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

</section>

<style>
	.profile-shadow {
		box-shadow: 
			rgba(0, 0, 0, 0.19) 0px 10px 50px,
			rgba(0, 0, 0, 0.23) 0px 6px 14px;
	}
</style>
