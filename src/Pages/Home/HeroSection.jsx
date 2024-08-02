export default function HeroSection() {
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Welcome To My Portfolio</p>
                    <div className="hero--section--title">
                        <div className="wave-hand">✋</div>
                        <div className="hero--section-title--color">I'm Yogendra</div>
                        <br />
                    </div>
                    <p className="hero--section-description">Computer Science Engineer
                        <br />
                    </p>
                </div>
                <div style={{marginTop:"30px"}}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yogendraguthikonda020103@gmail.com" target="_blank">
                        <button className="btn btn-primary">Get in Touch</button></a>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/yog-test.png" alt="Hero Section" />

            </div>
        </section>
    );
}