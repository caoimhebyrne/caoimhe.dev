import { NowPlaying } from "@/components/now-playing/NowPlaying";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-lg text-primary md:text-xl">
          ~ hi, i'm caoimhe! <span className="text-secondary">(she/her)</span>
        </h1>

        <p>
          welcome to my website! i'm a software developer from ireland with
          experience in languages like java, kotlin, and typescript.
        </p>

        <p>
          at the moment, i'm a member of the infrastructure team at{" "}
          <a
            rel="noreferrer"
            target="_blank"
            className="border-background border-b text-blue-500 transition-all hover:border-blue-500"
            href="https://essential.gg"
          >
            essential
          </a>
          , where we're building a mod for minecraft that enhances the vanilla
          gameplay experience.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-lg text-secondary md:text-xl">
          ~ currently listening to
        </h1>

        <NowPlaying />
      </section>
    </section>
  );
}
