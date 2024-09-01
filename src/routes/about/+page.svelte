<script>
  import AboutImage from "$lib/images/about-image.jpeg"
    import { inview } from "svelte-inview";
    import { TimelineItems } from "./timeline.list";
</script>

<svelte:head>
	<title>Über mich | Nora Hunziker</title>
	<meta name="description"
	content="." />
</svelte:head>

<center>
  <section class="flex flex-col justify-center items-center gap-8 lg:w-5/12 sm:w-7/12 w-9/12 transition-all duration-500">
    <h1 class="text-3xl sm:text-4xl xl:text-7xl text-center mt-32">Über mich</h1>
  
    <div class="relative w-full rounded-2xl overflow-hidden m-8">
      <img src="{AboutImage}" alt="Profilbild" class="cursor-pointer hover:scale-110 transition-transform duration-1000" />
      <div class="absolute flex flex-col left-0 right-0 bottom-0 p-4 cursor-pointer bg-slate-950 bg-opacity-10 hover:bg-opacity-60 h-8 hover:h-28 transition-all duration-700">
        <p class="text-start text-xs sm:text-base lg:text-base text-slate-100 text-opacity-80 mt-4 sm:mt-6">
          "I ha no lang nid aus entdeckt, wo sech vor mir het versteckt..."
        </p>
        <p class="text-start text-xs sm:text-sm lg:text-base text-slate-100 text-opacity-60">
          - Patent Ochsner
        </p>      
      </div>
      
    </div>

    <p class="w-full text-start text-sm sm:text-base">
      Ich bin eine offene, neugierige und lebensbejahende Frau und schätze alle kleinen Dinge um mich und in mir.<br>
      Gerne bin ich in der Natur unterwegs; sowohl in der Stille alleine, wie auch in Begleitung von lieben Menschen.<br>
      Meine Liebe zu Büchern besteht seit ich denken kann. <br><br>
      Als Mutter von zwei Kindern (2006/2008) lebe ich mit meinem Partner zusammen, welcher ebenfalls zwei Kinder im gleichen Alter hat.
    </p>

    <h2 class="text-2xl sm:text-4xl text-center my-12">Werdegang</h2>

    <div class="w-full flex flex-col gap-6 mb-20">
      {#each TimelineItems as item}
      <div 
        use:inview
        on:change={(/** @type {any} */ e) => {
          e.target.classList.toggle('in-view', e.detail.inView)
        }} 
        class="timeline-item in-view w-full flex flex-row items-center ">
        
        <h1 class="relative w-3/12 text-start font-semibold text-slate-950 text-opacity-70">
          {item.time}
          <div class="absolute right-0 top-[50%] translate-y-[-50%] w-4 h-24 invisible sm:visible rounded-l-md bg-black"></div>
        </h1>

        <div class="timeline-box w-9/12 h-32 flex flex-col items-center justify-center p-6 bg-slate-950 bg-opacity-5 rounded-r-lg">
          <p class="text-xs sm:text-sm">
            {#each item.content as line}
              {line}<br>
            {/each}
          </p>
        </div>
      </div>
      {/each}
    </div>
  </section>
</center>

<style>
  .timeline-item {
    @apply opacity-0 transition-all duration-700;
  }

  .timeline-item.in-view {
    @apply opacity-100;
  }

  .timeline-item .timeline-box {
    transition: all ease 10s;
    border-left-width: 8px;
    
  }

  .timeline-item.in-view .timeline-box {
    animation: animate-border 10s ease infinite;
  }

  @keyframes animate-border {
    0%, 100% {
      border-left-color: var(--gradient-start);
    }
    35% {
      border-left-color: var(--gradient-via);
    }
    65% {
      border-left-color: var(--gradient-end);
    }
  }
</style>