export default function Slider(){
  return(
    <div>
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 } as React.CSSProperties}>
          <div className="item" style={{ '--position': 1 } as React.CSSProperties}><img src="/img01.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 2 } as React.CSSProperties}><img src="/img02.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 3 } as React.CSSProperties}><img src="/img03.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 4 } as React.CSSProperties}><img src="/img04.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 5 } as React.CSSProperties}><img src="/img05.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 6 } as React.CSSProperties}><img src="/img06.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 7 } as React.CSSProperties}><img src="/img07.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 8 } as React.CSSProperties}><img src="/img08.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 9 } as React.CSSProperties}><img src="/img09.jpg" alt=""></img></div>
          <div className="item" style={{ '--position': 10 } as React.CSSProperties}><img src="/img10.jpg" alt=""></img></div>
        </div>

        <div className="content">
          <h1 data-content="3D IMAGE SLIDER">3D IMAGE SLIDER</h1>
          <div className="author">
            <h2>Zara Yousuf</h2>
            <p><b>Web Design</b></p>
        </div>
        </div>
      </div>
    </div>
  )
}