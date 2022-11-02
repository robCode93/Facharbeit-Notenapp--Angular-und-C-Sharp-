using System.ComponentModel.DataAnnotations;
namespace web_api.Models
{
    public class Holiday
    {
        [Key]
        public Guid Id { get; set; }
        public string? FederalState { get; set; }
        public string? Name{ get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
