import './App.css'
import Header from './components/Header'
import Imgcard from './components/Imgcard'
import Slide from './components/Slide'
import Effect1 from './components/Effect1'
import Effect2 from './components/Effect2'
import Footer from './components/Footer'
function App() {

  const data = [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rRwq8no_lfyQO_hDX0anqGOx2PhKOT-qOg&usqp=CAU" },
    { image: "https://images8.alphacoders.com/476/thumb-1920-476725.jpg" },
    { image: "https://digwallpapers.com/wallpapers/full/0/a/d/97170-3840x2160-ronaldo-background-image-desktop-4k.jpg" },
    { image: "https://c4.wallpaperflare.com/wallpaper/891/194/510/cristiano-ronaldo-real-madrid-fifa-18-ball-wallpaper-preview.jpg" }

  ]

  const slideData = [
    { image: " https://e0.pxfuel.com/wallpapers/430/831/desktop-wallpaper-cristiano-ronaldo-2018.jpg" },
    { image: "  https://wallpapers.com/images/hd/cristiano-ronaldo-celebrating-win-3gg2n5khebd4icc2.jpg" },
    { image: " https://www.hdwallpapers.in/download/cristiano_ronaldo_is_wearing_manchester_united_sports_dress_standing_in_colorful_blur_background_hd_cr7-HD.jpg " },
    { image: "  https://play-lh.googleusercontent.com/vrlmlARNAJe4aUWPaDh1cl_Hx5Sa79PvN3NUal7i4oOzNwLuPlyxPci8P6Zsfb3igQ=w750-h750" },
    { image: "  https://lh3.googleusercontent.com/proxy/p3eoMJM-YsCbyI1EQrNcf2LYcg60r5W9sKGnUpfTM4_lkZheErjjFY-V27zzjZkkMLy6u1lTDznwfxvyodLIZd8JOJeySAEQGlm77DN054BSvrQvTGdsecwXGKw3DMFaolajOsxmfqoisHpcxFlkcQuHrF3FpyT3s3t_2oXyTAM" },

  ]

  return (
    <>
      <Header />
      <Effect1 />
      <Imgcard data={data} />
      <Slide slideData={slideData} />
      <Effect2 />
      <Footer />
    </>
  )
}

export default App
