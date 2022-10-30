using System;
using web_api.Models.DetailModels;

namespace web_api.CRUDModels
{
    public class CreateSchoolYearModel
    {
        public string Name { get; set; }
        public Guid School { get; set; }
        public IList<Guid> Subjects { get; set; } = new List<Guid>();
    }
}

