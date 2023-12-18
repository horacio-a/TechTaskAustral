import "./Card.css";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonRefresher,
  IonRefresherContent,
  IonCardTitle,
  RefresherEventDetail,
  IonButton,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";

interface Pokemon {
  id: number;
  name: string;
  img: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: string;
}

const Card = () => {
  const [loading, setloading] = useState(true);
  const [loadingBtn, setloadingBtn] = useState(false);

  const [Pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setloading(true);
    const i = await getData();
    setPokemons(i);
    setloading(false);

    event.detail.complete();
  }

  async function moreData() {
    setloadingBtn(true);
    const data = await getData();
    setPokemons((prevObjetos) => [...prevObjetos, ...data]);
    setloadingBtn(false);
  }

  useEffect(() => {
    const data = async () => {
      const i = await getData();
      setPokemons(i);
      setloading(false);
    };
    data();
  }, []);

  if (loading) {
    return (
      <div className="conteiner">
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <img alt="Silhouette of mountains" src={`card-media.png`} />
          <IonCardHeader>
            <IonCardTitle>---</IonCardTitle>
            <IonCardSubtitle>
              <b>experiencia de base:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>altura:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>peso:</b>--
            </IonCardSubtitle>
            <IonCardSubtitle>
              <b>habilidades:</b>--
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </div>
    );
  } else {
    return (
      <div className="conteiner">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {Pokemons.map((objeto: Pokemon) => (
          <IonCard key={objeto.id} className="card">
            <img alt="Silhouette of mountains" src={`${objeto.img}`} />
            <IonCardHeader>
              <IonCardTitle>{objeto.name}</IonCardTitle>
              <IonCardSubtitle>
                <b>experiencia de base:</b> {objeto.base_experience}
              </IonCardSubtitle>
              <IonCardSubtitle>
                <b>altura:</b> {objeto.height}
              </IonCardSubtitle>
              <IonCardSubtitle>
                <b>peso:</b> {objeto.weight}
              </IonCardSubtitle>
              <IonCardSubtitle>
                <b>habilidades:</b> {objeto.abilities}
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        ))}
        <IonButton
          onClick={() => {
            moreData();
          }}
          className="btn"
          expand="full"
        >
          {loadingBtn ? "Cargando" : "cargar mas Pokemons"}
        </IonButton>
      </div>
    );
  }
};

export default Card;
