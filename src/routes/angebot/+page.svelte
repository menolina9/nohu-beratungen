<script>
  import BackgroundBeams from "$lib/components/BackgroundBeams.svelte";
    import TextGenerateEffect from "$lib/components/TextGenerateEffect.svelte";
</script>

<svelte:head>
	<title>Angebot | Nora Hunziker</title>
	<meta name="description" content="Ich biete Einzelberatung an für Menschen, die immer bei ähnlichen Problemen anstehen, in einer schwierigen Situation stecken oder sich besser kennenlernen und weiterentwickeln möchten." />
	<meta property="og:description" content="Ich biete Einzelberatung an für Menschen, die immer bei ähnlichen Problemen anstehen, in einer schwierigen Situation stecken oder sich besser kennenlernen und weiterentwickeln möchten." />
  <link rel="canonical" href="https://nora-hunziker.ch/angebot" />
  <meta property="og:title" content="Angebot - Nora Hunziker" />
  <meta property="og:type" content="website" />
	<meta property="og:image" content="https://nora-hunziker.ch/favicon.png" />
</svelte:head>

<BackgroundBeams></BackgroundBeams>

<center>
  <section class="flex flex-col justify-center items-center gap-8 sm:w-7/12 w-9/12 transition-all duration-500">
    <h1 class="text-3xl sm:text-4xl xl:text-7xl text-center mt-32 mb-16">Mein Angebot</h1>

    <p class="w-full text-start ml-10">
      Wir begegnen im Leben immer wieder Situationen, in denen wir mit unseren gewohnten Strategien nicht weiterkommen, oder in denen wir nicht wissen, wie wir mit ihnen umgehen sollen.<br><br>
      Einige Beispiele:<br>
    
      - Immer gleiche Auseinandersetzungen mit Partner:innen, Kolleg:innen oder Angehörigen<br>
      - Konfliktreiche und herausfordernde Situationen (am Arbeitsplatz, in der Familie, der Partnerschaft oder im Freundeskreis)<br>
      - Sehnsucht etwas Neues anzugehen und sich selbst im Weg stehen
      <br><br>

      Ich biete Einzelberatung an für Menschen, die immer bei ähnlichen Problemen anstehen, in einer schwierigen Situation stecken oder sich weiterentwickeln und besser kennenlernen möchten.
    </p>

    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Allgemein</h2>
    <p class="w-full text-start ml-10">
      Psychologische Beratung ist keine Therapie.<br>
      Auch als Beraterin gebe ich Ihnen keine vorgefertigten Lösungen, sondern unterstütze Sie dabei eigene Lösungen zu entwickeln und Ihren Themen
      auf den Grund zu gehen.<br>
      Die Grundvoraussetzung hierfür ist, dass die Fähigkeit zu Selbststeuerung nicht eingeschränkt ist.<br>

    </p>
  
    <h2 class="w-full text-start text-xl sm:text-2xl font-semibold mt-4">Vorgehen</h2>
    <p class="w-full text-start ml-10">
      Gemeinsam formulieren wir Ihre Entwicklungsziele und legen die notwendigen Schritte fest über einen bestimmten Zeitraum.<br>
      <br>
      Wir eruieren gemeinsam bestehende Verhaltensmuster, machen diese bewusst und reflektieren sie.<br>
    
      Ich unterstütze Sie in Ihrem individuellen Entwicklungsprozess und beim Erkennen Ihrer Stärken und Ressourcen.<br>
      Ebenso assistiere ich Ihnen beim Entwickeln neuer Wahrnehmungsweisen und Handlungsmöglichkeiten.<br>
      <br>
      Diese erforschen wir praktisch mit mir als wertschätzendes und spiegelndes Gegenüber.<br><br>

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
    
    

