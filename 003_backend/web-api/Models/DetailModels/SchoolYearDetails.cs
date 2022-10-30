using System;
namespace web_api.Models.DetailModels
{
    public class SchoolYearDetails
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }

        public SchoolDetails? School { get; set; }
        public IList<SubjectDetails>? Subjects { get; set; } = new List<SubjectDetails>();
    }
}

