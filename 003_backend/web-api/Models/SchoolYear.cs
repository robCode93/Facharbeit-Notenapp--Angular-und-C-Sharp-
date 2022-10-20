using System.ComponentModel.DataAnnotations;
using web_api.Models.DetailModels;

namespace web_api.Models
{
    public class SchoolYear
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }

        // Fremdverweise der Klasse
        public SchoolDetails? School { get; set; }

        // Listen der Klasse
        public List<SubjectDetails>? Subjects { get; set; }
    }
}
