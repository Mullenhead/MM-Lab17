import UseProps from "./UseProps.jsx"

export default function UsePropsList() {

    return(
        <>
        {/* key value pairs for UseProps, name, age, button title, alive status */}
         <UseProps 
          name="Billy Bob"
          age={30} 
          alive={false}
          btn_title1="1 Press This"
          btn_title2="Don't Press This"
          btn_title3="Change Pie"
          btn_title4="Increse Visits"
          />

         
          <UseProps 
          name="Mark Doublename"
          age={102} 
          alive={true}
          btn_title1="2 Press This"
          btn_title2="Don't Press This"
          btn_title3="Change Pie"
          btn_title4="Increse Visits"
          />

           <UseProps 
        //   name="Tina Klinkmuller"
        //   age={23} 
        //   alive={true}
          btn_title1="3 Press This"
          btn_title2="Don't Press This"
          />
        
        
        </>
    )
}