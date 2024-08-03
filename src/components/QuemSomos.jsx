export const QuemSomos = () => {
  return (
    <div
      id="empresa"
      className="flex min-h-lvh flex-col bg-black sm:h-[70vw] md:h-[60vw] lg:h-[50vw]"
    >
      <div className="bg-primary">
        <p className="px-5 pt-6 text-center text-xl font-semibold text-neutral-200">
         SOBRE NÓS
        </p>
      </div>
      <div className="mx-auto h-full lg:max-w-screen-lg lg:px-0 xl:max-w-screen-lg">
        <div className="flex h-full bg-[url('https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg?auto=compress&cs=tinysrgb&w=1000&h=550&dpr=1')] bg-cover bg-no-repeat sm:bg-neutral-800 sm:bg-none">
          <div className="flex h-full flex-col justify-evenly bg-neutral-900/70 pl-4 sm:basis-3/4 sm:bg-neutral-800">
            <div className="flex">
              <div className="w-2 bg-neutral-200"></div>
              <div className="w-8 bg-primary sm:w-4"></div>
              <p className="px-10 py-5 text-right text-neutral-200">
                Entendemos que a contabilidade vai além dos números; é uma peça
                fundamental para o sucesso e crescimento do seu negócio. Com uma
                equipe de profissionais altamente qualificados e uma abordagem
                personalizada, oferecemos soluções contábeis completas para
                atender às suas necessidades específicas. Seja você uma pequena
                empresa ou uma grande corporação, estamos aqui para garantir que
                suas finanças estejam sempre em ordem e suas obrigações fiscais
                sejam cumpridas com eficiência.
              </p>
            </div>
            <div className="h-1 w-3/4 self-center bg-primary pl-10"></div>
            <div className="flex">
              <div className="w-2 bg-neutral-200"></div>
              <div className="w-8 bg-primary sm:w-4"></div>
              <p className="px-10 py-5 text-right text-neutral-200">
                Com anos de experiência no mercado contábil, nos destacamos pela
                excelência em serviços e pela dedicação ao cliente. Nosso
                compromisso é oferecer mais do que simples relatórios
                financeiros; buscamos entender a fundo o seu negócio para
                fornecer orientações precisas e estratégias eficazes. Nossa
                equipe é formada por contadores experientes e apaixonados pelo
                que fazem, sempre prontos para enfrentar novos desafios e
                garantir que você esteja sempre à frente.
              </p>
            </div>
          </div>
          <div className="hidden bg-neutral-800 sm:inline-flex sm:basis-1/4">
            <img
              className="rounded-br-full rounded-tl-full object-cover"
              src="https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
