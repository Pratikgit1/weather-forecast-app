import React , {useState} from "react";
import './Accordion.scss';

const Accordion = (props) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div key={props.key} className="accordion">
        <section onClick={handleToggle}>
            {props.title}
            </section>
        {
            toggle && <section className="big">
                 {props.content}
            </section>
        }
        <section className="small">
                 {props.content}
            </section>
        </div>
    );
};

export default Accordion;