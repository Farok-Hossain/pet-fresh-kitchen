
import ChooseKitchen from "@/components/Vet/ChooseKitchen";
import FreshFood from "@/components/Vet/FreshFood";
import PetNutrition from "@/components/Vet/PetNutrition";
import VetBanner from "@/components/Vet/VetBanner";
import VetOrder from "@/components/Vet/VetOrder";


const Vet = () => {
    return (
        <div>
            <VetBanner />
            <PetNutrition />
            <FreshFood />
            <ChooseKitchen />
            <VetOrder />
        </div>
    );
};

export default Vet;