using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrmmJr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetPizzaDropdowns()
        {
            return Ok(new PizzaData());
        }
    }

    public class DropDownData
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class PizzaData
    {
        public List<DropDownData> Crusts { get; set; }
        public List<DropDownData> Toppings { get; set; }
        public PizzaData()
        {
            Toppings = new List<DropDownData>
            {
                new DropDownData { Id = 1, Name = "Pepperoni" },
                new DropDownData { Id = 2, Name = "Sausage" },
                new DropDownData { Id = 3, Name = "Bacon" },
                new DropDownData { Id = 4, Name = "Ham" },
                new DropDownData { Id = 5, Name = "Extra Cheese" },
            };
            Crusts = new List<DropDownData>
            {
                new DropDownData { Id = 1, Name = "Thin" },
                new DropDownData { Id = 2, Name = "Regular" },
                new DropDownData { Id = 3, Name = "Deep Dish" }
            };

        }
    }
}
