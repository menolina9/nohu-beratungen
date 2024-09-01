<script>
  import BackgroundBeams from "$lib/components/BackgroundBeams.svelte";
    import TextGenerateEffect from "$lib/components/TextGenerateEffect.svelte";
</script>

<svelte:head>
	<title>Angebot | Nora Hunziker</title>
	<meta name="description"
	content="Ich biete Einzelberatung an für Menschen, die immer bei ähnlichen Problemen anstehen, in einer schwierigen Situation stecken oder sich besser kennenlernen und weiterentwickeln möchten." />
</svelte:head>

<BackgroundBeams></BackgroundBeams>

<center>
  <section class="flex flex-col justify-center items-center gap-8 sm:w-7/12 w-9/12 transition-all duration-500">
    <h1 class="text-3xl sm:text-4xl xl:text-7xl text-center mt-32 mb-16">Mein Angebot</h1>
  
    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Allgemein</h2>
    <p class="w-full text-start ml-10">
      Psychologische Beratung ist keine Therapie.<br>
      Als Beraterin gebe ich Ihnen keine vorgefertigten Lösungen, sondern unterstütze Sie dabei eigene Lösungen zu entwickeln und Ihren Themen
      auf den Grund zu gehen.<br>
      Die Grundvoraussetzung hierfür ist, dass die Fähigkeit zu Selbststeuerung nicht eingeschränkt ist.
    </p>

    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Vorgehen</h2>
    <p class="w-full text-start ml-10">
      Gemeinsam formulieren wir Ihre Entwicklungsziele und legen die notwendigen Schritte fest über einen bestimmten Zeitraum.<br>
      <br>
      Wir eruieren gemeinsam bestehende Verhaltensmuster, machen diese bewusst und reflektieren sie.
  
      Ich unterstütze Sie in Ihrem individuellen Entwicklungsprozess und beim Erkennen Ihrer Stärken und Ressourcen.
      Ebenso assistiere ich Ihnen beim Entwickeln neuer Wahrnehmungsweisen und Handlungsmöglichkeiten.<br>
      <br>
      Wenn der geplante Zeitpunkt da ist, überprüfen wir gemeinsam, ob Ihr Ziel erreicht ist oder ob weitere Schritte notwendig sind.<br>
    </p>

    <TextGenerateEffect 
      segments={[
        { 
          text: "«Die reinste Form des Wahnsinns ist es, alles beim Alten zu belassen und zu hoffen, dass sich etwas ändert.»",
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

