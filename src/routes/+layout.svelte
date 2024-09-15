<script>
  import FloatingNavbar from '$lib/components/FloatingNavbar.svelte';
    import Flower from '$lib/components/Flower.svelte';
	import '../app.css';
</script>

<FloatingNavbar className="" navItems={[
	{ name: 'Start', href: "/" },
	{ name: 'Angebot', href: "/angebot" },
	{ name: 'Blog', href: "/blog" },
	{ name: 'Über mich', href: "/about" }
]} />

<main class="min-h-screen">
	<slot />
</main>

<footer class="w-full flex flex-col sm:flex-row justify-start items-start p-6 bg-slate-200">
	<section class="w-full flex flex-col">
		<Flower repeatAnimation={true} class="w-28 my-2"></Flower>
		<h1 class="text-xl">Nora Hunziker</h1>
		<h2>Psychologische Beratung IBP</h2>
	</section>
	<div class="w-full flex flex-col sm:flex-row gap-8 justify-around mt-6">
		<section class="flex flex-col gap-2">
			<h1 class="text-slate-600 font-semibold opacity-70">Legal</h1>
			<a class="text-slate-900 opacity-90 hover:underline" href="/impressum">Impressum</a>
			<a class="text-slate-900 opacity-90 hover:underline" href="/privacy">Datenschutzerklärung</a>
		</section>
		<section class="flex flex-col gap-2">
			<h1 class="text-slate-600 font-semibold opacity-70">Kontakt</h1>
			<p class="text-sm">
				+41 79 598 36 31<br>
				info@nora-hunziker.ch<br>
				Seestrasse 31, 3600 Thun<br>
			</p>
			<div class="flex flex-row justify-start gap-3">
				<a href="mailto:menolina@proton.me" class="flex justify-center items-center hover:bg-slate-600 hover:bg-opacity-20 p-1 rounded-lg transition-colors duration-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
						<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
					</svg>
				</a>
				<a href="https://www.linkedin.com/in/nora-hunziker-791537263" class="flex justify-center items-center hover:bg-slate-600 hover:bg-opacity-20 p-1 rounded-lg transition-colors duration-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1.7rem" viewBox="0 0 16 16">
						<path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
					</svg>
				</a>
				<a href="https://github.com/megakuul/nohu-beratungen" class="flex justify-center items-center hover:bg-slate-600 hover:bg-opacity-20 p-1 rounded-lg transition-colors duration-500">
					<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
						<path fill="currentColor" d="M12 .999c-6.074 0-11 5.05-11 11.278c0 4.983 3.152 9.21 7.523 10.702c.55.104.727-.246.727-.543v-2.1c-3.06.683-3.697-1.33-3.697-1.33c-.5-1.304-1.222-1.65-1.222-1.65c-.998-.7.076-.686.076-.686c1.105.08 1.686 1.163 1.686 1.163c.98 1.724 2.573 1.226 3.201.937c.098-.728.383-1.226.698-1.508c-2.442-.286-5.01-1.253-5.01-5.574c0-1.232.429-2.237 1.132-3.027c-.114-.285-.49-1.432.107-2.985c0 0 .924-.303 3.026 1.156c.877-.25 1.818-.375 2.753-.38c.935.005 1.876.13 2.755.38c2.1-1.459 3.023-1.156 3.023-1.156c.598 1.554.222 2.701.108 2.985c.706.79 1.132 1.796 1.132 3.027c0 4.332-2.573 5.286-5.022 5.565c.394.35.754 1.036.754 2.088v3.095c0 .3.176.652.734.542C19.852 21.484 23 17.258 23 12.277C23 6.048 18.075.999 12 .999" />
					</svg>
				</a>
			</div>
		</section>
	</div>
</footer>