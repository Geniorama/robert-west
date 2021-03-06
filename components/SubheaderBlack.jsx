import styles from "../styles/SubheaderBlack.module.css";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function SubheaderBlack({
  title,
  subtitle,
  imagen,
  desc,
  scroll,
  button,
}) {
  let modeScroll = "";
  if (scroll) {
    modeScroll = styles.rwSubheaderwScroll;
  }

  let modeButton = "";
  if (button) {
    modeButton = styles.rwSubheaderwButton;
  }

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className={styles.rwSubheaderb}>
      <div className={styles.rwSubheaderb__image}>
        <Image
          src={imagen}
          layout="fill"
          objectFit="cover"
          loading="eager"
        ></Image>
      </div>
      <div
        className={`container ${styles.rwSubheaderb__content}`}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className={`col-6 col-md-6 ${styles.rwSubheaderb__info}`}>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
          <div className={`${modeScroll} ${styles.rwSubheaderb__text}`}>
            <p>
              Las tierras bajas del Pacifico colombiano es un compendio, más
              bien sobrio, de la información relevante sobre el paisaje material
              y visible, interpretado con base en observación de campo e
              investigación en bibliotecas. El autor no sólo se refiere al
              paisaje natural y cultural actual, sino también a cómo éste se ha
              formado -el lector está siempre consciente de que esta
              aproximación genética, esta perspectiva histórica, es lo que le da
              gran solidez a su análisis.</p>
            <p>
              James Parsons, 1958 </p>
            <p>
              Es difícil imaginarse a Robert West hace casi medio siglo, armado con cámaras
              y cuadernos, recorriendo los ríos del Pacifico en canoa o hundido
              entre el barro de los caminos que cruzan la selva. Con sus 87
              años, esos trotes son parte del pasado. Pero el profesor West
              todavía recuerda bien sus viajes por esta región, a pesar de no
              haber regresado en más de cuatro décadas. Lo conocí en Berkeley en
              septiembre de 1997 en una ceremonia para honrar la memoria de su
              compañero de universidad y amigo, el profesor James Parsons,
              conocido geógrafo norteamericano, también investigador en
              Colombia, quien había fallecido algunos meses atrás. West fue
              amable pero distante ante mis palabras de admiración para el autor
              del que considero el mejor libro que se ha escrito sobre el
              Pacifico colombiano. Mostró satisfacción al enterarse del interés
              que esta región ha suscitado en investigadores de diferentes
              disciplinas en las últimas dos décadas. A esa corta charla
              siguieron un par de cartas y luego un largo silencio.</p>
            <p>
              Mientras tanto, tomaba forma la idea de esta traducción. Al buscar la ayuda
              de Mauricio Pardo, del Instituto Colombiano de Antropología e
              Historia, Eduardo Restrepo dio el primer paso para hacer realidad
              nuestro mutuo deseo de publicar el libro en español. EI ICANH
              presentó un proyecto al Banco de la República para la traducción
              del libro y me encargó del trabajo. Una vez terminado me puse en
              contacto con la Universidad de Luisiana en Baton Rouge, donde West
              trabajó por varias décadas, para preguntar sobre el paradero de
              las fotos del libro. &quot;Aquí están,&quot; me respondió William Davidson,
              director del Departamento de Geografía y Antropología, y gran
              amigo de West. Me sugirió que fuera a buscarlas yo misma, ya que
              encontrar las fotos del libro, entre tantas que West tomó durante
              su vida, no era cosa fácil. Allí volví a ver al profesor West,
              gracias a una reunión que el profesor Davidson y su esposa Sharon
              organizaron en su casa. Ante mi evidente entusiasmo me advirtieron
              que, debido a un desafortunado accidente sufrido durante una de
              sus caminatas diarias entre su casa y la universidad, el profesor
              West no se hallaba en el mismo estado en que lo conocí en
              Berkeley. Pero &apos;Bob&apos; West, como lo llaman sus amigos, estaba en
              uno de sus mejores días. Tal vez la sorpresa que le teníamos
              contribuyó a su buen ánimo y a revivir su memoria. En efecto, ese
              mismo día, esculcando los cajones de su oficina, encontré unas
              películas de 16 mm (de unos pocos minutos de duración cada una)
              que aparentemente habían sido tomadas por West durante sus viajes
              por el Pacifico. Decidimos verlas esa tarde en presencia del
              autor.</p>
            <p>
              West no se acordaba de la existencia de las películas y nos
              dijo que era posible que esa fuera la primera vez que se veían.
              Así que mi segunda y última entrevista con Robert West coincidió
              con la première de varios cortos con diversas escenas de la vida
              diaria en el Pacifico, tales como un hombre subiendo un río en una
              canoa a palanca y un grupo trabajando en el techo de una casa. Mi
              favorito fue un baile de currulao al ritmo acelerado de la
              película y sin sonido. Entre película y película el profesor West
              respondió a mis preguntas, trayendo recuerdos que seguramente
              habían estado dormitando por largo tiempo. Ya en una carta de 1997
              me había escrito algo sobre su experiencia en el Pacifico:</p>
            <p>
              ¿Por qué escogí las tierras bajas del Pacifico como área de estudio?
              Mirando hacia atrás unos 40 años, mis motivos no parecen ser muy
              claros. El tema minero suscitó mi interés cuando era estudiante de
              pregrado en la Universidad de California en Los Ángeles. Mi tesis
              doctoral en Berkeley trató sobre la minería de plata durante la
              Colonia en el norte de México (minas de Parral, estado de
              Chihuahua). Después de la publicación de mi tesis, decidí expandir
              mis intereses hacia la minería de oro de aluvión en Colombia. El
              clima cálido y lluvioso de Quibdó, aún más húmedo que el de mi
              nueva residencia en Luisiana, me dejó intrigado. Pronto descubrí
              que en ese entonces se había escrito muy poco sobre esa área, y
              motivado por una generosa beca de la Oficina de Investigaciones
              Navales (Washington, D.C.) decidí hacer un estudio regional de
              todas las tierras bajas, incluyendo partes de Ecuador y Panamá.
              Visité el área durante cuatro períodos de tres meses. Ese ha sido
              el trabajo de campo más difícil de toda mi carrera, incluyó muchos
              ataques de fiebre. Fue una experiencia muy interesante, no me
              arrepiento.</p>
              <p>
              Sumando sus cuatro viajes, Robert West estuvo casi un
              año en el Pacifico recogiendo información para su investigación.
              Aunque la región lo llenó de curiosidad, no parece que haya estado
              especialmente fascinado por sus montes, ríos y pueblos. Cuando le
              pregunté si había algún sitio que le hubiera gustado en especial,
              se quedó pensando y luego me dijo &quot;sinceramente no.&quot; Además de los
              trajines habituales, le dio malaria y también fambresia. Para
              curarse de esta última enfermedad tuvo que ir a Cali a que lo
              tratara un doctor que había vivido en Etiopía. Al hablar de la
              comida en el libro no muestra nostalgia por los &quot;insípidos&quot;
              plátanos verdes o por &quot;la monotonía del maloliente pescado seco
              que el viajero normalmente debe cargar para sus bogas en los
              viajes.&quot; Las cartas de presentación de su gobierno atenuaron un
              poco las dificultades del trabajo, ya que según nos dijo, fueron
              siempre un mágico ábrete sésamo.&quot; Tal vez uno de los aspectos más
              agradables de sus viajes fue la compañía de sus asistentes, guías,
              bogas y cargueros. Hasta hace poco tuvo una foto de dos de ellos
              en su oficina (Anderson, 1998) y esa tarde tuve la impresión de
              que los reconoció en una de las películas. Aparte de aquéllos tuvo
              pocos compañeros de viaje: un estudiante en una de sus visitas, y
              un profesor en otra, ambos de la Universidad de Luisiana. Nunca se
              encontró con investigadores colombianos. En cambio, en uno de sus
              viajes conoció a un grupo de alemanes que estaban haciendo
              estudios de geología. Uno de ellos escribió después a la
              Universidad de Luisiana para preguntar si un tal Robert West, con
              quien se había cruzado en las selvas del Pacifico, había
              regresado.</p>
              <p>
              Robert West nació en Oklahoma, en 1913, en el
              centro-sur de los Estados Unidos, y a la edad de 14 años se mudó
              con su familia para California, en la costa oeste. Tras terminar
              su pregrado en la Universidad de California en Los Ángeles y
              trabajar un año en Wisconsin, fue aceptado en Berkeley en el
              posgrado de geografía, en 1938. Al cabo de tres años, con el
              conflicto de la Segunda Guerra Mundial, viajó a Washington D.C. a
              trabajar en la Oficina de Servicios Estratégicos (que más tarde se
              convirtió en la CIA). Libre de esas obligaciones, en 1945 terminó
              su tesis de doctorado (que fue publicada en 1949), Luego trabajó
              por un par de años en México para el Instituto Smithsonian y en
              1948 aceptó el que sería el trabajo del resto de su vida: profesor
              en el Departamento de Geografía y Antropología de la Universidad
              de Luisiana. Allí conoció a Phyllis Devereaux, bibliotecaria de la
              misma universidad, con quien estuvo casado durante 10 años, hasta
              que ella murió en 1978. Su interés por la minería colonial lo
              llevó de México, donde hizo su tesis, a Colombia. El resultado fue
              el libro Colonial Placer Mining in Colombia (1952). Esta
              investigación le abrió las puertas del Pacifico, que sería el tema
              de su segundo proyecto en este país. Aunque fue fiel a América
              Latina durante el resto de su carrera, Colombia no volvió a
              figurar en sus planes.</p>
              <p>
              Su paso por Berkeley fue decisivo para su
              carrera. Robert West fue uno de los muchos estudiantes de Carl
              Sauer (1889-1975), director del Departamento de Geografía en
              Berkeley durante casi todo el periodo entre 1923, cuando llegó a
              esta universidad, y 1957, cuando se jubiló. Sauer no sólo fue un
              investigador prolífico e interesado en gran variedad de temas,
              sino que a través de la formación de estudiantes tuvo gran impacto
              en el panorama de la geografía en los Estados Unidos. Supervisó 37
              tesis de doctorado, entre ellas la de Robert West, y vale decir
              que ninguna de ellas fue escrita por una mujer. Transmitió a sus
              estudiantes su interés por América Latina e influyó en que dos de
              ellos trabajaran en Colombia. Fue por sugerencia de su maestro que
              James Parsons viajó a la zona cafetera para realizar su tesis de
              doctorado. Gracias a ello escribió el trabajo pionero sobre la
              colonización antioqueña. Considerado por algunos como el mejor o
              más importante geógrafo que han tenido los Estados Unidos, Sauer
              es una figura controvertida (como lo demuestra el hecho de que las
              fotos con su imagen desaparecieran de las paredes del departamento
              del que fue director por tanto tiempo). Aunque Sauer estuvo ante
              todo dedicado a la geografía humana, el medio físico siempre
              estuvo presente en sus estudios. Sauer contribuyó a liberar a la
              geografía humana del determinismo ambiental que prevalecía durante
              sus años de formación, es decir, del énfasis en el estudio de la
              influencia que las características físicas de la tierra tienen
              sobre las personas y las culturas. Su propuesta de hacer de la
              geografía el estudio de &apos;paisajes culturales&apos; fue clave para ese
              cambio de dirección, y es tal vez por lo que más se le recuerda.
              Influenciado por autores alemanes tales como Alfred Hettner, Sauer
              consideraba que la tarea del geógrafo era dar cuenta del paisaje,
              entendido como el resultado de la confluencia de las formas
              naturales y las transformaciones hechas por el hombre.</p>
              <p>
              De esta propuesta vale la pena resaltar tres aspectos: su idea de lo que
              constituye el eje de la geografía, su concepto de cultura y su
              aproximación a la historia. A su manera, Sauer sostuvo una idea de
              larga trayectoria dentro de la geografía -que el estudio de áreas
              concretas o regiones es el corazón de esta disciplina-idea que
              perdió validez a partir de la década de los años 60. Esta idea se
              deriva de la preocupación por dar cuenta del variado aspecto de la
              tierra. Debido a que las diferencias que se presentan en la
              superficie terrestre sólo pueden estudiarse en lugares
              específicos, es decir, en regiones, el concepto de región se
              volvió central. Entendida así la geografía se asemeja a la
              historia, puesto que ninguna de las dos está delimitada por un
              tema: mientras que la historia estudia variaciones de diversa
              índole en el tiempo, la geografía estudia variaciones en el
              espacio. Este énfasis en lugares más que en temas, le permite a la
              geografía el privilegio de combinar el estudio de aspectos tanto
              naturales como sociales. Sin embargo, si esos aspectos se estudian
              de manera separada, la geografía corre el riesgo de disolverse
              entre las ciencias humanas y las ciencias naturales. Por eso,
              durante décadas, muchos reconocieron que el estudio de la
              interacción entre la naturaleza y &apos;el hombre&apos; era tan central para
              la geografía como el estudio de regiones. Pero ha habido mucho
              menos consenso sobre la manera específica cómo ello debe lograrse.</p>
              <p>
              Sauer propuso el estudio de paisajes culturales (que a veces
              también denominó &apos;morfología del paisaje&apos; o &apos;áreas culturales &apos;).
              Tal vez la clave para entender esta propuesta está en el concepto
              de cultura. Según Sauer, cada grupo humano o cultura tiene un modo
              particular de relacionarse con el ambiente que lo rodea, evidente
              en la manera en que le da forma humana al paisaje. Los aspectos de
              la cultura en que Sauer estaba interesado, entonces, eran aquellos
              que podían observarse, es decir, los aspectos visuales, tal como
              lo sugiere la palabra paisaje. El énfasis estaba puesto en la
              transformación de la naturaleza lograda por diferentes grupos
              humanos. Así, el geógrafo debería estar versado en la lectura
              tanto de las formas del relieve, los vaivenes del clima y la
              variedad de formas de vida, como de las huellas dejadas por los
              seres humanos-huellas tales como utensilios, casas, patrones de
              asentamiento y cultivos. En ese sentido, este tipo de geografía
              humana comparte con la antropología el interés por la cultura
              material. La idea de cultura utilizada por Sauer ofrece un
              criterio para demarcar las regiones que los geógrafos estudian: si
              cada cultura representa una manera de transformar la faz de la
              tierra, entonces las regiones pueden delimitarse en términos
              culturales y bien pueden denominarse áreas culturales.</p>
              <p>
              Hay un último elemento de la propuesta de Sauer que quisiera recalcar y
              es su carácter histórico. Además de enfatizar la participación
              humana en la creación de paisajes a través del concepto de
              cultura, Sauer consideraba igualmente importante entender el
              proceso de creación de esos paisajes. La tarea del geógrafo
              entonces, no sólo coincidía en ciertos aspectos con la del
              antropólogo, sino también con la del historiador, pero sólo en
              cuanto la historia sirve para explicar el proceso mediante el cual
              se formaron los diferentes elementos de la cultura material.
              Dentro de esta perspectiva hay un gran énfasis puesto en los
              orígenes y difusión de esos elementos, como veremos más adelante
              en el caso del libro que nos ocupa.</p> 
              <p>
              En una de las ocasiones en que
              presentó su enfoque, Sauer lo definió en siguientes términos: </p>
              <p>
              [El geógrafo completo) siempre debe estar aprendiendo sobre las
              diferentes técnicas que los hombres emplean y sobre los objetos,
              vivos e inanimados-el ambiente total-sobre los que esas técnicas
              se utilizan. Se interesa en descubrir patrones de vida
              relacionados y diferentes, tal como se encuentran alrededor del
              mundo-áreas culturales. Estos patrones tienen interés y
              significado cuando aprendemos cómo se formaron. El geógrafo, por
              lo tanto, se dedica a mapear la distribución sobre la tierra de
              las artes y artefactos humanos, a aprender de dónde vienen y cómo
              se distribuyeron, cuál es su contexto en ambientes culturales y
              físicos (citado por Kenzer, 1987:5).</p>
              <p>
              Aunque esta breve exposición no da cuenta de la variedad de 
              intereses de Carl Sauer, ni de los diferentes campos en que se desarrolló 
              su influencia, sirve para entender el tipo de geografía que este libro 
              representa. Pero antes de dejar al maestro para pasar al discípulo, veamos las
              limitaciones de esta propuesta. De maneras muy diferentes, la
              principal crítica que se ha hecho al tipo de geografía practicada
              por Sauer y sus estudiantes ha estado concentrada en su limitada
              visión del mundo social. El énfasis puesto en los rasgos
              materiales de la cultura deja de lado el rico y complejo mundo de
              las relaciones sociales. Este desdén por el conflicto social se
              refleja en la falta de interés en las herramientas ofrecidas por
              la mayoría de las ciencias sociales, como es el caso de la
              sociología, y hace muy difícil la interacción de la geografía
              humana con otras disciplinas. Esta importante crítica, así como
              otras (tales como la falta de rigor científico, con la que poco
              concuerdo) tomaron fuerza en los años sesenta y han llevado a la
              geografía humana a tomar nuevas e interesantes direcciones, que no
              viene al caso tratar aquí. Lo importante es señalar que este libro
              representa una particular aproximación a la geografía, que hoy
              poco se practica, y que carga con sus virtudes y deficiencias.</p>
              <p>
              Las tierras bajas del Pacifico colombiano no es solamente un excelente
              estudio de una región relativamente poco estudiada de Colombia,
              sino que es también un muy buen ejemplo del tipo de geografía que
              caracterizó a la llamada escuela de Berkeley. La definición del
              objeto de estudio del libro representa la primera pista: &quot;las
              tierras bajas del Pacifico colombiano y áreas adyacentes son
              definidas como un área cultural. Si el área de estudio &quot;tiene
              alguna unidad física,&quot; nos dice West, &quot;ésta está dada por su clima
              húmedo y cálido, y por el denso bosque tropical que constituye la
              cobertura vegetal.&quot; Pero estos rasgos se extienden hacia el norte
              y hacia el sur del área considerada en el libro. &quot;Los límites del
              área de estudio, por lo tanto, están determinados más por aspectos
              culturales que por aspectos físicos. En términos culturales, el
              área se define principalmente por el predominio de la población
              negra; por una forma común de vida basada en la agricultura de
              subsistencia, la pesca y la minería primitiva; y por su desarrollo
              histórico común&quot;.</p> 
              <p>
              El libro está dividido en dos partes: el medio
              físico y el medio cultural. La primera es una exposición sobre la
              geomorfología, el clima y la vegetación de la región; y la
              segunda, un estudio sobre la población y la economía. Lo primero
              que salta a la vista es la gran variedad de temas, posible gracias
              a que el libro está centrado en un lugar más que en un aspecto
              particular de la realidad. Tal variedad implica que el autor debe
              tener una formación igualmente amplia, que le permita abordar
              temas tan disímiles como los manglares, las técnicas de minería de
              aluvión y la historia del poblamiento. Aunque West, como Sauer, es
              más que todo un geógrafo humano, en la primera parte demuestra
              tener una formación sólida en meteorología, geomorfología y
              botánica. Vale la pena mencionar aquí que antes de escribir de
              este libro West publicó dos artículos sobre los manglares del
              Pacifico colombiano, tal vez los primeros escritos sobre el tema,
              a juzgar por la falta de referencias de trabajos previos (West,
              1954 y 1956). Esa capacidad de estudiar los más variados aspectos
              del paisaje es una de las condiciones que West considera claves en
              un buen geógrafo:</p>
              <p>
              Me considero lo que se llama un generalista
              [...] Sólo soy un especialista en términos de mi énfasis en
              América Latina. (...) Es importante que los geógrafos mantengan
              una visión amplia y que allí ubiquen la especialidad que tengan
              dentro de la disciplina (Anderson, 1998).</p>
              <p>
              Los variados temas estudiados por West tienen un común denominador:
              tratan de describir y entender los rasgos visuales del paisaje. En la
              segunda parte, dedicada al medio cultural, se aprecia más
              claramente su énfasis en los aspectos visuales, debido a que se
              refiere al mundo humano. El propio West lo deja claro al principio
              del libro:</p>
              <p>
              Como este es un informe sobre la geografía del área, la
              sección del medio cultural trata principalmente sobre los
              elementos materiales que pueden ser observados en el campo:
              características raciales, patrones de poblamiento, tipos de casas,
              recursos y técnicas para producir comida, ropa, medios de
              transporte, etc. Los elementos no materiales, tales como la
              organización familiar y comunitaria, la religión y el gobierno,
              han sido en gran medida dejados de lado. </p>
              <p>
              Al estudiar los grupos humanos West los define por sus aspectos 
              físicos, es decir, en términos raciales. Así, se refiere a indios, 
              negros y blancos. El supuesto es que estos grupos raciales están 
              caracterizados por un mundo cultural propio, dado por una historia 
              común y unos rasgos materiales comunes. El estudio está centrado en los 
              grupos negros, que constituyen la gran mayoría de la población de la 
              región. West describe los diferentes tipos de casas y patrones de poblamiento,
              así como la historia de ese poblamiento. En cuanto a la economía
              encuentra un predominio de actividades de subsistencia
              (agricultura, pesca y cacería), pero también encuentra diversas
              formas en que la gente de la zona está vinculada al mercado
              (cultivo de arroz y plátano, pesca y explotación de recursos
              forestales). West recoge información relevante sobre cada uno de
              estos aspectos y la presenta de manera clara. Por ejemplo: qué
              terrenos se utilizan para los cultivos, qué productos se siembran,
              con qué métodos y con qué herramientas, etc. West explica que el
              origen de la mayoría de estos rasgos culturales es indígena,
              aunque hay también algunos elementos de la cultura española y unas
              pocas huellas africanas. Es de notarse que el análisis histórico
              que permea este libro pretende encontrar los orígenes de los
              aspectos materiales de la cultura y sus vías de difusión, en otras
              palabras, reconstruir la historia del paisaje cultural. Pero no
              vale la pena entrar aquí en mayor detalle, pues para eso está el
              propio libro. </p>
              <p>
              Como se mencionó anteriormente, esta investigación
              llevó a West a recorrer gran parte de la región, que se extiende
              por casi mil kilómetros desde Panamá hasta Ecuador. A ello dedicó
              las vacaciones de verano durante cuatro años consecutivos
              (1951-1954). El tipo de geografía practicada por West requería
              trabajo de campo permanente: de encontrar placer en recorrer
              diferentes lugares, y desarrollar agudeza para ver y entender los
              paisajes que se encuentran. Sus capacidades en el campo se hacen
              evidentes en las referencias escritas y visuales de los sitios que
              visitó, presentes a lo largo de todo el libro. Su dedicación y
              amor por este método lo caracterizaron durante toda su vida: en
              1980 Davidson y Parsons calcularon que desde 1942 no hubo un sólo
              año en que West no viajara a América Latina (o a los archivos de
              España), lo que representa un total de 12 años de trabajo de campo
              acumulado. Pero el trabajo de campo no ha sido su única
              especialidad. West es también un gran investigador de archivo. Su
              curiosidad por los orígenes de lo que vio en las tierras bajas del
              Pacifico lo llevó a los archivos de Bogotá, Popayán, Quito y
              Sevilla. Esta inusual combinación es resultado de una cierta
              aproximación a la geografía que pone igual énfasis en la lectura
              del paisaje y en la indagación por su historia. </p>
              <p>
              El resultado de estos esfuerzos es un libro que desarrolla rigurosamente 
              lo que se propone. Es sencillo y directo, y en ello radica su elegancia.
              Tiene gran cantidad de notas. en las que el autor demuestra su
              exhaustiva búsqueda de fuentes y comparaciones. La claridad del
              libro se deriva en parte de haber puesto toda esta información de
              manera separada, dejando en el cuerpo del texto sólo lo
              fundamental. Además de tener una prosa clara y concisa, la belleza
              del libro radica en los 26 mapas que ilustran espacialmente los
              hallazgos de West, y también en las fotografías. Los mapas fueron
              todos hechos por el mismo West, y con ellos honra una de las más
              antiguas tradiciones asociadas con la geografía. Aunque el libro
              tiene 50 páginas de fotografías, ellas son sólo una muestra de
              todas las fotos que tomó durante sus viajes en el Pacifico. El
              departamento de Geografía de la Universidad de Luisiana tiene
              algunas de ellas catalogadas, así como muchas otras tomadas en
              otras partes de América Latina, principalmente en México. A pesar
              de que el texto del libro y las ayudas visuales forman una unidad
              coherente, este tipo de enfoque tiene un costo estilístico: el
              libro está compartimentado en secciones y subsecciones, y no tiene
              un hilo temático que una al texto en una sola narración. </p>
              <p>
              El libro fue reseñado en varias revistas de geografía en Estados Unidos y
              otros países, y también en Colombia por Virginia Gutiérrez en la
              revista Cromos. La reseña más completa es, tal vez, la que
              escribió su amigo James Parsons. En ella se adelanta a las
              posibles críticas que pudiera recibir el libro: </p>
              <p>
              Los científicos sociales pueden objetar que West haya ignorado las relaciones 
              de parentesco [..), la religión, la organización comunitaria y el
              gobierno; y los economistas y planificadores tal vez queden
              perplejos al encontrar que no hay ni una referencia al &apos;desarrollo
              económico&apos; o a áreas atrasadas en las 254 sustanciosas páginas de
              texto y notas. Sin embargo, ello sólo refleja que el autor es un
              geógrafo de los geógrafos, un observador de campo de primera
              categoría con una curiosidad objetiva y enfocada sobre la faz de
              la tierra y la manera en que el Hombre la ha alterado y se ha
              adaptado a sus condiciones. </p>
              <p>
              Consciente-como Parsons-del tipo de
              geografía que quería y que sabia, West continuó su carrera después
              de la publicación de este libro. Aunque al parecer no regresó a
              Colombia después de haber participado en el Simposio de Tierras
              Húmedas Tropicales, realizado en Quibdó en 1958, siguió su carrera
              en América Latina, especialmente en México. El resultado es una
              extensa bibliografía, cuyas obras principales se citan al final de
              esta introducción. </p>
              <p>
              La traducción del libro resultó ser una labor
              más dispendiosa de lo que pensaba. No siendo muy versada en
              geografía física, especialmente en geomorfología, muchos de los
              términos resultaron difíciles de rastrear. Sin embargo, con la
              ayuda de varios diccionarios, libros especializados y amigos,
              trate de superar las limitaciones. En este sentido, espero la
              comprensión de los expertos. Por otra parte, vale resaltar que los
              lectores encontrarán nociones ya caducas o clasificaciones
              científicas que han sido revisadas en los últimos 40 años, pero
              que eran consideradas apropiadas en 1957. La información sobre el
              estado y el enfoque del conocimiento en la época en que el libro
              fue escrito es parte de su valor. Así, por ejemplo, Galvis y
              Mojica (1993) en un artículo sobre la geología de la región
              aceptan las unidades geomorfológicas definidas por West, pero
              difieren en ciertos aspectos de su análisis. Los autores explican
              que &quot;La diferenciación de las cuencas del Atrato y el San Juan] se
              debe a un proceso de denostación piroclástica en tiempos
              pleistocénicos, al sur de Quibdó, y no como lo propone West por
              causa de un levantamiento &apos;estructural que él denomina &quot;Anticlinal
              de Istmina... (82). Del mismo modo, algunas de las especies
              vegetales han recibido nuevos nombres científicos. Tal es el caso
              de la palma naidi, identificada por West como Euterpe
              cuatrecasana, pero más comúnmente citada hoy como Euterpe
              oleracea. </p>
              <p>
              Antes de cerrar quiero hacer un par de anotaciones sobre
              algunos términos utilizados. Al referirse a la población negra,
              West a veces usa el término negroide, como es el caso en el
              subtítulo del libro (A Negroid Area of the American Tropics: un
              área negroide de los trópicos americanos), palabra que yo eliminé
              en la traducción. Esta palabra pretende reconocer la mezcla racial
              de la población negra, que a veces lleva sangre indígena o blanca.
              Con el mismo propósito West usa con frecuencia la expresión negro
              and mixed blood, que yo he dejado simplemente como negro. </p>
              <p>
              Cuando comenzamos a discutir la idea de traducir el libro al español y
              publicarlo en Colombia, el profesor West me respondió con las
              palabras que cierran este prólogo. Por fortuna, con la ayuda de
              Nicolás Morales, editor del Instituto Colombiano de Antropología e
              Historia, ha sido posible demostrarle que estaba equivocado.</p>
              <p>
              Cualquier editorial o agencia gubernamental en Colombia hallaría
              muy costosa la publicación de una traducción de esta monografía,
              especialmente a causa de los mapas grandes, que yo considero parte
              esencial del libro. Tal vez deberíamos abandonar la idea de
              producir una traducción. (Robert West, noviembre de 1997).</p>
              <p>
              Claudia Leal</p>
              <p>
              Berkeley, octubre de 2000</p>
              <p>
              Bibliografia </p>
              <p>
              Anderson, Katherine (1998) &quot;Bob West, Geographer,&quot; en Geoscience and Man, Vol.35:
              Latin American Geography, Historical-Geographical Essays,
              1941-1998, by Robert West, Baton Rouge, Louisiana State
              University. </p>
              <p>
              Davidson, William V. y James Parsons (1980) &quot;Robert C.
              West, Geographer,&quot; en Geoscience and Man, Vol.21: Historical
              Geography of Latin America, Papers in honor of Robert West,
              William V. Davidson y James Parsons (Eds.), Baton Rouge, Louisiana
              State University. </p>
              <p>
              Galvis, Jaime y Jairo Mojica (1993) &quot;Geología,&quot;
              en Colombia Pacifico, Bogotá, Fondo FEN y Proyecto Biopacifico.
              Gutiérrez de Pineda, Virginia (1958) &quot;El libro de la semana,&quot; en
              Cromos, No.2123, </p>
              <p>
              Bogotá. </p>
              <p>
              Kenzer, Martin S. (Ed.) (1987) Carl O.
              Sauer, A Tribute, Corvallis, Oregon State University Press.</p>
              <p>
              Leighly, Jonh (1963) &quot;Introduction,&quot; en Land and Life, A Selection
              of Writings of Carl </p>
              <p>
              Ortwin Sauer, John Leighly (Ed.), Berkeley,
              University of California Press. </p>
              <p>
              Parsons, James (1958) &quot;The Pacific
              Lowlands of Colombia, A Negroid Area of the American Tropics, by
              Robert C. West,&quot; in Economic Geography, Vol. 34, No.4. Sauer, Carl
              [1925] (1963) &quot;The Morphology of Landscape, en Land and Life, A
              Selection of Writings of Carl Ortwin Sauer, John Leighly (Ed.),
              Berkeley, University of California Press. </p>
              <p>
              [1941] (1963) &quot;Foreword
              to Historical Geography.&quot; en Land and Life, A Selection of
              Writings of Carl Ortwin Sauer, John Leighly (Ed.). Berkeley,
              University of California Press. </p>
              <p>
              Artículos sobre Colombia y libros
              publicados por Robert C. West (1949) The Mining Community of
              Northern New Spain, The Parral mining district, Iberoamericana No.
              30, Berkeley. (1952) Colonial Placer Mining in Colombia, Louisiana
              State University Studies, Social Science Series No.2, Baton Rouge,
              Louisiana State University Press. Traducido al español por Jorge
              Orlando Melo y publicado en 1972 bajo el titulo La minería de
              aluvión en Colombia durante el período colonial, Bogotá, Imprenta
              Nacional (1954) -The Mangrove Swamp of the Pacific litoral of
              Colombia,&quot; en Coastal Geography Conference, sponsored by the
              Office of Naval Reasearch and the NCR Committee on Geography, Feb.
              18, 1954, Washington, D.C., Office of Naval Research, p.44-50.
              (1956) &quot;Mangrove swamp of the Pacific coast of Colombia,&quot; in
              Annals of the Association of American Geographers, vol.46,
              p.98-21. (1957) The Pacific Lowlands of Colombia, Baton Rouge,
              Louisiana State University Press. (1966) Middle America, Its lands
              and peoples (con John P. Augelli), Englewoods Cliffs,
              Prentice-Hall. (1979) Carl Sauer&apos;s Fieldwork in Latin America, Ann
              Arbor, University Microfilims International for the Department of
              Geography, Syracuse University. (1993) Sonora, Its Geographical
              Personality, Austin, University of Texas Press.
            </p>
          </div>
          <div className={styles.rwSubheaderb__btn}>
            <a href="http://localhost:3000/">VOLVER</a>
          </div>
        </div>
      </div>
    </div>
  );
}
