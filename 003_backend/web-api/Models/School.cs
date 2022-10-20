using System.ComponentModel.DataAnnotations;
using web_api.Models.DetailModels;

namespace web_api.Models
{
    public class School
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? FedState { get; set; }
       
        // Listen der Klasse
        public List<HolidayDetails>? Holidays { get; set; }
    }
}
