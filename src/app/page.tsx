import CopyEmailButton from "@/components/CopyEmailButton";
import Link from "@/components/Link";
import NowPlaying from "@/components/NowPlaying";
import { Essential, GitHub, X } from "@/components/icons";

export default function Home() {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div>
                    <h1>
                        Hi, I'm Caoimhe <span className="hand-wave">👋</span>
                    </h1>
                    <h2>Java & Kotlin developer from Ireland</h2>
                </div>

                <div>
                    <p>
                        I'm a{" "}
                        <span className="font-medium text-neutral-950 dark:text-neutral-100">
                            passionate software developer
                        </span>{" "}
                        with ~3 years of professional experience in Java &
                        Kotlin.
                    </p>

                    <p>
                        Currently, I'm working at{" "}
                        <Link
                            style="essential"
                            className="ml-0.5 hover:px-2"
                            href="https://essential.gg/"
                        >
                            <Essential className="h-2.5" />
                        </Link>
                        , where we are building a quality-of-life mod that
                        boosts Minecraft: Java Edition to the next level.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <CopyEmailButton />

                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            className="-ml-1 p-1 transition-all active:scale-90 hover:text-blue-500"
                            href="https://github.com/caoimhebyrne"
                        >
                            <GitHub className="size-5" />
                        </a>

                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            className="p-1 transition-all active:scale-90 hover:text-blue-500"
                            href="https://x.com/caoimhedev_"
                        >
                            <X className="size-[18px]" />
                        </a>
                    </div>

                    <NowPlaying />
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <div>
                    <h3>Experience</h3>

                    <p>
                        Over the last couple of years, I've worked on numerous
                        projects. Some of which were contract work, but most are
                        open-source/personal projects.
                    </p>
                </div>

                <div className="border-neutral-500 border-l-2 pl-4">
                    <h4>Essential (2022 → now)</h4>

                    <p>
                        Essential is a quality-of-life Minecraft Mod, which
                        includes features like character customization,
                        messaging, and world-sharing. I spend most of my time
                        working on the mod itself, where we primarily use Java &
                        Kotlin.
                    </p>
                </div>

                <div className="border-neutral-500 border-l-2 pl-4">
                    <h4>OPLegends (2021 → 2022)</h4>

                    <p>
                        OPLegends is a Minecraft Prison server. During my time
                        there, I spent some time working on internal tools and
                        websites in TypeScript & React. I also spent some time
                        working on the server code itself in Kotlin.
                    </p>
                </div>

                <div className="border-neutral-500 border-l-2 pl-4">
                    <h4>iOS Tweak Development (2019 → 2021)</h4>

                    <p>
                        During my time as an iOS Runtime Modificaition ("Tweak")
                        developer, I had numerous projects which were very
                        successful. One of these projects, "dotto+", reached{" "}
                        <span className="font-medium text-neutral-950 dark:text-neutral-100">
                            200,000+ lifetime downloads
                        </span>
                        . These were projects written in Objective-C and a
                        pre-precessor called Logos.
                    </p>
                </div>

                <div>
                    <p className="mb-2">
                        Outside of these projects, I work on many personal
                        projects in a wide variety of languages, and try my best
                        to contribute to open-source software as much as
                        possible.
                    </p>

                    <Link style="black" href="https://github.com/caoimhebyrne">
                        <GitHub className="h-4 text-inherit" /> Visit my GitHub
                        Profile
                    </Link>
                </div>
            </section>
        </>
    );
}
