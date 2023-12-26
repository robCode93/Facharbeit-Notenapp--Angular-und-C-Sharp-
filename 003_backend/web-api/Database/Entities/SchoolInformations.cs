using System.ComponentModel.DataAnnotations;
using web_api.Models.DetailModels;

namespace web_api.Models
{
    public class SchoolInformations
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Address? Address { get; set; }
        public ContactInformations? ContactInformations { get; set; }
    }
}
