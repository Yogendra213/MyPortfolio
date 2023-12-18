export default function HeroSection() {
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey,I'm Yogendra</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                          Full Stack</span>{""}
                          <br/>
                          Developer
                    </h1>
                    <p className="hero--section-description">Computer Science 
                    <br/>
                    CGPA:8.5
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/yo_img.jpg" alt="Hero Section"/>

            </div>
        </section>
    );
}