
import showsData from "../../assets/showsData.json";

export function showDataLoader({ params }) {
    
    const { showsId } = params;
    const show = showsData.find(show => show.id === parseInt(showsId));
    if (!show) {
      throw new Error("Show not found");
    }
    return show;
  }
