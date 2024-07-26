import './slide.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function SlideApp() {
  return <ImageSlider slides={SliderData} />;
}

export default SlideApp;
