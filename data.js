import fimg from './assets/France.png';
import jimg from './assets/india.jpg';
import kimg from './assets/koreanew.jpg';

import lelouch from './assets/lelouch.png';
import denma from './assets/denma.png';
import vegana from './assets/vegana.png';

import fk1img from './assets/panchatantra.jpg';
import fk2img from './assets/jataka_tales.jpg';
import fk3img from './assets/legend.jpg';

import Pl1img from './assets/ram_mandir.jpg';
import Pl2img from './assets/golden_temple.jpg';
import Pl3img from './assets/manali.jpg';

import Sushiimg from './assets/paneer_tikka.jpg';
import Ramenimg from './assets/biryani.jpg';
import Udonimg from './assets/masala_dosa.jpg';

import Jp1img from './assets/red_fort.jpg';
import Jp2img from './assets/cuisine_main.png';
import Jp3img from './assets/folklore_front.jpg';
import Jp4img from './assets/diwali.jpg';

import Sadoimg from './assets/diwali.jpg';
import Hanamiimg from './assets/bharatnatyam.jpg';
import Ikebanaimg from './assets/indian_saree.jpg';


const navlinks = ["About", "Contact Us"];

const Japan = {
    title: "India",
    description: "Discover the ancient traditions, vibrant culture, and stunning natural beauty of India - a truly unforgettable travel experience.",
    image: jimg
}
const France = {
    title: "France",
    description: "Indulge in the art, cuisine, history, and romance of France - a dream destination for travelers seeking charm and sophistication.",
    image: fimg
}
const Korea = {
    title: "Korea",
    description: "Experience the dynamic blend of modern innovation and rich cultural heritage in Korea - a land of beauty, tradition, and adventure",
    image: kimg
}
const locations = [Japan, France, Korea];


const tst1 = {
    description: "A fun and educational way to travel from home - loved the immersive experience!",
    name: "-Denma,",
    status: "College Student",
    image: denma
}
const tst2 = {
    description: "Highly impressed with the website's authentic cultural representation.",
    name: "-Lelouch,",
    status: "College Student",
    image: lelouch
}
const tst3 = {
    description: "I've been able to explore new cultures and expand my horizons.",
    name: "-Vegana,",
    status: "College Student",
    image: vegana
}
const testimonials = [tst1, tst2, tst3];

const fk1 = {
    description: "The Panchatantra is an ancient collection of Indian fables and moral stories that dates back to the 3rd century BCE. Compiled by the scholar Vishnu Sharma, these timeless tales feature animal characters and impart valuable life lessons through engaging narratives. Each story teaches moral values such as wisdom, courage, and friendship, making them popular among both children and adults. The Panchatantra remains a cherished part of India's storytelling tradition, influencing literature, art, and culture for centuries.",
    name: "Panchatantra Tales",
    image: fk1img
}
const fk2 = {
    description: "The Jataka Tales are a collection of Buddhist folklore that recount the previous lives of Gautama Buddha, the founder of Buddhism. Originating from ancient India, these stories depict the Buddha's past incarnations as various animals, humans, and celestial beings. Each tale illustrates moral principles such as compassion, generosity, and selflessness, serving as moral parables for spiritual guidance and enlightenment. The Jataka Tales continue to inspire people around the world with their profound teachings and universal wisdom.",
    name: "Jataka Tales",
    image: fk2img
}
const fk3 = {
    description: "The legend of the Parijat tree is a popular folklore from Hindu mythology that revolves around love, devotion, and divine intervention. According to the myth, the Parijat tree (also known as the Night-flowering Jasmine) is a celestial plant brought to earth by Lord Krishna for his beloved wife, Satyabhama. The tree's fragrant flowers are said to bloom only at night and possess magical properties. The legend symbolizes the eternal bond between Krishna and Satyabhama, as well as the triumph of love over adversity. Today, the Parijat tree is revered as a sacred symbol of devotion and romance in Indian culture.",
    name: "The Legend of Parijat Tree:",
    image: fk3img
}
const folklores = [fk1, fk2, fk3];



