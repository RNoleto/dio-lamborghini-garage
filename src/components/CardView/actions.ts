import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

//fazer uma solicitação para api
export const loadCarData = async(id:number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>> ) => {
    const response = await fetchGetCarData(id);
    try {
        if(response){
            setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao buscar da API: " ,error);
        setCarData(null);
    }
};

export const handlerPreviusItem = async() => {

};

export const handlerNextItem = async() => {

};