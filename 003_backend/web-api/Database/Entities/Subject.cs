using System.ComponentModel.DataAnnotations;
using web_api.Models.DetailModels;

namespace web_api.Models
{
    public class Subject
    {
        [Key]
        public Guid Id { get; set; }
        
        public bool IsActive { get; set; }
        public string? Name { get; set; }
        public string? ShortName { get; set; }

        public string? RoomNumber { get; set; }
        
        public Teacher? Teacher { get; set; }
        // Listen der Klasse
        public List<Grad>? Grads { get; set; } = new List<Grad>();
    }
}
