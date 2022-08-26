import { Curiosidades } from "./CuriosityStyle";
import Dan from "../../assets/images/images-curiosity/Dan.jpeg";
import Justin from "../../assets/images/images-curiosity/Justin.jpeg";
import Curiosidade1 from "../../assets/images/images-curiosity/Curiosidade1.webp";
import Curiosidade2 from "../../assets/images/images-curiosity/Curiosidade2.webp";
import Curiosidade3 from "../../assets/images/images-curiosity/Curiosidade3.webp";
import Curiosidade4 from "../../assets/images/images-curiosity/Curiosidade4.webp";
const Curiosity = () => {
  return (
    <div>
      <Curiosidades>
        <div>
          <h1 className="flex justify-center mt-12 text-4xl font-mono">
            Coisas que o Rick sabe, mas você não.
          </h1>
          <hr className="mt-10 m-auto" />
        </div>

        <div className="flex justify-center mt-8 text-2xl font-mono font-semibold">
          Criadores
        </div>

        <div className="flex justify-center m-5">
          <div>
            <img
              className="flex flex-row flex-wrap justify-center mx-8 rounded-lg"
              src={Dan}
              alt="criador do Rick and Morty"
            />
            <h1 className="flex justify-center pt-3 text-xl">Justin Roiland</h1>
          </div>

          <div>
            <img
              className="flex flex-row flex-wrap justify-center mx-8 rounded-lg"
              src={Justin}
              alt="criador do Rick and Morty"
            />
            <h1 className="flex justify-center pt-3 text-xl">Dan Harmon</h1>
          </div>
        </div>

        <div>
          <div className="rounded-lg box-border h-150 w-150 p-4 border-2 ">
            <h1 className="flex mx-8 mt-8 text-xl">
              <strong>
                1. Originalmente, Rick e Morty eram paródias de Doc Brown e
                Marty McFly
              </strong>
            </h1>
            <div className="flex flex-row mx-8 mt-8">
              <img className="imagem-curiosidade" src={Curiosidade1} alt="" />
              <div className="p-10">
                <p>
                  Uma paródia animada ainda mais doentia, dessa vez de De Volta
                  para o Futuro, chamada “The Real Animated Adventures Of Doc
                  and Mharti“, que estrelava Doc Smith e o garoto Marthi
                  McDonalds, com Roiland fazendo a voz dos dois personagens,
                  assim como faz em Rick e Morty.
                </p>
                <p className="pt-5">
                  E foi justamente esse conceito doentio e perturbador que Dan
                  Harmon decidiu que valia a pena retrabalhar, quando chamou
                  Roiland para trabalhar com ele em uma nova série no Adult
                  Swim.
                </p>
              </div>
            </div>
          </div>

          <br />

          <div className="rounded-lg box-border h-150 w-150 p-4 border-2 ">
            <h1 className="flex mx-8 mt-8 text-xl">
              <strong>2. Os Simpsons</strong>
            </h1>
            <div className="flex flex-row mx-8 mt-8">
              <img className="imagem-curiosidade" src={Curiosidade2} alt="" />
              <div className="p-10">
                <p>
                  E por falar em Os Simpsons, o desenho foi pioneiro, abrindo
                  caminho para séries como Family Guy e, claro, Rick e Morty.
                  Portanto, ninguém estranhou quando Matt Groening e Al Jean
                  pediram a Dan Harmon e Justin Roiland para fazer um crossover
                  de Rick e Morty com os Simpsons na forma da clássica cena de
                  abertura da família correndo pro sofá.
                </p>
                <p className="pt-5">
                  No crossover, Morty acaba matando a amada família amarela sem
                  querer, e cabe a Rick consertar o problema. Ele instrui Morty
                  a como clonar a família, mas como havia limpado os tubos de
                  DNA com sua própria saliva, os Simpsons que surgem são… bem,
                  bizarras amálgamas de Rick Sanchez.
                </p>
              </div>
            </div>
          </div>

          <br />

          <div className="rounded-lg box-border h-150 w-150 p-4 border-2 ">
            <h1 className="flex mx-8 mt-8 text-xl">
              <strong>3. O episódio piloto foi escrito em 6 horas</strong>
            </h1>
            <div className="flex flex-row mx-8 mt-8">
              <img className="imagem-curiosidade" src={Curiosidade3} alt="" />
              <div className="p-10">
                <p>
                  Os cronogramas seriam apertados assim que a produção do
                  programa aumentasse, então era importante começar a trabalhar
                  em Rick e Morty o mais rápido possível. Os dois estavam
                  sentados no chão pensando no que fazer, quando chegaram à
                  conclusão que só havia uma saída: escrever o episódio piloto
                  ali mesmo, naquele momento, sem pausas. E eles fizeram isso em
                  apenas seis horas.
                </p>
              </div>
            </div>
          </div>

          <br />

          <div className="rounded-lg box-border h-150 w-150 p-4 border-2 ">
            <h1 className="flex mx-8 mt-8 text-xl">
              <strong>4. O curioso caso do Molho Szechuan</strong>
            </h1>
            <div className="flex flex-row mx-8 mt-8">
              <img className="imagem-curiosidade" src={Curiosidade4} alt="" />
              <div className="p-10">
                <p>
                  Você sabe que um programa é culturalmente influente e
                  relevante quando, sozinho, persuade uma grande rede de
                  fast-food a lançar um item alimentar graças a uma única
                  referência. Acontece que o Molho Szechuan do McDonald’s foi
                  trazido de volta graças ao pedido coletivo dos fãs de Rick e
                  Morty. Como o próprio Rick explica, esse molho doce e picante
                  de McNugget foi vendido por um tempo limitado para promover o
                  lançamento de Mulan da Disney em 1998.
                </p>
                <p className="pt-5">
                  Para surpresa de muitos, o McDonald’s atendeu aos pedidos. No
                  entanto, isso durou apenas um dia, e a demanda inicialmente
                  foi tão alta que até mesmo levando cambistas ficavam na fila
                  por horas para vendê-lo por centenas de dólares no eBay!
                  Felizmente, ele foi relançado em quantidades muito maiores
                  depois. Esse é o poder de Rick e Morty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Curiosidades>
    </div>
  );
};

export default Curiosity;
