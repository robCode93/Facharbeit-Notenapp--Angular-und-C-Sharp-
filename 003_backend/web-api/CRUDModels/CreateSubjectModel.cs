using System;
using System.ComponentModel.DataAnnotations;

namespace web_api.CRUDModels
{
    public class CreateSubjectModel
    {
        [Required]
        public string SubjectId { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }

        public Guid SchoolYear { get; set; }
        public IList<Guid> Grads { get; set; } = new List<Guid>();

    }
}

