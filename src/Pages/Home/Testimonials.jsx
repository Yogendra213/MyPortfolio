import data from "../../data/index.json"

export default function Testimonial() {
    return (
        <section className="testimonial--section" >
            <div className="portfolio--container-box">
                <div className="portfolio--container" id="testimonial">
                    <p className="sub--title" >My Active Memberships and Key Roles</p>
                    <h2 className="sections--headings" >CLUBS</h2>
                </div>
            </div>
            <div className="portfolio--section--container" >
                {data?.testimonial?.map((item, index) => (
                    <div key={index} className="testimonial--section--card">
                        {/* <div className="testimonial--section--card--review">
                        </div> */}
                        <p className="testimonial-title">{item.author_name}</p>
                        <div className="testimonial--section--img">
                            <img src={item.src} alt="Avatar" />
                        </div>
                        <p className="text-md testimonial--author--designation">{item.author_designation}</p>
                        <p className="text-md testimonial-desc"> {item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}