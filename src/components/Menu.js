import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
    const handleOrder = (id) =>{
        // console.log(id);

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, order it!"
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  title: "Ordered!",
                  text: "Your order has been processed.",
                  icon: "success"
              });
          }
      });
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Weeks Specials</h2>
                <a className='orderbtn'>Menu</a>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h4>{recipe.title}</h4>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <div className="orderbtn" onClick={()=>handleOrder(recipe.id)}>Add to Cart</div>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Menu;