<script>
  import BackgroundBeams from "$lib/components/BackgroundBeams.svelte";
    import TextGenerateEffect from "$lib/components/TextGenerateEffect.svelte";
</script>

<svelte:head>
	<title>Angebot | Nora Hunziker</title>
	<meta name="description"
	content="Ich biete Einzelberatung an für Menschen, die immer wieder bei ähnlichen Schwierigkeiten anstehen, in einer schwierigen Situation stecken oder sich allgemein Weiterentwickeln und sich besser kennenlernen möchten." />
</svelte:head>

<BackgroundBeams></BackgroundBeams>

<center>
  <section class="flex flex-col justify-center items-center gap-8 sm:w-7/12 w-9/12 transition-all duration-500">
    <h1 class="text-3xl sm:text-4xl xl:text-7xl text-center mt-32 mb-16">Mein Angebot</h1>
  
    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Allgemein</h2>
    <p class="w-full text-start ml-10">
      Psychologische Beratung ist keine Therapie<br>
      Ich als Beraterin gebe Ihnen keine vorgefertigten Lösungen, sondern unterstütze Sie im herausfinden der eigenen Lösungen als Gesprächs- und Interaktionspartnerin.<br>
      Die Grundvoraussetzung hierfür ist, dass die Fähigkeit zu Selbststeuerung nicht eingeschränkt ist.
    </p>

    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Vorgehen</h2>
    <p class="w-full text-start ml-10">
      Ein  Ziel wird formuliert über einen bestimmten Zeitraum, in dem die notwendigen Entwicklungsschritte erarbeitet werden sollen und können.<br>
      <br>
      Bestehende Verhaltensmuster werden bewusst gemacht und reflektiert.
      Dabei bin ich an Ihrer Seite um Ihren individuellen Entwicklungsprozess zu fördern, Sie Ihre Stärken und Ressourcen bewusst werden zu lassen.
      Ebenso assistiere ich Ihnen beim Entwickeln neuer Wahrnehmungsweisen und Handlungsmöglichkeiten.<br>
      <br>
      Ist der geplante Zeitpunkt erreicht, überprüfen wir gemeinsam, ob Ihr Ziel erreicht ist oder ggf. weitere Maßnahmen notwendig sind.<br>
    </p>

    <TextGenerateEffect 
      segments={[
        { 
          text: "«Die reinste Form des Wahnsinns ist es, alles beim Alten zu belassen und zu hoffen, dass sich etwas ändert»",
          className: "text-xl sm:text-3xl font-medium"
        }, {
          text: "", className: "", newLine: true,
        }, {
          text: "- Albert Einstein",
          className: "text-xl sm:text-2xl text-slate-600 text-opacity-70",
        }
      ]}
      durationPerWord={1}
      className="text-slate-900 text-center w-full my-20"
    />
  </section>
</center>

