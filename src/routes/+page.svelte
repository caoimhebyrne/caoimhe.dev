<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import InlineLink from "$lib/components/typography/InlineLink.svelte";
  import Title from "$lib/components/typography/Title.svelte";
</script>

<head>
  <title>Caoimhe Byrne</title>
  <meta property="og:title" content="Caoimhe Byrne" />
  <meta property="og:description" content="I'm a 17 year-old software developer from Ireland." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://caoimhe.dev/favicon.webp" />
</head>

<main class="flex flex-col gap-4">
  <section class="flex flex-col gap-2">
    <Title>Hi, I'm Caoimhe 👋</Title>

    <h2 class="text-lg text-neutral-700 dark:text-neutral-300">
      I'm a software developer and open-source contributor. I currently work at
      <InlineLink href="https://essential.gg" external>Essential</InlineLink>
      and code in Java, Kotlin, and TypeScript.
    </h2>
  </section>

  <section class="grid gap-4 md:grid-flow-col md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      name="Essential"
      description="Essential is a quality of life mod that boosts Minecraft Java to the next level."
      logo="https://static.essential.gg/icon/96x96.png"
      href="https://essential.gg"
      tags={["Developer", "Java", "Kotlin"]}
    />

    <ProjectCard
      name="KDiscordIPC"
      description="A simple, yet powerful library for interacting with Discord through IPC."
      logo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      href="https://github.com/caoimhebyrne/KDiscordIPC"
      tags={["Created by me", "Kotlin", "Coroutines"]}
    />

    <ProjectCard
      name="SerenityOS"
      description="An open source graphical Unix-like operating system written in C++."
      logo="https://raw.githubusercontent.com/SerenityOS/serenity/master/Base/www/ladyball.png"
      href="https://github.com/SerenityOS/serenity"
      tags={["60+ commits", "C++"]}
    />
  </section>
</main>
