using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Grad
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Notes { get; set; }
        
        public int GradValuePoints { get; set; }
        public decimal GradValueDecimal { get; set; }
        public DateOnly? Date { get; set; }
        public Subject Subject { get; set; }
        
        public GradWeight GradWeight { get; set; }
    }
}
