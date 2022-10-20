using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Grad
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int? Points { get; set; }
        public DateTime? Date { get; set; }
        public string? Weight {get; set; }
    }
}
