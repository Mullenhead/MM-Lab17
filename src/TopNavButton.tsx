
 
 //object taking care of TopNavButtonProps. Would like to know how to color the icon.
 type TopNavButtonProps = {
      icon: string, 
      buttonText: string, 
      onClick: () => void  
   }


export default function TopNavButton({ icon, buttonText, onClick }: TopNavButtonProps) {
//tell button what to do on click
    // const onClick = () => {
    //     alert("I'm a Button")
    // }
//build the buttun, "on click"  gets moved up tree to TopNav
    return(
        <button
        className="btn btn-outline-secondary me-2"
        onClick={onClick}
        >
        <img src={icon} style={{ width: "2rem"} }/>
        
        {buttonText}
        </button>
    )
}