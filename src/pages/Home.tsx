import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Card from "../components/Card";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="Content">
        <Card />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
