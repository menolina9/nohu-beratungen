<script>
  import { inview } from "svelte-inview";
  import { BlogPreviews } from "./blog.list";
  import BlogImage from "$lib/images/blog-image.jpeg";

</script>

<svelte:head>
	<title>Blog | Nora Hunziker</title>
	<meta name="description"
	content="Entdecke meine Arbeit in Blogform<br> und nimm hilfreiche Tipps mit." />
</svelte:head>

<section class="flex flex-col sm:flex-row-reverse gap-2 items-center p-4">
  <div class="w-full rounded-2xl overflow-hidden shadow-slate-900 profile-shadow m-8">
		<img src="{BlogImage}" alt="Blog-Profilbild" class="cursor-pointer hover:scale-110 transition-transform duration-1000" />
	</div>
  <div class="flex justify-center w-full">
		<div class="flex flex-col items-start select-none">
			<h1 class="text-3xl sm:text-4xl xl:text-7xl mx-8 transition-all duration-300">Blog</h1>
			<h2 class="text-lg sm:text-xl xl:text-3xl mx-8 transition-all duration-300">
        Entdecke meine Arbeit in Blogform<br> und nimm hilfreiche Tipps mit.
      </h2>
		</div>
	</div>
</section>

<section class="flex flex-col gap-4 my-6">
  {#each BlogPreviews as blogPreview}

  <a use:inview
    on:change={(/** @type {any} */ e) => {
      e.target.classList.toggle('in-view', e.detail.inView)
    }} 
    class="blog-preview in-view flex flex-col sm:flex-row items-center gap-2 mx-6 p-6 rounded-xl border-[3px] border-slate-800 border-opacity-40 hover:border-[var(--gradient-start)] transition-all duration-700" 
    href="/blog/{blogPreview.route}">

    <div class="h-auto w-32 rounded-lg overflow-hidden">
      <img class="hover:scale-110 transition-transform duration-1000" alt="{blogPreview.title}" src="/images/blog/{blogPreview.image}" >
    </div>
    <div class="flex flex-col py-2 overflow-hidden">
      <p class="text-xs sm:text-sm text-slate-600">{blogPreview.published}</p>
      <h2 class="text-lg sm:text-2xl font-medium text-slate-900">{blogPreview.title}</h2>
      <h3 class="text-xs sm:text-base text-slate-900">{blogPreview.description}</h3>
    </div>
  </a>

  {/each}
</section>

<style>
  .profile-shadow {
		box-shadow: 
			rgba(0, 0, 0, 0.19) 0px 10px 50px,
			rgba(0, 0, 0, 0.23) 0px 6px 14px;
	}
  .blog-preview {
    opacity: 0;
    transform: translateY(20px);
    transition: all ease 1s;
  }
  .blog-preview.in-view {
    opacity: 1;
    transform: translateY(0);
  }
</style>