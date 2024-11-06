<script>
    import Beam from "$lib/components/Beam.svelte";

  /**
	 * @type {string}
	*/
  export let title;

  /**
	 * @type {string}
	*/
  export let description;

  /**
	 * @type {string}
	*/
  export let published;

  /**
	 * @type {string}
	*/
  export let image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}" />
</svelte:head>

<div class="bg-base-200 flex flex-col justify-center items-center w-full">
  <section class="flex flex-col sm:flex-row gap-2 items-center p-4">
    <div class="rounded-2xl overflow-hidden shadow-slate-950 profile-shadow m-8">
      <img src="/images/blog/{image}" alt="{title} Bild 1" class="w-96 cursor-pointer hover:scale-110 transition-transform duration-1000" />
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-col items-start select-none">
        <p>{published}</p>
        <h1 class="text-xl sm:text-2xl xl:text-4xl font-medium transition-all duration-300">{title}</h1>
        <h2 class="text-lg sm:text-xl xl:text-3xl transition-all duration-300">{description}</h2>
      </div>
    </div>
  </section>

  
  <Beam>
    <article class="markdown max-w-5xl p-6 lg:p-10">
      <slot />
    </article>
  </Beam>

</div>

<!--
  Important: This part is only working because of the 'tailwindcss/nesting': {}, postcss plugin
  if this fails for whatever reason, the media querys just need to be done with default css, instead
  of using the nested screen objects
-->
<style>
  .markdown :global(.gallery) {
    @apply flex flex-col justify-start gap-8 w-[80%] lg:w-96 mx-12 lg:mx-6;
  }

  .markdown :global(.gallery-item) {
    @apply rounded-sm cursor-pointer overflow-hidden;
  }

  .markdown :global(.gallery-item-image) {
    @apply hover:scale-110 transition-all duration-700;
  }

  .markdown :global(h1) {
    @apply text-xl font-bold mb-8 mt-14;

    @screen sm {
      @apply text-3xl;
    }
    @screen xl {
      @apply text-5xl;
    }
  }

  .markdown :global(h2) {
    @apply text-lg font-bold mb-7 mt-12;

    @screen sm {
      @apply text-2xl;
    }
    @screen xl {
      @apply text-4xl;
    }
  }

  .markdown :global(h3) {
    @apply text-base font-bold mb-5 mt-10;

    @screen sm {
      @apply text-xl;
    }
    @screen xl {
      @apply text-3xl;
    }
  }

  .markdown :global(h4) {
    @apply text-sm font-bold mb-4 mt-8;

    @screen sm {
      @apply text-lg;
    }
    @screen xl {
      @apply text-2xl;
    }
  }

  .markdown :global(p) {
    @apply text-xs my-4;

    @screen sm {
      @apply text-base;
    }
    @screen xl {
      @apply text-xl;
    }
  }

  .markdown :global(ul) {
    @apply list-disc list-inside my-3;
  }

  .markdown :global(li) {
    @apply text-xs my-1 font-semibold;

    @screen lg {
      @apply text-xl;
    }
  }
</style>