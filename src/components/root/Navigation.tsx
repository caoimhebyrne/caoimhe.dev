export default function Navigation() {
  return (
    <section className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <img
          src="profile.png"
          className="size-8 rounded-full"
          // biome-ignore lint/a11y/noRedundantAlt: <explanation>
          alt="A hand-drawn image of a girl with brown hair"
        />

        <p className="font-bold">Caoimhe Byrne</p>
      </div>
    </section>
  );
}
