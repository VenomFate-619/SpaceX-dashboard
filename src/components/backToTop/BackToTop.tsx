import React , {useState , useEffect} from 'react'
import "./backtotop.css"
interface Props 
{
    visibleDistance?:number 
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const  BackToTop:React.FC<Props> = ({visibleDistance = 3000}) => {
    const [showArrow,setArrow] = useState<boolean>(false)

     useEffect(() => {
       const checkScrollTop = () => {
         if (!showArrow && window.pageYOffset > visibleDistance) {
           setArrow(true);
         } else setArrow(false);
       };
       window.addEventListener("scroll", checkScrollTop);

       return () => {
         window.removeEventListener("scroll", checkScrollTop);
       };
     }, []);

    return (
        <>
      {showArrow && (
        <div className="scrollToTop" onClick={scrollToTop}>
          <span>&#x2191;</span>
        </div>
      )}
      </>
    );
}

export default BackToTop
