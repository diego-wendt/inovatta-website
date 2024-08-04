export const Hero = () => {
  return (
    <header className="h-screen bg-heroSM bg-cover lg:bg-fixed bg-bottom bg-no-repeat bg-origin-padding brightness-100 saturate-200 sm:bg-bottom md:h-[700px] md:bg-top">
      <div className="flex h-full flex-col justify-between bg-black/50">
        <div className="flex h-full flex-col justify-end pb-6 sm:flex-row sm:justify-center sm:pb-0">
          <p className="place-content-center pb-[50px] text-center font-roboto text-2xl font-semibold text-neutral-100 sm:w-1/2 sm:pb-0 sm:pl-16 sm:text-4xl">
            Experiência, dedicação e resultados. Descubra por que inovação faz
            parte do nosso nome.
          </p>
          <div className="place-content-center pb-6 text-center sm:w-1/2">
            <button className="rounded-3xl border-2 border-black bg-primary/80 p-5 text-2xl font-semibold text-neutral-100 hover:bg-primary/60">
              <a href="#empresa">
                <p>SAIBA MAIS SOBRE NÓS</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
