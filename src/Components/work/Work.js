import './Work.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiLinkExternal } from 'react-icons/bi';
import { motion } from 'framer-motion';

import Aos from 'aos';
import 'aos/dist/aos.css';
function Work() {
  const [data, setData] = useState([]);
  const reduxStore = useSelector((store) => store.worksReducer);

  useEffect(() => {
    reduxStore.works && setData(reduxStore.works);
    // console.log(data)
    Aos.init({ duration: 1000 });
  });

  const imgVariant = {
    initial: {
      x: '40%',
      opacity: 0,
    },
    animate: {
      x: '0%',
      opacity: 1,
    },
  };

  const workData = [
    {
      _id: 1,
      name: 'TechZoid',
      url: 'https://techzoid-blog.onrender.com/',
      image:
        'https://res.cloudinary.com/dm46dmseq/image/upload/v1682938557/passwordmanagementsystem_vamri7.jpg',
    },
    {
      _id: 2,
      name: 'PassWord Manager',
      url: 'https://todo-app-tau-lac.vercel.app/',
      image:
        'https://res.cloudinary.com/dm46dmseq/image/upload/v1657602470/todo_eypvhq.jpg',
    },
    {
      _id: 3,
      name: 'Space Tourism',
      url: 'https://spacetourism-project.vercel.app/',
      image:
        'https://res.cloudinary.com/dm46dmseq/image/upload/v1683364145/spacetourism_a1yowr.jpg',
    },
    {
      _id: 4,
      name: 'Portfolio Site',
      url: 'https://sumit723-portfolio.vercel.app/',
      image:
        'https://res.cloudinary.com/dm46dmseq/image/upload/v1682938830/portfolio_kaiwy0.jpg',
    },
  ];

  return (
    <>
      <div id='work'>
        <div className='work__parent'>
          <div className='work__heading' data-aos='fade-up'>
            <p>Recent Works</p>
            <h1>
              I love what I do,
              <br /> check out some my of latest works{' '}
            </h1>
          </div>

          <div className='work__items'>
            <ul className='work__items__ul'>
              {workData &&
                workData.map((work) => (
                  <li className='work__list'>
                    {work.name}
                    <a href={work.url} target='_blank'>
                      <span>
                        {' '}
                        <BiLinkExternal size={25} />
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* <div className="work__parent__box" > */}
          {/* <div className="work__parent__box" data-aos="fade-up" >
                        {workData.map((works) =>
                            <div className="work__box" key={works._id}
                                style={{ background: `url(${works.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
                                <p className='work__name'>{works.name}</p>
                                <a href={works.url} target="_blank" >Visit</a>
                            </div>
                        )}
                    </div> */}
        </div>
      </div>
    </>
  );
}

export default Work;