const Jp1 = {
    description: "India is home to numerous historical landmarks that bear witness to its rich and diverse cultural heritage. From ancient temples and majestic forts to ornate palaces and sacred pilgrimage sites, these landmarks reflect the country's fascinating history and architectural brilliance.",
    name: "Places of India",
    image: Jp1img,
    link: "places"
}
const Jp2 = {
    description: "Experience the rich tapestry of flavors that is Indian cuisine. From aromatic curries to spicy street food delights, explore a culinary journey like no other. Discover the vibrant spices, diverse regional specialties, and centuries-old traditions that make Indian food a feast for the senses.",
    name: "Cuisines of India",
    image: Jp2img,
    link: "cuisines"
}
const Jp3 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Folklores of India",
    image: Jp3img,
    link: "folklore"
}
const Jp4 = {
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    name: "Cultures of India",
    image: Jp4img,
    link: "cultures"
}
const japanPage = [Jp1, Jp2, Jp3, Jp4];



const Cs1 = {
    description: "Paneer Tikka is a popular Indian dish made from marinated and grilled paneer (Indian cottage cheese) served with mint chutney. It is a favorite appetizer or snack at parties and gatherings, loved by vegetarians and non-vegetarians alike.",
    name: "Paneer Tikka",
    image: Sushiimg
}
const Cs2 = {
    description: "Biryani is a flavorful rice dish cooked with aromatic spices, herbs, and meat (such as chicken, mutton, or fish) or vegetables. It originated in the Indian subcontinent and is enjoyed across the country with various regional variations.",
    name: "Biryani",
    image: Ramenimg
}
const Cs3 = {
    description: " Masala Dosa is a popular South Indian dish consisting of a crispy fermented crepe made from rice and lentils, filled with a spicy potato mixture. It is typically served with coconut chutney and sambar (a lentil-based vegetable stew).",
    name: "Masala Dosa",
    image: Udonimg
}
const cuisines = [Cs1, Cs2, Cs3];


const Cl1 = {
    description: "Diwali, also known as the Festival of Lights, is one of the most important Hindu festivals celebrated across India. It symbolizes the victory of light over darkness, good over evil, and knowledge over ignorance. During Diwali, people decorate their homes with oil lamps, candles, and colorful rangoli designs, and exchange sweets and gifts with loved ones.",
    name: "Diwali",
    image: Sadoimg
}
const Cl2 = {
    description: "Bharatanatyam is one of the oldest and most popular classical dance forms of India, originating in the temples of Tamil Nadu. It is known for its intricate footwork, expressive gestures, and elaborate costumes. Bharatanatyam is not just a dance form but also a means of storytelling, conveying themes from Hindu mythology and folklore.",
    name: "Bharatanatyam",
    image: Hanamiimg
}
const Cl3 = {
    description: "The Indian saree is a traditional garment worn by women across India. It is a long piece of cloth usually draped elegantly around the body, with one end pleated and tucked into the waist, while the other end is draped over the shoulder. Sarees come in a variety of fabrics, colors, and designs, and are often worn on special occasions and festivals.",
    name: "Indian saree",
    image: Ikebanaimg
}
const cultures = [Cl1, Cl2, Cl3];


const Place1 = {
    description: "The Ram Mandir, located in Ayodhya, India, is a magnificent Hindu temple dedicated to Lord Shri Rama. It stands on the sacred site of Ram Janmabhoomi and was inaugurated in January 2024. The temple’s stunning architecture, including pink sandstone walls and intricate carvings, attracts devotees and visitors from around the world.",
    name: "Ram Mandir",
    image: Pl1img
}
const Place2 = {
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest Gurdwara and the most important pilgrimage site of Sikhism. Located in Amritsar, Punjab, India, it is a stunning architectural marvel plated with gold, surrounded by a sacred pool known as the Amrit Sarovar.",
    name: "Golden Temple",
    image: Pl2img
}
const Place3 = {
    description: "Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.",
    name: "Manali",
    image: Pl3img
}
const places = [Place1, Place2, Place3];

export {locations, testimonials, folklores, japanPage, cuisines, cultures, places, navlinks};