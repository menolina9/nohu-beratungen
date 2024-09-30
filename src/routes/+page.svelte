<script>
  import Flower from "$lib/components/Flower.svelte";
	import ProfileImage from "$lib/images/profile-image.jpeg";
  import Typewriter from "$lib/components/Typewriter.svelte";
    import TextGenerateEffect from "$lib/components/TextGenerateEffect.svelte";

</script>

<svelte:head>
	<title>Home | Nora Hunziker</title>
	<meta name="description" content="Mehr Zufriedenheit durch das Wahrnehmen eigener Grenzen und das Ausbrechen aus alten Verhaltensmustern. Eigene Stärken entdecken und nutzen." />
	<meta property="og:description" content="Mehr Zufriedenheit durch das Wahrnehmen eigener Grenzen und das Ausbrechen aus alten Verhaltensmustern." />
	<link rel="canonical" href="https://nora-hunziker.ch" />
	<meta property="og:title" content="Home - Nora Hunziker" />
  <meta property="og:type" content="website" />
	<meta property="og:image" content="https://nora-hunziker.ch/favicon.png" />
</svelte:head>

<section class="flex flex-col sm:flex-row gap-6 items-center p-6">
	<div class="w-full rounded-2xl overflow-hidden shadow-slate-950 profile-shadow">
		<img src="{ProfileImage}" alt="Profilbild" class="cursor-pointer select-none hover:scale-110 transition-transform duration-1000" />
	</div>
	<div class="flex justify-center w-full">
		<div class="flex flex-col items-start select-none">
			<Flower class="w-16 sm:w-24 transition-all duration-700"></Flower>
			<h1 class="text-3xl sm:text-4xl xl:text-7xl ml-8 transition-all duration-300">Nora Hunziker</h1>
			<h2 class="text-lg sm:text-xl xl:text-3xl ml-8 transition-all duration-300">Psychologische Beraterin IBP</h2>
		</div>
	</div>
</section>

<section class="flex flex-col justify-center gap-6 items-center my-12 sm:my-20">

	<h1 class="mb-0">
		<Typewriter 
			texts={[
				{words: [
					{ word: "Eigene", className: "text-slate-950" },
					{ word: "Grenzen", className: "text-blue-900" },
					{ word: "wahrnehmen?", className: "text-slate-950" },
				]},
				{words: [
					{ word: "Ausbrechen", className: "text-slate-950" },
					{ word: "aus immer gleichen", className: "text-slate-950" },
					{ word: "Verhaltensweisen?", className: "text-indigo-600" },
				]},
				{words: [
					{ word: "Eigene", className: "text-slate-950" },
					{ word: "Stärken", className: "text-red-600" },
					{ word: "und", className: "text-slate-950" },
					{ word: "Ressourcen", className: "text-orange-600" },
					{ word: "besser kennenlernen?",className: "text-slate-950" },
				]},
				{words: [
					{ word: "Zufriedenheit", className: "text-green-600" },
					{ word: "mit sich selbst und anderen gewinnen?", className: "text-slate-950" },
				]}
			]}
			duration={2.5}
			className="w-full"
			cursorClassName="bg-slate-950"
		/>
	</h1>

	<p class="w-8/12 text-center text-slate-900 text-xs lg:text-lg xl:text-xl">
		Wenn Sie Unterstützung und Begleitung auf diesem Weg möchten, bin ich für Sie da.
	</p>

	<a href="/angebot" class="text-center text-slate-700 text-opacity-50 hover:bg-slate-800 hover:bg-opacity-5 hover:text-opacity-80 rounded-lg py-2 px-6 transition-all duration-500">Mein Angebot</a>

	<div class="flex flex-col gap-4 mt-8 sm:mt-20 w-10/12 sm:8/12 xl:w-6/12 shadow-inner p-6 rounded-md">
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Persönliche Entwicklung ist für mich eine Herzensangelegenheit.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Die Beziehung zu sich selbst und anderen zu fördern, ist meine Leidenschaft.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Sie bei Ihrer persönlichen Entwicklung zu unterstützen, ist mein Ziel.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Ich freue mich, Sie mit Humor und Mitgefühl in Ihrem persönlichen Prozess zu begleiten und gemeinsam neue Möglichkeiten zu erkunden.
		</p>
	</div>

	<TextGenerateEffect 
		segments={[
			{ 
				text: "«Freiheit bedeutet, dass man nicht unbedingt alles so machen muss, wie andere Menschen.»",
				className: "text-xl sm:text-3xl font-medium"
			}, {
				text: "", className: "", newLine: true,
			}, {
				text: "- Astrid Lindgren",
				className: "text-xl sm:text-2xl text-slate-600 text-opacity-70",
			}
		]}
		durationPerWord={1}
		className="text-slate-900 text-center w-3/4 sm:w-1/2 my-20"
	/>
</section>

<section class="flex flex-col justify-center gap-6 items-center my-20 sm:my-32">
	<h1 class="w-8/12 text-center text-xl sm:text-3xl lg:text-5xl">Psychologische Beratung IBP</h1>

	<div class="flex flex-col gap-8 mt-8 sm:mt-20 w-10/12 sm:8/12 xl:w-6/12 shadow-inner p-6 rounded-md">
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			IBP ist ein effektives, wissenschaftlich fundiertes Verfahren für Psychotherapie und Coaching.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Es integriert Körpererleben, Gedanken, Emotionen und Verhalten in wirksamer Form in den Beratungsprozess.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Die IBP Beratung baut auf Ihren Stärken/Ressourcen auf.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Sie erhalten Werkzeuge und Informationen, die Ihnen helfen sowohl berufliche als auch private Veränderungen anzugehen und umzusetzen. 
		</p>

		<a href="https://ibp-institut.ch" class="text-slate-900 text-center text-sm lg:text-lg xl:text-xl mt-6 hover:underline">https://ibp-institut.ch</a>
	</div>
</section>

<section class="flex flex-col justify-center gap-6 items-center my-20 sm:my-32">
	<h1 class="w-8/12 text-center text-xl sm:text-3xl lg:text-5xl">Kosten</h1>

	<div class="flex flex-col gap-8 mt-8 sm:mt-20 w-10/12 sm:8/12 xl:w-5/12 shadow-inner p-6 rounded-md">
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Die psychologische Beratung wird nicht von der Krankenkasse übernommen.
		</p>
		<p class="text-slate-900 text-xs sm:text-sm lg:text-lg xl:text-xl">
			Da ich zur Zeit noch in Ausbildung bin, betragen die Kosten für 1h/80.-.
		</p>
	</div>
</section>

<style>
	.profile-shadow {
		box-shadow: 
			rgba(0, 0, 0, 0.19) 0px 10px 50px,
			rgba(0, 0, 0, 0.23) 0px 6px 14px;
	}
</style>
